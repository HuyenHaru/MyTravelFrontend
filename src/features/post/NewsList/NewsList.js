import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel, Spin, Divider } from 'antd';
import { Container, Row } from 'reactstrap';
import { fetchPosts } from '../post.actions';
import ItemPost from '../ItemPost/ItemPost';
import BannerPost from '../ItemPost/BannerPost';
import { actionTypes } from '../../../app/utils/config';

const NewsList = props => {
  const dispatch = useDispatch();
  const { loading, actionType } = useSelector(state => state.async);
  const { posts } = useSelector(state => state.post);
  const { authUser } = useSelector(state => state.user);

  const [postsCarousel, setPostsCarousel] = useState([]);

  useEffect(() => {
    dispatch(fetchPosts());

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (posts && posts.length && postsCarousel.length === 0) {
      setPostsCarousel(posts);
    }

    // eslint-disable-next-line
  }, [posts]);

  const fetchPostsLoading =
    actionType === actionTypes.post.FETCH_POSTS ? loading : false;

  const authenticated = Object.keys(authUser).length > 0;

  return (
    <Spin spinning={fetchPostsLoading}>
      <div className='main-wrap'>
        {/*Module Banner*/}
        <div className='module-banner'>
          <img
            className='img-respon img-banner'
            src='./../../assets/images/banner-post.jpg'
            alt=''
          />
          <div className='title-bn'>
            <h2>Cẩm nang du lịch</h2>
            <div>Trang chủ &nbsp;/&nbsp; Cẩm nang du lịch</div>
          </div>
        </div>
        {/* NOI DUNG */}
        <div className='igi_module news-list'>
          <Container>
            <Carousel autoplay>
              {postsCarousel.map(post => (
                <BannerPost post={post} key={post._id} />
              ))}
            </Carousel>
            <Divider />
            <Row>
              {posts &&
                posts.map(post => (
                  <ItemPost
                    post={post}
                    key={post._id}
                    authenticated={authenticated}
                  />
                ))}
            </Row>
          </Container>
        </div>
      </div>
    </Spin>
  );
};

export default NewsList;
