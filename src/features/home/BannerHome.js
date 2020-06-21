import React from "react";
import { Link } from "react-router-dom";
import { defaultImage } from "../../app/utils/config";
import { Space } from "antd";
import { CalendarOutlined, EyeOutlined, UserOutlined } from "@ant-design/icons";
import { formatDate } from "../../app/utils/helper";
import IconText from "../../app/Layout/common/IconText";

const BannerHome = ({ post }) => (
  <div className="module-banner">
    <Link to={`/cam-nang-du-lich/${post._id}`}>
      <img
        className="img-respon img-banner"
        src={post.mainPhoto || defaultImage.BACKGROUND}
        alt=""
      />

      <div className="title-bn">
        <h2 className="link-news">{post.title}</h2>
        <Space>
          <IconText icon={UserOutlined} text={post.user.name} />|
          <IconText icon={CalendarOutlined} text={formatDate(post.date)} />|
          <IconText icon={EyeOutlined} text={post.views} />
        </Space>
      </div>
    </Link>
  </div>
);

export default BannerHome;
