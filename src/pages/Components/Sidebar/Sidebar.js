import React from 'react';
import ItemSlide from '../../../features/post/ItemPost/ItemSlide';

const Sidebar = ({ posts }) => {
  return (
    <div className='post-lq'>
      <h2 className='title-profile'>Bài viết nổi bật</h2>
      <div className='list-item-lq'>
        {posts.map(post => {
          return <ItemSlide post={post} key={post._id} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
