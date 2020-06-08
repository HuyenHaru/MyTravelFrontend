import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemPost = ({ post }) => (
  <Col xs="12" sm="6" md="4" lg="4">
    <Link to={`/cam-nang-du-lich/${post._id}`} className="img-news">
      <img className="img-respon" src={post.mainPhoto} />
      <h2 className="link-news">{post.title}</h2>
    </Link>
    <div className="item-content">{post.shortDescription}</div>
    <Link to={`/cam-nang-du-lich/${post._id}`} className="view-detail">
      View detail [+]
    </Link>
  </Col>
);

export default ItemPost;
