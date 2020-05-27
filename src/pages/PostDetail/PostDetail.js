import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SelectCustom from "../Components/SelectBox/SelectBox";
import { data } from "./../../config/SelectInputConfig";
import { fetchPost } from "../../redux/actions/post.actions";

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentPost } = useSelector((state) => state.post);
  console.log(id);

  useEffect(() => {
    if (id) {
      dispatch(fetchPost(id));
    }
  }, [id]);
  return <main></main>;
};

export default PostDetail;
