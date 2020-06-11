import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { defaultImage } from '../../../app/utils/config';

const BannerPost = ({ post }) => (
  <Row>
    <Col xs='12' sm='6' md='7' lg='7'>
      <Link to={`/cam-nang-du-lich/${post._id}`} className='img-news'>
        <img
          className='img-respon'
          src={post.mainPhoto || defaultImage.BACKGROUND}
          alt=''
        />
      </Link>
    </Col>
    <Col xs='12' sm='6' md='5' lg='5'>
      <h2 className='link-news'>{post.title}</h2>
      <div className='item-content'>{post.shortDescription}</div>
      <div className='text-author'>{post.userName}</div>
    </Col>
  </Row>
);

export default BannerPost;
