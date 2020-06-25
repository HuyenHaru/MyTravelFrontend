import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import {
  Form,
  InputNumber,
  Select,
  Spin,
  Button,
  Table,
  Typography,
  Divider,
} from 'antd';
import { columnsTable } from '../../../app/utils/config';
import { useDebounce } from '../../../app/Layout/common/CustomHook';
import SuggestTrip from './SuggestTrip';

const { Option } = Select;
const { Title } = Typography;

const { columnsPlace, columnsHotel, columnsFood } = columnsTable;

const prepareTableDataSource = (type, city) => {
  if (Object.keys(city).length > 0) {
    if (type === 'places') {
      return city.places.map(pl => ({ ...pl, key: pl._id }));
    } else {
      type = type.slice(0, -1);

      return city[`${type}s`]
        .filter(el => el[type])
        .map(value => {
          return {
            ...value[type],
            image: (
              <img
                alt='value'
                src={value[type].image}
                style={{ width: '100%', maxWidth: '100px' }}
              />
            ),
            key: value[type]._id,
          };
        });
    }
  }

  return [];
};

const fetchSuggestPlaces = async (cityId, time) => {
  let city = {};

  try {
    const response = await axios.get(
      `/api/auth/suggest-place/${cityId}/${time}`
    );
    city = response.data.city;
  } catch (err) {
    console.log(err);
  }

  return city;
};

const searchCity = async keyWord => {
  let cities = [];

  try {
    const response = await axios.get(
      `https://still-castle-31935.herokuapp.com/api/city/search?keyWord=${keyWord}`
    );
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

const MyTrip = () => {
  const [cities, setCities] = useState([]);
  const [loadingCities, setLoadingCities] = useState(false);
  const [loadingSuggestPlaces, setLoadingSuggestPlaces] = useState(false);
  const [cityValue, setCityValue] = useState(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [city, setCity] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const debounceSearchTerm = useDebounce(searchTerm, 800);

  const [form] = Form.useForm();

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

  const fetchCity = value => setSearchTerm(value);

  const handleSelectCityChange = value => setCityValue(value);

  const handleSuggestPlace = async ({ city: { value }, time }) => {
    setCity({});
    setLoadingSuggestPlaces(true);

    fetchSuggestPlaces(value, time)
      .then(city => {
        setCity(city);
        setLoadingSuggestPlaces(false);
      })
      .catch(err => {
        console.log(err);
        setLoadingSuggestPlaces(false);
      });
  };

  const onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = { selectedRowKeys, onChange: onSelectChange };

  const places = prepareTableDataSource('places', city);
  const hotels = prepareTableDataSource('hotels', city);
  const foods = prepareTableDataSource('foods', city);

  return (
    <div className='my-trip'>
      <div className='module-banner'>
        <img
          className='img-respon img-banner'
          src='./../../assets/images/banner-post.jpg'
          alt=''
        />
        <div className='title-bn'>
          <h2>Lịch trình của tôi</h2>
          <div>Trang chủ &nbsp;/&nbsp; Bạn muốn đến?</div>
        </div>
      </div>
      <Container>
        <div className='content-trip'>
          <h3 className='paci-font'>
            Hãy tự tạo cho mình một lịch trình phù hợp với quỹ thời gian và hầu
            bao của bản thân nào!
          </h3>
          <Form form={form} onFinish={handleSuggestPlace}>
            <Form.Item
              name='city'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập tên tỉnh',
                },
              ]}
            >
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
            <Form.Item
              name='time'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập số ngày du lịch',
                },
              ]}
              style={{ width: '100%' }}
            >
              <InputNumber
                placeholder='Nhập số ngày du lịch'
                min={1}
                style={{ width: '100%' }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                loading={loadingSuggestPlaces}
              >
                Gợi ý chuyến đi
              </Button>
            </Form.Item>
          </Form>

          <div className='food'>
            <div className='table-responsive'>
              {places.length > 0 && (
                <Table
                  rowSelection={rowSelection}
                  columns={columnsPlace}
                  dataSource={places}
                  pagination={false}
                  title={() => (
                    <Title level={4}>
                      Những địa điểm tham quan phù hợp với số ngày của bạn
                    </Title>
                  )}
                />
              )}

              {foods.length > 0 && (
                <Table
                  rowSelection={rowSelection}
                  columns={columnsFood}
                  dataSource={foods}
                  pagination={false}
                  title={() => (
                    <Title level={4}>Những món ăn bạn không nên bỏ lỡ</Title>
                  )}
                />
              )}

              {hotels.length > 0 && (
                <Table
                  rowSelection={rowSelection}
                  columns={columnsHotel}
                  dataSource={hotels}
                  pagination={false}
                  title={() => (
                    <Title level={4}>
                      Bạn có thể tham khảo những khách sạn dưới đây
                    </Title>
                  )}
                />
              )}
            </div>
          </div>

          <Divider />
          <SuggestTrip />
        </div>
      </Container>
    </div>
  );
};

export default MyTrip;
