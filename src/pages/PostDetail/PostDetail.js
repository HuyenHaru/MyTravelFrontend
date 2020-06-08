import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../redux/actions/post.actions";
import { Container, Row, Col } from "reactstrap";
import Sidebar from "../Components/Sidebar/Sidebar";

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentPost } = useSelector((state) => state.post);
  // console.log(currentPost);

  useEffect(() => {
    if (id) {
      dispatch(fetchPost(id));
    }
  }, [id]);
  return (
    <div className="detail-post">
      {/*Module Banner*/}
      <div className="module-banner">
        <img
          className="img-respon img-banner"
          src="./../../assets/images/banner.jpg"
          alt=""
        />
        <div className="title-bn">
          <h2>Cẩm nang du lịch</h2>
          <div>
            Trang chủ &nbsp;/&nbsp; Cẩm nang du lịch &nbsp;/&nbsp;{" "}
            {currentPost.title}
          </div>
        </div>
      </div>
      <Container>
        <Row>
          <Col xs="12" sm="12" md="9" lg="9">
            <h1 className="title-post">{currentPost.title}</h1>
            <div className="divContent">
              <div
                dangerouslySetInnerHTML={{ __html: currentPost.content }}
              ></div>
            </div>
          </Col>
          <Col xs="12" sm="12" md="3" lg="3">
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PostDetail;
