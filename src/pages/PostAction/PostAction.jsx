import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Upload, Button, Card, Spin } from 'antd';
import ReactQuill from 'react-quill';
import { UploadOutlined } from '@ant-design/icons';

import { textEditorConfig } from '../../config/config';
import {
  createPost,
  fetchPost,
  clearPost,
  updatePost,
} from '../../redux/actions/post.actions';
import { actionTypes } from '../../config/config';

const PostAction = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const [form] = Form.useForm();
  const post = useSelector(state => state.post.currentPost);
  const { loading, actionType } = useSelector(state => state.async);
  const [content, setContent] = useState('');
  const [fileList, setFileList] = useState([]);

  const quillRef = useRef(null);

  useEffect(() => {
    if (id) {
      dispatch(fetchPost(id));
    }
    return () => {
      dispatch(clearPost());
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (post) {
      form.setFieldsValue({
        title: post.title,
        image: post.mainPhoto,
      });
      setContent(post.content);
      setFileList([
        ...fileList,
        {
          uid: '1',
          status: 'done',
          url: post.mainPhoto,
        },
      ]);
    } else {
      clearForm();
    }

    // eslint-disable-next-line
  }, [post]);

  const handleChangeImage = e => {
    e.file.status = 'done';
    form.setFieldsValue({ image: e.file });
    setFileList([...e.fileList]);
  };

  const handleEditorChange = (content, delta, source, editor) => {
    setContent(content);
  };

  const imageValidator = (rule, value) => {
    if (!value) {
      return Promise.reject('Vui lòng chọn ảnh cho bài viết');
    }

    return Promise.resolve();
  };

  const clearForm = () => {
    setFileList([]);
    form.resetFields();
    quillRef.current.setEditorContents(quillRef.current.editor, '');
  };

  const handleSubmit = values => {
    const post = {
      image: values.image,
      title: values.title,
      content: content,
    };

    if (id) {
      dispatch(updatePost(id, post, history));
    } else {
      dispatch(createPost(post, history));
    }
  };

  const fetchPostLoading = actionTypes.post.FETCH_POST ? loading : false;

  const submitLoading =
    actionType === actionTypes.post.CREATE_POST ||
    actionType === actionTypes.post.UPDATE_POST
      ? loading
      : false;

  return (
    <Spin spinning={fetchPostLoading}>
      <Form form={form} size='large' onFinish={handleSubmit}>
        <Form.Item
          name='title'
          rules={[
            { required: true, message: 'Vui lòng điền tiêu đề cho bài viết' },
          ]}
        >
          <Input placeholder='Tựa đề hay gây ấn tượng cho người đọc' />
        </Form.Item>
        <Form.Item name='image' rules={[{ validator: imageValidator }]}>
          <Upload
            customRequest={() => {}}
            listType='picture-card'
            multiple={false}
            onChange={handleChangeImage}
            defaultFileList={fileList}
          >
            <UploadOutlined />
          </Upload>
        </Form.Item>
        <Form.Item>
          <ReactQuill
            theme='snow'
            onChange={handleEditorChange}
            modules={textEditorConfig.modules}
            formats={textEditorConfig.formats}
            value={content}
            bounds={'.app'}
            placeholder='Write something...'
            ref={quillRef}
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType='submit' type='primary' loading={submitLoading}>
            Hoàn thành
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default PostAction;
