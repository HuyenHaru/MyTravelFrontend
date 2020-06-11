import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost, fetchPosts } from '../post.actions';
import { Container } from 'reactstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ItemSlide from '../ItemPost/ItemSlide';

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentPost, posts } = useSelector(state => state.post);

  useEffect(() => {
    if (id) {
      dispatch(fetchPost(id));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    dispatch(fetchPosts());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  };

  const { mainPhoto = '', title = '', content = '' } = currentPost
    ? currentPost
    : {};

  return (
    <div className='detail-post'>
      {/*Module Banner*/}
      <div className='module-banner'>
        <img className='img-respon img-banner' src={mainPhoto} alt='' />

        <div className='title-bn'>
          <h2>{title}</h2>
          <div>
            Trang chủ &nbsp;<i className='fas fa-angle-double-right'></i>&nbsp;
            Cẩm nang du lịch &nbsp;<i className='fas fa-angle-double-right'></i>
            &nbsp; {title}
          </div>
        </div>
      </div>
      <Container>
        <div className='divContent'>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
        <div className='post-lq'>
          <h2 className='title-profile'>Bài viết liên quan</h2>
          <Carousel
            ssr
            partialVisbile
            itemClass='image-item'
            responsive={responsive}
          >
            {posts.slice(0, 5).map(post => {
              return <ItemSlide post={post} key={post._id} />;
            })}
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default PostDetail;
