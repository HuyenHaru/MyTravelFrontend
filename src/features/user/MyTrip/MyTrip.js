import React, { useState } from 'react';
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
} from 'antd';
import { columnsTable } from '../../../app/utils/config';

const { Option } = Select;
const { Title } = Typography;

const { columnsPlace, columnsHotel, columnsFood } = columnsTable;

const prepareTableDataSource = (type, city) => {
  if (Object.keys(city).length > 0) {
    if (type === 'places') {
      return city.places.map(pl => ({ ...pl.place, key: pl.place._id }));
    } else {
      type = type.slice(0, -1);

      return city[`${type}s`].map(value => {
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

const MyTrip = () => {
  const [state, setState] = useState({
    data: [],
    value: null,
    fetching: false,
    selectedRowKeys: [],
    city: {},
    places: [],
  });
  const [form] = Form.useForm();

  const fetchCity = async value => {
    setState({ ...state, data: [], fetching: true });
    let cities = await searchCity(value);

    setState({ ...state, data: cities, fetching: false });
  };

  const handleChange = value => {
    setState({
      ...state,
      data: [],
      fetching: false,
      value: value,
    });
  };

  const handleSuggestPlace = async ({ city: { value }, time }) => {
    setState({ ...state, city: [], fetching: true });
    let city = await fetchSuggestPlaces(value, time);

    setState({ ...state, city, fetching: false });
  };

  const onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setState({ ...state, selectedRowKeys });
  };

  const rowSelection = {
    selectedRowKeys: state.selectedRowKeys,
    onChange: onSelectChange,
  };

  const places = prepareTableDataSource('places', state.city);
  const hotels = prepareTableDataSource('hotels', state.city);
  const foods = prepareTableDataSource('foods', state.city);

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
                value={state.value}
                placeholder='Select City'
                showSearch
                notFoundContent={state.fetching ? <Spin size='small' /> : null}
                filterOption={false}
                onSearch={fetchCity}
                onChange={handleChange}
                style={{ width: '100%' }}
              >
                {state.data.map(d => (
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
              <Button type='primary' htmlType='submit' loading={state.fetching}>
                Gợi ý lịch trình
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
        </div>
      </Container>
    </div>
  );
};

export default MyTrip;
