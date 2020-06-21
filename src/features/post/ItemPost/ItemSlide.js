import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

const ItemSlide = ({ post }) => (
  <div className="item-lq">
    <Link to={`/cam-nang-du-lich/${post._id}`}>
      <Row>
        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
          <div className="img-news">
            <img className="img-respon" src={post.mainPhoto} alt="" />
          </div>
        </Col>
        <Col xs={16} sm={16} md={16} lg={16} xl={16}>
          <div className="">
            <h2 className="link-news-lq">{post.title}</h2>
            {/* <Space>
              <IconText icon={UserOutlined} text={post.user.name} />|
              <IconText icon={EyeOutlined} text={post.views} />
            </Space> */}
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24}>
          <div className="cont-item">
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </div>
        </Col>
      </Row>

      {/* <div className='item-content'>{post.shortDescription}</div> */}
    </Link>
  </div>
);

export default ItemSlide;
