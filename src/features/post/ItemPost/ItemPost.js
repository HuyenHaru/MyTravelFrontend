import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { defaultImage } from '../../../config/config';

const ItemPost = ({ post, authenticated }) => (
  <Col xs='12' sm='6' md='4' lg='4'>
    <Link to={`/cam-nang-du-lich/${post._id}`} className='img-news'>
      <img
        className='img-respon'
        src={post.mainPhoto || defaultImage.BACKGROUND}
        alt=''
      />
      <h2 className='link-news'>{post.title}</h2>
    </Link>
    <div className=''>
      {post.userName} - {post.date}
    </div>
    <div className='item-content'>{post.shortDescription}</div>
    <Link to={`/cam-nang-du-lich/${post._id}`} className='view-detail'>
      View detail [+]
    </Link>
    {authenticated && (
      <Link to={`/chinh-sua-bai-viet/${post._id}`} className='btn btn-danger'>
        Edit
      </Link>
    )}
  </Col>
);

export default ItemPost;
