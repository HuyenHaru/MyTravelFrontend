import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { defaultImage } from "../../../app/utils/config";
import { Space } from "antd";
import { CalendarOutlined, EyeOutlined, UserOutlined } from "@ant-design/icons";
import IconText from "../../../app/Layout/common/IconText";
import { formatDate } from "../../../app/utils/helper";

const BannerPost = ({ post }) => (
  <Row>
    <Col xs="12" sm="6" md="7" lg="7">
      <Link to={`/cam-nang-du-lich/${post._id}`} className="img-news">
        <img
          className="img-respon"
          src={post.mainPhoto || defaultImage.BACKGROUND}
          alt=""
        />
      </Link>
    </Col>
    <Col xs="12" sm="6" md="5" lg="5">
      <h2 className="link-news">{post.title}</h2>
      <Space>
        <IconText icon={UserOutlined} text={post.user.name} />|
        <IconText icon={CalendarOutlined} text={formatDate(post.date)} />|
        <IconText icon={EyeOutlined} text={post.views} />
      </Space>
      <div className="item-content">{post.shortDescription}</div>
      {/* <div className="text-author">{post.user.name}</div> */}
    </Col>
  </Row>
);

export default BannerPost;
