import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemSlide = ({ post }) => (
  <div className="item-slide">
    <Link to={`/cam-nang-du-lich/${post._id}`} className="img-news">
      <img className="img-respon img-border" src={post.mainPhoto} />
      <h2 className="link-news">{post.title}</h2>
    </Link>
    <div className="">
      {post.userName} - {post.date}
    </div>
    <div className="item-content">{post.shortDescription}</div>
    <Link to={`/cam-nang-du-lich/${post._id}`} className="view-detail">
      View detail [+]
    </Link>
  </div>
);

export default ItemSlide;
