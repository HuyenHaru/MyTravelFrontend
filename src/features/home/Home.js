import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel, Row, Col, Spin } from "antd";
import { fetchPosts, fetchPostsByType } from "../post/post.actions";
import BannerHome from "./BannerHome";
import ItemPost from "../post/ItemPost/ItemPost";
import { Container } from "reactstrap";
import { actionTypes } from "../../app/utils/config";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { docs: posts } = useSelector((state) => state.post.posts);
  const { loading, actionType } = useSelector((state) => state.async);
  const {
    experiencePosts: { docs: experiencePosts },
    foodPosts: { docs: foodPosts },
    placePosts: { docs: placePosts },
  } = useSelector((state) => state.post);
  const [postsCarousel, setPostsCarousel] = useState([]);

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchPostsByType("experience", 1, 6));
    dispatch(fetchPostsByType("food", 1, 6));
    dispatch(fetchPostsByType("place", 1, 6));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (posts && posts.length && postsCarousel.length === 0) {
      setPostsCarousel(posts);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts]);

  const loadingGrid =
    actionType === actionTypes.post.FETCH_POSTS ? loading : false;

  return (
    <Spin spinning={loadingGrid}>
      <main>
        <div className="">
          <div className="igi_banner">
            <Carousel autoplay>
              {postsCarousel.map((post) => (
                <BannerHome post={post} key={post._id} />
              ))}
            </Carousel>
          </div>

          <div className="intro igi_module">
            <Container>
              <Row>
                <Col lg={12} md={12} sm={12} xs={24}>
                  <img src="./assets/images/gioithieu.JPG" alt="" />
                </Col>
                <Col lg={12} md={12} sm={12} xs={24}>
                  <div className="content-gt">
                    <div>
                      <h3 className="paci-font">Giới thiệu chung</h3>
                      <h2 className="title-gt">Du lịch Việt Nam</h2>
                    </div>
                    <div>
                      <p>
                        Đất nước ta trải qua hàng nghìn năm dựng nước, giữ nước.
                      </p>
                      <p>
                        Con người chân thành, mộc mạc chất phát. Những tháng
                        ngày thống khổ của cha ông đã viết lên những trang sử
                        hào hùng. Vẻ đẹp từ tâm hồn, từ con người ấy càng đẹp
                        hơn khi chúng ta được tạo hóa ban tặng thiên nhiên hùng
                        vĩ, đường bờ biển chạy dài dọc theo hình chữ S của tổ
                        quốc. Còn điều gì tuyệt vời hơn khí có sông, có núi, có
                        biển. Sự hài hòa của thiên, nét đẹp hùng vĩ bao trùm lên
                        những con người với nét đẹp mộc mạc đậm chất Á Đông. Sẽ
                        thật thiếu sót khi bạn không dành cho cuộc đời những
                        chuyến đi khám phá nét đẹp ấy của đất nước tuyệt đẹp,
                        của chính mình.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="igi_module news-list">
            <Container>
              <div className="border-bot">
                <span className="tt-home">Kinh nghiệm du lịch từ A-Z</span>
              </div>
              <Row>
                {experiencePosts &&
                  experiencePosts.length > 0 &&
                  experiencePosts.map((post) => (
                    <ItemPost post={post} key={post._id} />
                  ))}
              </Row>
              <Link to="/cam-nang-du-lich">Xem thêm</Link>
            </Container>
          </div>

          <div className="igi_module news-list">
            <Container>
              <div className="border-bot">
                <span className="tt-home">Ăn & chơi</span>
              </div>
              <Row>
                {foodPosts &&
                  foodPosts.length > 0 &&
                  foodPosts.map((post) => (
                    <ItemPost post={post} key={post._id} />
                  ))}
              </Row>
              <Link to="/cam-nang-du-lich">Xem thêm</Link>
            </Container>
          </div>

          <div className="igi_module news-list">
            <Container>
              <div className="border-bot">
                <span className="tt-home">Điểm check-in siêu hot</span>
              </div>
              <Row>
                {placePosts &&
                  placePosts.length > 0 &&
                  placePosts.map((post) => (
                    <ItemPost post={post} key={post._id} />
                  ))}
              </Row>
              <Link to="/cam-nang-du-lich">Xem thêm</Link>
            </Container>
          </div>
        </div>
      </main>
    </Spin>
  );
};

export default Home;
