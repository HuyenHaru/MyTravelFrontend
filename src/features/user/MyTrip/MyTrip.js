import React from "react";
import { Container } from "react-bootstrap";
import { Form, Input, InputNumber } from "antd";

const MyTrip = () => {
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
              <Input placeholder="Thành phố bạn muốn đến" />
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
        </div>
      </Container>
    </div>
  );
};

export default MyTrip;
