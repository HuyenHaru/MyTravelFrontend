import React, { useEffect } from "react";
import ItemSlide from "../../../features/post/ItemPost/ItemSlide";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../../features/post/post.actions";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { docs: posts } = useSelector((state) => state.post.posts);

  useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="post-lq">
      <h2 className="title-profile">Bài viết nổi bật</h2>
      <div className="list-item-lq">
        {posts.map((post) => {
          return <ItemSlide post={post} key={post._id} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
