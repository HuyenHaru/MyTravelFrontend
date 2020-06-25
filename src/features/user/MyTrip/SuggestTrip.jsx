import React, {useEffect, useState} from 'react';
import {Form, Button, Spin, Select, Table} from 'antd';
import { useDebounce } from "../../../app/Layout/common/CustomHook";
import axios from "axios";
import {columnsTable} from "../../../app/utils/config";

const { Option } = Select;

const { columnsPlace } = columnsTable;

const searchCity = async keyWord => {
  let cities = [];

  try {
    const response = await axios.get(`/api/city/search?keyWord=${keyWord}`);
    cities = await response.data.cities;

    cities = cities.map(city => ({
      text: city.name,
      value: city.id,
    }));
  } catch (err) {
    console.log(err);
  }

  return cities;
};

const fetchSuggestTrip = async (city, placeIds) => {
  let places = [];

  placeIds = placeIds.join(', ');

  try {
    const response = await axios.post(
        `https://still-castle-31935.herokuapp.com/api/auth/suggest-trip/${city}`,
        { places: placeIds },
        { headers: {"Content-Type": "application/json"} }
        );
    places = response.data.places;
  } catch (e) {
    console.log(e);
  }

  return places;
};

const fetchCityData = async (city) => {
  let result = {};

  try {
    const response = await axios.get(`https://still-castle-31935.herokuapp.com/api/city/${city}`);
    result = response.data.city;
  } catch (e) {
    console.log(e);
  }

  return result;
};

const SuggestTrip = () => {
  const [form] = Form.useForm();
  const [cities, setCities] = useState([]);
  const [cityValue, setCityValue] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const debounceSearchTerm = useDebounce(searchTerm, 800);
  const [loadingCities, setLoadingCities] = useState(false);
  const [suggestTripLoading, setSuggestTripLoading] = useState(false);
  const [suggestedPlaces, setSuggestedPlaces] = useState(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [city, setCity] = useState({});
  const [loadingCity, setLoadingCity] = useState(false);

  useEffect(() => {
    if (debounceSearchTerm) {
      setCities([]);
      setLoadingCities(true);

      searchCity(debounceSearchTerm).then(cities => {
        setCities(cities);
        setLoadingCities(false);
      });
    }
  }, [debounceSearchTerm]);

  const handleSelectCityChange = ({ value }) => {
    setCity({});
    setLoadingCity(true);

    fetchCityData(value).then(city => {
      setCity(city);
      setLoadingCity(false);
    }).catch(err => {
      console.log(err);
      setLoadingCity(false);
    });

    setCityValue(value);
  };
  const fetchCity = value => setSearchTerm(value);
  const onSelectChange = selectedRowKeys => setSelectedRowKeys(selectedRowKeys);
  const handleSuggestTrip = values => {
    const { city: { value } } = values;
    setSuggestedPlaces([]);
    setSuggestTripLoading(true);

    fetchSuggestTrip(value, selectedRowKeys).then(places => {
      places.splice(-1,1);
      setSuggestedPlaces(places);
      setSuggestTripLoading(false);
      setSelectedRowKeys([])
    }).catch(err => {
      console.log(err);
      setSuggestTripLoading(false);
      setSelectedRowKeys([])
    });
  };

  const rowSelection = { selectedRowKeys, onChange: onSelectChange };
  const dataSourcePlaces = suggestedPlaces ? suggestedPlaces.map(pl => ({ ...pl, key: pl._id })) : (city && city.places ? city.places.map(pl => ({ ...pl.place, key: pl.place._id })) : []);

  return (
    <div>
      <Form
        form={form}
        onFinish={handleSuggestTrip}
      >
        <Form.Item name='city' rules={[{ required: true, message: 'Vui lòng chọng một thành phố' }]}>
          <Select
              labelInValue
              value={cityValue}
              placeholder='Select City'
              showSearch
              notFoundContent={loadingCities ? <Spin size='small' /> : null}
              filterOption={false}
              onSearch={fetchCity}
              onChange={handleSelectCityChange}
              style={{ width: '100%' }}
          >
            {cities.map(d => (
                <Option key={d.value}>{d.text}</Option>
            ))}
          </Select>
        </Form.Item>
        {
          selectedRowKeys.length > 0 && (
              <Form.Item>
                <Button type='primary' htmlType='submit' loading={suggestTripLoading}>Gợi ý lịch trình</Button>
              </Form.Item>
          )
        }

      </Form>

      <Spin spinning={loadingCity}>
        <Table
            rowSelection={rowSelection}
            columns={columnsPlace}
            dataSource={dataSourcePlaces}
            pagination={false}
        />
        {/*{suggestedPlaces.length > 0 ? (*/}
        {/*    <Table*/}
        {/*        rowSelection={rowSelection}*/}
        {/*        columns={columnsPlace}*/}
        {/*        dataSource={suggestedPlaces}*/}
        {/*        pagination={false}*/}
        {/*    />*/}
        {/*) : (*/}
        {/*    <Table*/}
        {/*        rowSelection={rowSelection}*/}
        {/*        columns={columnsPlace}*/}
        {/*        dataSource={city.places}*/}
        {/*        pagination={false}*/}
        {/*    />*/}
        {/*)}*/}
      </Spin>
    </div>
  )
}

export default SuggestTrip;