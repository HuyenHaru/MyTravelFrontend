import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost, fetchPosts } from "../../redux/actions/post.actions";
import { Container, Row, Col } from "reactstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ItemSlide from "../Components/ItemPost/ItemSlide";

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentPost, posts } = useSelector((state) => state.post);
  // const deviceType = (result.device && result.device.type) || "desktop";
  // console.log(currentPost);

  useEffect(() => {
    if (id) {
      dispatch(fetchPost(id));
    }
  }, [id]);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  };
  return (
    <div className="detail-post">
      {/*Module Banner*/}
      <div className="module-banner">
        <img
          className="img-respon img-banner"
          src={currentPost.mainPhoto}
          alt=""
        />

        <div className="title-bn">
          <h2>{currentPost.title}</h2>
          <div>
            Trang chủ &nbsp;<i class="fas fa-angle-double-right"></i>&nbsp; Cẩm
            nang du lịch &nbsp;<i class="fas fa-angle-double-right"></i>&nbsp;{" "}
            {currentPost.title}
          </div>
        </div>
      </div>
      <Container>
        <div className="divContent">
          <div dangerouslySetInnerHTML={{ __html: currentPost.content }}></div>
        </div>
        {/* <Row>
          <Col xs="12" sm="12" md="9" lg="9">
          
            
          </Col>
          <Col xs="12" sm="12" md="3" lg="3">
            <Sidebar />
          </Col>
        </Row> */}
        <div className="post-lq">
          <h2 class="title-profile">Bài viết liên quan</h2>
          <Carousel
            ssr
            partialVisbile
            itemClass="image-item"
            responsive={responsive}
          >
            {posts.slice(0, 5).map((post) => {
              return <ItemSlide post={post} key={post._id} />;
            })}
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default PostDetail;
