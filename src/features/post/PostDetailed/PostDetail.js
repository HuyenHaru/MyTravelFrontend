import React, { useEffect, Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  commentOnPost,
  deletePostComment,
  fetchPost,
  likePost,
  unlikePost,
} from "../post.actions";
import { Container } from "reactstrap";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Comments from "./Comments";
import CommentEditor from "./CommentEditor";
import { Avatar, Button, Comment, Divider, Space, Row, Col } from "antd";
import { actionTypes } from "../../../app/utils/config";
import {
  CalendarOutlined,
  DislikeFilled,
  EyeOutlined,
  LikeFilled,
  UserOutlined,
} from "@ant-design/icons";
import IconText from "../../../app/Layout/common/IconText";
import { formatDate } from "../../../app/utils/helper";
import Sidebar from "../../../pages/Components/Sidebar/Sidebar";

const postAction = actionTypes.post;

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentPost } = useSelector((state) => state.post);
  const { loading, actionType, elmId } = useSelector((state) => state.async);
  const { authUser, authenticated } = useSelector((state) => state.user);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (id) {
      dispatch(fetchPost(id));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleDeleteComment = (commentId) =>
    dispatch(deletePostComment(id, commentId));
  const handleChangeComment = (e) => setComment(e.target.value);
  const handleComment = (e) => {
    e.preventDefault();
    setComment("");
    dispatch(commentOnPost(id, { text: comment }));
  };

  const handleLikePost = () => dispatch(likePost(id));
  const handleUnlikePost = () => dispatch(unlikePost(id));

  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //     paritialVisibilityGutter: 60,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     paritialVisibilityGutter: 50,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     paritialVisibilityGutter: 30,
  //   },
  // };

  const {
    comments = [],
    mainPhoto = "",
    title = "",
    content = "",
    date = "",
    user = {},
    likes = [],
    views = 0,
  } = currentPost ? currentPost : {};

  const commentLoading =
    actionType === postAction.CREATE_POST ? loading : false;
  const likeLoading = actionType === postAction.LIKE_POST ? loading : false;
  const unlikeLoading = actionType === postAction.UNLIKE_POST ? loading : false;

  return (
    <div className="detail-post">
      {/*Module Banner*/}
      <div className="module-banner">
        <img className="img-respon img-banner" src={mainPhoto} alt="" />

        <div className="title-bn">
          <h2>{title}</h2>
          <div>
            Trang chủ &nbsp;
            <i className="fas fa-angle-double-right" />
            &nbsp; Cẩm nang du lịch &nbsp;
            <i className="fas fa-angle-double-right" />
            &nbsp; {title}
          </div>
          <Space>
            <IconText icon={UserOutlined} text={user.name} />|
            <IconText icon={CalendarOutlined} text={formatDate(date)} />|
            <IconText icon={EyeOutlined} text={views} />
          </Space>
        </div>
      </div>
      <Container>
        <Row>
          <Col xs={24} sm={24} md={24} lg={18} xl={18}>
            <div className="divContent">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>

            {authenticated && (
              <Fragment>
                <div style={{ textAlign: "center" }}>
                  <Space align="center">
                    <Button
                      type="primary"
                      icon={<LikeFilled />}
                      loading={likeLoading}
                      onClick={handleLikePost}
                    >
                      Like this Post ({likes.length} likes)
                    </Button>
                    <Button
                      type="primary"
                      icon={<DislikeFilled />}
                      danger={true}
                      loading={unlikeLoading}
                      onClick={handleUnlikePost}
                    >
                      UnLike this Post ({likes.length} likes)
                    </Button>
                  </Space>
                </div>
                <Divider />
              </Fragment>
            )}
            <Comments
              comments={comments}
              authUserId={authUser._id}
              loading={loading}
              loadingType={actionType}
              elmId={elmId}
              deleteComment={handleDeleteComment}
            />

            {authenticated && (
              <Fragment>
                <Comment
                  avatar={<Avatar src={authUser.avatar} alt={authUser.name} />}
                  content={
                    <CommentEditor
                      onChange={handleChangeComment}
                      onSubmit={handleComment}
                      submitting={commentLoading}
                      value={comment}
                    />
                  }
                />
              </Fragment>
            )}
            <Divider />
          </Col>
          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PostDetail;
