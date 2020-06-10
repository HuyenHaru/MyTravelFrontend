import React from "react";
import { Container } from "react-bootstrap";

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
        </div>
      </Container>
    </div>
  );
};

export default MyTrip;