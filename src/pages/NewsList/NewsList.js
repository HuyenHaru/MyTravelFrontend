import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux/actions/post.actions';
import { Container, Row } from 'reactstrap';
import ItemPost from '../Components/ItemPost/ItemPost';
import BannerPost from '../Components/ItemPost/BannerPost';
import { Carousel } from 'antd';

const NewsList = props => {
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.post);
  const [postsCarousel, setPostsCarousel] = useState([]);
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

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

  return (
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
          {/* <Carousel activeIndex={index} onSelect={handleSelect}>
            {posts &&
              posts.map((post) => <BannerPost post={post} key={post._id} />)}
          </Carousel> */}
          <Carousel autoplay>
            {postsCarousel.map(post => (
              <BannerPost post={post} key={post._id} />
            ))}
          </Carousel>
          <Row>
            {posts &&
              posts.map(post => <ItemPost post={post} key={post._id} />)}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default NewsList;
