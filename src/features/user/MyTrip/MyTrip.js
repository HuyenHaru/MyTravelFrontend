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
  Row,
  Col,
  Tabs,
} from "antd";
import { columnsTable } from "../../../app/utils/config";
import { useDebounce } from "../../../app/Layout/common/CustomHook";
import SuggestTrip from "./SuggestTrip";

const { Option } = Select;
const { Title, Text } = Typography;
const { TabPane } = Tabs;

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
      `https://still-castle-31935.herokuapp.com/api/auth/suggest-place/${cityId}/${time}`
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
  const [selectedRowKeys, setSelectedRowKeys] = useState({
    place: [],
    hotel: [],
    food: [],
  });
  const [city, setCity] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const debounceSearchTerm = useDebounce(searchTerm, 800);
  const [prices, setPrices] = useState({
    place: 0,
    hotel: 0,
    food: 0,
  });

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

    return () => {
      setPrices({
        place: 0,
        hotel: 0,
        food: 0,
      });
    };
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

  const onSelectPlaceChange = selectedPlaceRowKeys => {
    let placePrice = prices.place;
    selectedPlaceRowKeys.forEach(rowKey => {
      let place = places.find(place => place._id === rowKey);

      if (place) {
        placePrice += Number(place.price);
      }
    });

    setPrices({ ...prices, place: placePrice });
    setSelectedRowKeys({
      ...selectedRowKeys,
      place: selectedPlaceRowKeys,
    });
  };

  const onSelectHotelChange = selectedHotelRowKeys => {
    let hotelPrice = prices.hotel;
    selectedHotelRowKeys.forEach(rowKey => {
      let hotel = hotels.find(hotel => hotel._id === rowKey);

      if (hotel) {
        hotelPrice += Number(hotel.price);
      }
    });

    setPrices({ ...prices, hotel: hotelPrice });

    setSelectedRowKeys({
      ...selectedRowKeys,
      hotel: selectedHotelRowKeys,
    });
  };

  const onSelectFoodChange = selectedFoodRowKeys => {
    let foodPrice = prices.food;
    selectedFoodRowKeys.forEach(rowKey => {
      let food = foods.find(food => food._id === rowKey);

      if (food) {
        foodPrice += Number(food.price);
      }
    });

    setPrices({ ...prices, food: foodPrice });

    setSelectedRowKeys({
      ...selectedRowKeys,
      food: selectedFoodRowKeys,
    });
  };

  // const rowSelection = { selectedRowKeys, onChange: onSelectChange };
  const rowPlaceSelection = {
    selectedRowKeys: selectedRowKeys.place,
    onChange: onSelectPlaceChange,
  };
  const rowHotelSelection = {
    selectedRowKeys: selectedRowKeys.hotel,
    onChange: onSelectHotelChange,
  };
  const rowFoodSelection = {
    selectedRowKeys: selectedRowKeys.food,
    onChange: onSelectFoodChange,
  };

  const places = prepareTableDataSource('places', city);
  const hotels = prepareTableDataSource('hotels', city).map(hotel => ({
    ...hotel,
    price: Math.round((Number(hotel.priceMin) + Number(hotel.priceMax)) / 2),
  }));
<<<<<<< HEAD
  const foods = prepareTableDataSource("foods", city);
  const { TabPane } = Tabs;
=======
  const foods = prepareTableDataSource('foods', city);

>>>>>>> 730c0928dea4b96cb0457dc4d5051ea86cbe47f7
  return (
    <div className='my-trip'>
      <div className='module-banner'>
        <img
          className='img-respon img-banner'
          src='./assets/images/banner-post.jpg'
          alt=''
        />
        <div className='title-bn'>
          <h2>Lịch trình của tôi</h2>
          <div>Trang chủ &nbsp;/&nbsp; Bạn muốn đến?</div>
        </div>
      </div>
      <Container>
        <div className='content-trip'>
          <Tabs defaultActiveKey='1'>
            <TabPane tab='Lên lịch trình theo số ngày du lịch' key='1'>
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                  <h3 className='paci-font'>
                    Hãy tự tạo cho mình một lịch trình phù hợp với quỹ thời gian
                    và hầu bao của bản thân nào!
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
                        placeholder='Tìm kiếm tỉnh/thành phố'
                        showSearch
                        notFoundContent={
                          loadingCities ? <Spin size='small' /> : null
                        }
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
                        className='fr'
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
                          rowSelection={rowPlaceSelection}
                          columns={columnsPlace}
                          dataSource={places}
                          pagination={false}
                          title={() => (
                            <Title level={4}>
                              Những địa điểm tham quan phù hợp với số ngày của
                              bạn. Mời bạn tham khảo. Nếu muốn chọn những địa
                              điểm khác, mời bạn chọn ở mục dưới cùng!
                            </Title>
                          )}
                        />
                      )}

                      {foods.length > 0 && (
                        <Table
                          rowSelection={rowFoodSelection}
                          columns={columnsFood}
                          dataSource={foods}
                          pagination={false}
                          title={() => (
                            <Title level={4}>
                              Những món ăn bạn không nên bỏ lỡ
                            </Title>
                          )}
                        />
                      )}

                      {hotels.length > 0 && (
                        <Table
                          rowSelection={rowHotelSelection}
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
                </Col>
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                  <div className='post-lq'>
                    <h2 className='title-profile'>Chi phí</h2>
                    <div className='list-item-lq'>
                      <div className='item-lq'>
                        <Text strong>Vé du lịch: </Text>
                        <Text>{prices.place}</Text>
                        <Text> VND</Text>
                      </div>

                      <div className='item-lq'>
                        <Text strong>Chi phí khách sạn: </Text>
                        <Text>{prices.hotel}</Text>
                        <Text> VND</Text>
                      </div>

                      <div className='item-lq'>
                        <Text strong>Chi phí ăn uống: </Text>
                        <Text>{prices.food}</Text>
                        <Text> VND</Text>
                      </div>

                      <div className='pt-2'>
                        <Text strong>Total: </Text>
                        <Text>{prices.place + prices.hotel + prices.food}</Text>
                        <Text> VND</Text>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab='Lên lịch trình theo chọn địa điểm' key='2'>
              <SuggestTrip />
            </TabPane>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default MyTrip;
