import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { defaultImage } from "../../../app/utils/config";
import { Button, Space } from "antd";
import {
  EditOutlined,
  UserOutlined,
  CalendarOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import IconText from "../../../app/Layout/common/IconText";
import { formatDate } from "../../../app/utils/helper";

const ItemPost = ({ post, authenticated, authUser }) => (
  <Col xs="12" sm="6" md="4" lg="3">
    <div className="item-news">
      <div className="img-news">
        <img
          className="img-respon"
          src={post.mainPhoto || defaultImage.BACKGROUND}
          alt=""
        />
      </div>
      <div className="txt-news">
        <Link to={`/cam-nang-du-lich/${post._id}`}>
          <h2 className="link-news">{post.title}</h2>
        </Link>
        <Space>
          <IconText icon={UserOutlined} text={post.user.name} />|
          <IconText icon={CalendarOutlined} text={formatDate(post.date)} />|
          <IconText icon={EyeOutlined} text={post.views} />
        </Space>
        <div className="item-content">{post.shortDescription}</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          {authenticated && authUser._id === post.user._id && (
            <Link to={`/chinh-sua-bai-viet/${post._id}`}>
              <Button type="link" icon={<EditOutlined />} />
            </Link>
          )}
        </div>
      </div>
    </div>
  </Col>
);

export default ItemPost;
