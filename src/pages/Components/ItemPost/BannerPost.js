import React from "react";
import { Col, Row, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";

const BannerPost = ({ post }) => (
  <Carousel.Item>
    <Row>
      <Col xs="12" sm="6" md="7" lg="7">
        <Link to={`/cam-nang-du-lich/${post._id}`} className="img-news">
          <img className="img-respon" src={post.mainPhoto} />
        </Link>
      </Col>
      <Col xs="12" sm="6" md="5" lg="5">
        <h2 className="link-news">{post.title}</h2>
        <div className="item-content">{post.shortDescription}</div>
        <div className="text-author">{post.userName}</div>
      </Col>
    </Row>
  </Carousel.Item>
);

export default BannerPost;
