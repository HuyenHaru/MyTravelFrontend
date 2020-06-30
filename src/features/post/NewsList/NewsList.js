import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel, Spin, Divider, Pagination } from 'antd';
import { Container, Row } from 'reactstrap';
import { fetchPosts } from '../post.actions';
import ItemPost from '../ItemPost/ItemPost';
import BannerPost from '../ItemPost/BannerPost';
import { actionTypes } from '../../../app/utils/config';

const NewsList = props => {
  const dispatch = useDispatch();
  const { loading, actionType } = useSelector(state => state.async);
  const { docs: posts, totalDocs } = useSelector(state => state.post.posts);
  const { authUser } = useSelector(state => state.user);

  const [postsCarousel, setPostsCarousel] = useState([]);

  useEffect(() => {
    dispatch(fetchPosts(1, 18));

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (posts && posts.length && postsCarousel.length === 0) {
      setPostsCarousel(posts);
    }

    // eslint-disable-next-line
  }, [posts]);

  const showTotal = total => `Tổng số: ${total} bài viết`;

  const paginate = page => dispatch(fetchPosts(page, 3));

  const fetchPostsLoading =
    actionType === actionTypes.post.FETCH_POSTS ? loading : false;

  const authenticated = Object.keys(authUser).length > 0;

  return (
    <Spin spinning={fetchPostsLoading}>
      <div className='main-wrap'>
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
                    authUser={authUser}
                  />
                ))}

              <Pagination
                size='small'
                total={totalDocs}
                showTotal={showTotal}
                onChange={paginate}
                hideOnSinglePage
                pageSize={18}
              />
            </Row>
          </Container>
        </div>
      </div>
    </Spin>
  );
};

export default NewsList;
