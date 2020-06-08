import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../../redux/actions/post.actions";
import { Container, Row, Col } from "reactstrap";
import ItemPost from "../Components/ItemPost/ItemPost";
import BannerPost from "../Components/ItemPost/BannerPost";
import { Carousel } from "react-bootstrap";

const NewsList = (props) => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  // console.log(posts);
  return (
    <div className="main-wrap">
      {/*Module Banner*/}
      <div className="module-banner">
        <img
          className="img-respon img-banner"
          src="./../../assets/images/banner.jpg"
          alt=""
        />
        <div className="title-bn">
          <h2>Cẩm nang du lịch</h2>
          <div>Trang chủ &nbsp;/&nbsp; Cẩm nang du lịch</div>
        </div>
      </div>
      {/* NOI DUNG */}
      <div className="igi_module news-list">
        <Container>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {posts &&
              posts.map((post) => <BannerPost post={post} key={post._id} />)}
          </Carousel>
          <Row>
            {posts &&
              posts.map((post) => <ItemPost post={post} key={post._id} />)}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default NewsList;
