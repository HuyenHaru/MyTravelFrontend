import React from "react";
import { Container } from "react-bootstrap";
import { Form, Input, InputNumber, Select } from "antd";

const MyTrip = () => {
  const [state, setState] = useState;
  return (
    <div className="my-trip">
      <div className="module-banner">
        <img
          className="img-respon img-banner"
          src="./../../assets/images/banner-post.jpg"
          alt=""
        />
        <div className="title-bn">
          <h2>Lịch trình của tôi</h2>
          <div>Trang chủ &nbsp;/&nbsp; Bạn muốn đến?</div>
        </div>
      </div>
      <Container>
        <div className="content-trip">
          <h3 className="paci-font">
            Hãy tự tạo cho mình một lịch trình phù hợp với quỹ thời gian và hầu
            bao của bản thân nào!
          </h3>
          <Form>
            <Form.Item
              name="city"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên tỉnh",
                },
              ]}
            >
              <Select
                showSearch
                value={this.state.value}
                placeholder={this.props.placeholder}
                style={this.props.style}
                defaultActiveFirstOption={false}
                showArrow={false}
                filterOption={false}
                onSearch={this.handleSearch}
                onChange={this.handleChange}
                notFoundContent={null}
              >
                {options}
              </Select>
            </Form.Item>
            <Form.Item
              name="time"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập số ngày du lịch",
                },
              ]}
              style={{ width: "100%" }}
            >
              <InputNumber
                placeholder="Nhập số ngày du lịch"
                min={1}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Form>

          <div className="food">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th colSpan="6">
                      Hãy chọn cho mình những món đặc sản không nên bỏ lỡ
                    </th>
                  </tr>
                  <tr>
                    <th>Tên món</th>
                    <th>Ảnh</th>
                    <th>Giá</th>
                    <th>Địa chỉ</th>
                    <th>Mô tả</th>
                    <th>Chọn</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Món 1</td>
                    <td width="20%">
                      <img
                        className="img-respon"
                        src="./../assets/images/lq1.png"
                      />
                    </td>
                    <td>30.000 đ</td>
                    <td>Đường hùng vương, thành phố Đã Nẵng</td>
                    <td>
                      Món này
                      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyTrip;
