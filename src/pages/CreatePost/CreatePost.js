import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Form,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../redux/actions/post.actions";
import ReactQuill from "react-quill";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

const CreatePost = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, actionType } = useSelector((state) => state.async);
  const [state, setState] = useState({
    title: "",
    content: "",
    image: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch(createPost(state, history));
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleEditorChange = (content, delta, source, editor) => {
    setState({ ...state, content: content });
  };
  const handleImageChange = (e) => {
    setState({ ...state, image: e.target.files[0] });
    // console.log(e.target.files[0]);
  };

  const loginLoading = actionType === "createPost" ? loading : false;
  return (
    <div className="create-post">
      <Container>
        <div className="title-post">
          Hãy cùng chúng tôi lan tỏa đam mê khám phá thế giới <br />
          Bạn đã sẵn sàng chia sẽ nhưng kinh nghiệm du lịch hữu ích của bản thân
          cùng hội mê xê dịch rồi chứ? Let's go!
        </div>
        <Form onSubmit={handleSubmit}>
          <FormControl
            required
            className="form-title-post"
            placeholder="Tựa đề hay gây ấn tượng cho người đọc"
            name="title"
            value={state.title}
            onChange={handleChange}
          />
          <InputGroup className="mt-3">
            <FormControl
              type="file"
              name="image"
              onChange={handleImageChange}
              required={true}
              placeholder="Chọn ảnh đại diện cho bài viết"
              aria-label="Chọn ảnh đại diện cho bài viết"
            />
            {/* <InputGroup.Append>
              <Button  className="form-title-post" variant="outline-info">
                Upload
              </Button>
            </InputGroup.Append> */}
          </InputGroup>
          <div className="">
            <p className="title-post">Nội dung bài viết</p>
            <ReactQuill
              theme="snow"
              name="description"
              onChange={handleEditorChange}
              value={state.content}
              modules={modules}
              formats={formats}
              bounds={".app"}
              placeholder="Write something..."
            />
          </div>
          <Button type="submit" className="btn btn-send mt-3 fr">
            {loginLoading && <Spinner animation="border" variant="primary" />}
            Đăng bài
          </Button>
        </Form>
      </Container>
    </div>
  );
};
export default CreatePost;
