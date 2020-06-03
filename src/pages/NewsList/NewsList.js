import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../../redux/actions/post.actions";
import { Container, Row, Col } from "reactstrap";
import ItemPost from "../Components/ItemPost/ItemPost";

const NewsList = (props) => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  console.log(posts);
  return (
    <div className="main-wrap">
      {/*Module Banner*/}
      <div className="igi_module igi_module__bn">
        <img
          className="img-room"
          src="./../../assets/images/banner-chi.jpg"
          alt=""
        />
        <div className="title-bn">
          <h2>NEWS</h2> Home &nbsp;/&nbsp; News
        </div>
      </div>
      {/* NOI DUNG */}
      <div className="igi_module news-list">
        <Container>
          <div className="title-content">
            <h2>News</h2>
          </div>
          <Row>
            {posts &&
              posts.map((post) => <ItemPost post={post} key={post.id} />)}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default NewsList;
