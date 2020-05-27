import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <main>
        <div className="">
          <div className="igi_banner">
            <div className="igi_bn_item">
              <img
                className="img-bn"
                src="./../../assets/images/banner-home.png"
                alt=""
              />
              <div className="link-banner">
                Xách balo lên và đi đến nơi bạn muốn thôi nào!
              </div>
              <div className="box-link">
                <Link to="/ha-noi" className="item-box-link">
                  <img
                    src="./../../assets/images/ha-noi.jpg"
                    className="img-respon"
                    alt=""
                  />
                </Link>
                <Link to="/da-nang" className="item-box-link">
                  <img
                    src="./../../assets/images/ha-noi.jpg"
                    className="img-respon"
                    alt=""
                  />
                </Link>
                <Link to="/ho chi minh" className="item-box-link">
                  <img
                    src="./../../assets/images/ha-noi.jpg"
                    className="img-respon"
                    alt=""
                  />
                </Link>
                <Link to="/ha-noi" className="item-box-link">
                  <img
                    src="./../../assets/images/ha-noi.jpg"
                    className="img-respon"
                    alt=""
                  />
                </Link>
                <Link to="/ha-noi" className="item-box-link">
                  <img
                    src="./../../assets/images/ha-noi.jpg"
                    className="img-respon"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="intro igi_module">
            <Container>
              <Row>
                <Col lg="6" md="6" sm="12">
                  <a href="#">
                    <img src="./../../assets/images/gioithieu.JPG" />
                  </a>
                </Col>
                <Col lg="6" md="6" sm="12">
                  <div className="content-gt">
                    <div>
                      <h3 className="paci-font">Giới thiệu chung</h3>
                      <h2 className="title-gt">Về chúng tôi</h2>
                    </div>
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamu
                      </p>
                      <p>
                        Cras pretium enim ut urna varius semper. Suspendisse
                        quis massa mattis, porttitor est nec, tempus metus.
                        Proin dapibus faucibus orci eget ornare. Donec porta vel
                        leo eu ullamcorper. Nunc blandit quam vel tincidunt
                        venenatis. Sed quis leo id nunc vestibulum accumsan.
                        Aliquam rhoncus pulvinar bibendum. Sed faucibus
                        condimentum quam, sed faucibus nulla congue et.
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Cras hendrerit,
                        lacus non hendrerit varius, risus nunc maximus urna,
                        quis vehicula ex sem nec lacus.{" "}
                      </p>
                    </div>
                    <div className="btn-them">
                      <button className="btn btm-sm btn-more">
                        Tìm hiểu thêm
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="news news-home igi_module">
            <Container>
              <Row>
                <Col xs="12" sm="4" md="4" lg="4">
                  <h2 className="title-news">Bạn muốn đến?</h2>
                  <div className="img-news">
                    <img
                      className="img-respon"
                      src="./../../assets/images/ha-noi.jpg"
                      alt=""
                    />
                    <Link className="link-news" to="/lich-trinh">
                      Tự lên kế hoạch cho chuyến du lịch của mình nào!
                      <div className="text-small">tuongnguyen, 20/04/2020</div>
                    </Link>
                  </div>
                </Col>
                <Col xs="12" sm="4" md="4" lg="4">
                  <h2 className="title-news">Kinh nghiệm du lịch</h2>
                  <div className="img-news">
                    <img
                      className="img-respon"
                      src="./../../assets/images/ha-noi.jpg"
                      alt=""
                    />
                    <Link className="link-news" to="/cam-nang-du-lich">
                      Khám phá trọn vẹn Huế mộng mơ trong 3 ngày 2 đêm
                      <div className="text-small">tuongnguyen, 20/04/2020</div>
                    </Link>
                  </div>
                </Col>
                <Col xs="12" sm="4" md="4" lg="4">
                  <h2 className="title-news">Ẩm thực bốn phương</h2>
                  <div className="img-news">
                    <img
                      className="img-respon"
                      src="./../../assets/images/ha-noi.jpg"
                      alt=""
                    />
                    <Link className="link-news" to="/am-thuc">
                      Thử ngay tour ẩm thực hấp dẫn trong lòng Hội An trong đêm
                      <div className="text-small">tuongnguyen, 20/04/2020</div>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="news-home listnews-home igi_module">
            <Container>
              <Row>
                <Col xs="12" sm="12" lg="4" md="4">
                  <div className="img-news">
                    <img
                      className="img-respon"
                      src="./../../assets/images/moc-chau.jpg"
                      alt=""
                    />
                    <Link className="link-news" to="/am-thuc">
                      Du lịch Mộc Châu 2 ngày 1 đêm
                      <div className="text-small">tuongnguyen, 20/04/2020</div>
                    </Link>
                  </div>
                </Col>
                <Col xs="12" sm="12" lg="4" md="4">
                  <div className="img-news">
                    <img
                      className="img-respon"
                      src="./../../assets/images/hang-mua.jpg"
                      alt=""
                    />
                    <Link className="link-news" to="/am-thuc">
                      Chinh phục Hang Múa Ninh Bình
                      <div className="text-small">tuongnguyen, 20/04/2020</div>
                    </Link>
                  </div>
                </Col>
                <Col xs="12" sm="12" lg="4" md="4">
                  <div className="img-news">
                    <img
                      className="img-respon"
                      src="./../../assets/images/hang-mua.jpg"
                      alt=""
                    />
                    <Link className="link-news" to="/am-thuc">
                      Chinh phục Hang Múa Ninh Bình
                      <div className="text-small">tuongnguyen, 20/04/2020</div>
                    </Link>
                  </div>
                </Col>
                <Col xs="12" sm="12" lg="4" md="4">
                  <div className="img-news">
                    <img
                      className="img-respon"
                      src="./../../assets/images/hang-mua.jpg"
                      alt=""
                    />
                    <Link className="link-news" to="/am-thuc">
                      Chinh phục Hang Múa Ninh Bình
                      <div className="text-small">tuongnguyen, 20/04/2020</div>
                    </Link>
                  </div>
                </Col>
                <Col xs="12" sm="12" lg="4" md="4">
                  <div className="img-news">
                    <img
                      className="img-respon"
                      src="./../../assets/images/hang-mua.jpg"
                      alt=""
                    />
                    <Link className="link-news" to="/am-thuc">
                      Chinh phục Hang Múa Ninh Bình
                      <div className="text-small">tuongnguyen, 20/04/2020</div>
                    </Link>
                  </div>
                </Col>
                <Col xs="12" sm="12" lg="4" md="4">
                  <div className="img-news">
                    <img
                      className="img-respon"
                      src="./../../assets/images/hang-mua.jpg"
                      alt=""
                    />
                    <Link className="link-news" to="/am-thuc">
                      Chinh phục Hang Múa Ninh Bình
                      <div className="text-small">tuongnguyen, 20/04/2020</div>
                    </Link>
                  </div>
                </Col>
                <Col xs="12" sm="12" lg="12" md="12">
                  <div className="btn-them">
                    <button className="btn btm-sm btn-more">Xem thêm</button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
