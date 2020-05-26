import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../../redux/actions/post.actions";

const ItemPost = ({ post }) => (
  <div class="item">
    <div class="col-sm-12 col-md-4 col-lg-4 col-12 img-item">
      <a href="#">
        <img src="./../../assets/images/lq1.png" />
      </a>
    </div>
    <div class="col-sm-12 col-md-8 col-lg-8 col-12 item-con">
      <Link to={`/danh-sach-tin-tuc/${post.id}`}>
        <h2 class="link-news">{post.title}</h2>
      </Link>
      <div class="item-content">{post.short_des}</div>
      <div class="border-bottom"></div>
      <Link to={`/danh-sach-tin-tuc/${post.id}`} class="view-detail">
        View detail [+]
      </Link>
    </div>
  </div>
);

const NewsList = (props) => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  console.log(posts);
  return (
    <main>
      <div className="main-wrap">
        {/*Module Banner*/}
        <div className="igi_module igi_module__bn">
          <img
            className="img-room"
            src="./../../assets/images/banner-chi.jpg"
            alt=""
          />
          <div className="title-bn">
            <h2>NEWS</h2> Home &nbsp;/&nbsp; News
          </div>
        </div>
        {/* NOI DUNG */}
        <div className="igi_module igi_module__nd">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-9 content-left">
                <div className="title-content">
                  <h2>News</h2>
                </div>
                <div className="content row">
                  {posts &&
                    posts.map((post) => <ItemPost post={post} key={post.id} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    </main>
  );
};

export default NewsList;
