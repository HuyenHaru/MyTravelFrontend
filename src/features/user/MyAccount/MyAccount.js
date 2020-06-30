import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../../../pages/Components/Sidebar/Sidebar";
import ModalChargePass from "../../../pages/Components/ModalChargePass/ModalChargePass";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostProfile } from "../../post/post.actions";
import ItemPost from "../../post/ItemPost/ItemPost";
const MyAccount = (props) => {
  const dispatch = useDispatch();
  const { docs: posts } = useSelector((state) => state.post.posts);
  const { authUser } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchPostProfile());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const authenticated = Object.keys(authUser).length > 0;
  return (
    <div className="my-account">
      <Container>
        <Row>
          <Col xs="12" md="9" sm="12" lg="9">
            <div className="profile">
              <Row>
                <Col xs="4" md="4" sm="4" lg="4">
                  <img
                    className="img-respon img-profile"
                    src="./../../assets/images/moc-chau.jpg"
                    alt=""
                  />
                </Col>
                <Col xs="8" md="8" sm="8" lg="8">
                  <div className="info-profile">
                    <h2>Huyền Haru</h2>
                    <p>Số bài viết: 12</p>
                    <p>Lượt like: 653</p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="my-travel mt-5">
              <h2 className="title-profile">Lịch trình của tôi</h2>
              <table className="table table-bordered table-responsive">
                <thead>
                  <tr>
                    <th>Điểm đến</th>
                    <th>Điểm du lịch</th>
                    <th>Điểm ăn uống</th>
                    <th>Thời gian</th>
                    <th>Bản đồ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nha Trang</td>
                    <td>
                      Biển
                      <br />
                      Công viên <br />
                      Cối xoay gió <br />
                    </td>
                    <td>
                      Nhà hàng hải sản
                      <br />
                      Canh rong biển
                      <br />
                    </td>
                    <td>3 ngày</td>
                    <td width="30%">
                      <img
                        className="img-respon"
                        src="./../../assets/images/lq1.png"
                        alt=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Đà Nẵng</td>
                    <td>
                      Biển
                      <br />
                      Công viên <br />
                      Cối xoay gió <br />
                    </td>
                    <td>
                      Nhà hàng hải sản
                      <br />
                      Canh rong biển
                      <br />
                    </td>
                    <td>3 ngày</td>
                    <td width="30%">
                      <img
                        className="img-respon"
                        src="./../../assets/images/lq1.png"
                        alt=""
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="news-list mt-5">
              <h2 className="title-profile">Bài viết của tôi</h2>
              <Row>
                {posts && posts.length > 0 ? (
                  posts.map((post) => (
                    <ItemPost
                      post={post}
                      key={post._id}
                      authenticated={authenticated}
                      authUser={authUser}
                    />
                  ))
                ) : (
                  <div>Bạn chưa có bài viết nào</div>
                )}
              </Row>
            </div>
          </Col>
          <Col xs="12" md="3" sm="12" lg="3" className="pr-0">
            <div className="why-choose">
              <h2>Quản lý tài khoản</h2>
              <div className="why-item">
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <ModalChargePass />
              </div>
              <div className="why-item">
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <Link to="viết bài">Viết bài</Link>
              </div>
              <div className="why-item">
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <Link to="">Thay ảnh đại diện</Link>
              </div>
            </div>

            <Sidebar />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyAccount;
