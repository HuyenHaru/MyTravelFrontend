import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Upload, Button, Spin, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import shortid from 'shortid';

import { createPost, fetchPost, clearPost, updatePost } from '../post.actions';
import { actionTypes } from '../../../app/utils/config';
import { Container } from 'react-bootstrap';
import TextEditor from '../../../app/Layout/common/TextEditor/TextEditor';

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
      form.resetFields();
      handleClearContent();
      setFileList([]);
      dispatch(clearPost());
    };

    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (post) {
      const image = {
        uid: shortid.generate(),
        status: 'done',
        url: post.mainPhoto,
      };
      form.setFieldsValue({ ...post, image });
      setContent(post.content);
      setFileList([...fileList, image]);
    }

    // eslint-disable-next-line
  }, [post]);

  const handleEditorChange = (content, delta, source, editor) => {
    setContent(content);
  };

  const handleSubmit = values => {
    if (id && post) {
      const updatedPost = {
        ...post,
        ...values,
        content,
      };
      dispatch(updatePost(updatedPost, history));
    } else {
      const newArticle = {
        ...values,
        content: content,
      };
      dispatch(createPost(newArticle, history));
    }
  };

  const handleImageChange = e => {
    e.file.status = 'done';
    setFileList([e.file]);
  };

  const handleClearContent = () =>
    quillRef.current.setEditorContents(quillRef.current.editor, '');

  const contentValidator = (rule, value) => {
    if (!content) {
      return Promise.reject('Please enter the content');
    }

    return Promise.resolve();
  };

  const fetchPostLoading = actionTypes.post.FETCH_POST ? loading : false;

  const submitLoading =
    actionType === actionTypes.post.CREATE_POST ||
    actionType === actionTypes.post.UPDATE_POST
      ? loading
      : false;

  return (
    <Spin spinning={fetchPostLoading}>
      <div className='create-post'>
        <Container>
          <div className='title-post'>
            Hãy cùng chúng tôi lan tỏa đam mê khám phá thế giới <br />
            Bạn đã sẵn sàng chia sẽ nhưng kinh nghiệm du lịch hữu ích của bản
            thân cùng hội mê xê dịch rồi chứ? Let's go!
          </div>
          <Form form={form} size='large' onFinish={handleSubmit}>
            <Form.Item
              name='title'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng điền tiêu đề cho bài viết',
                },
              ]}
            >
              <Input placeholder='Tựa đề hay gây ấn tượng cho người đọc' />
            </Form.Item>
            <Form.Item
              name='type'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng điền tiêu đề cho bài viết',
                },
              ]}
            >
              <Select placeholder='Chọn loại bài viết'>
                <Select.Option value='food'>Bí kíp ăn uống</Select.Option>
                <Select.Option value='experience'>
                  Kinh nghiệm du lịch
                </Select.Option>
                <Select.Option value='place'>Địa điểm vui chơi</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name='image'
              rules={[
                {
                  required: true,
                  message: 'Please choose main image for your article',
                },
              ]}
            >
              <Upload
                defaultFileList={[]}
                fileList={fileList}
                onChange={handleImageChange}
                listType='picture-card'
                customRequest={() => {}}
                disabled={id ? fileList.length > 1 : fileList.length > 0}
              >
                <UploadOutlined />
              </Upload>
            </Form.Item>
            {/* <Form.Item>
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
            </Form.Item> */}
            <Form.Item name='content' rules={[{ validator: contentValidator }]}>
              <TextEditor
                text={content}
                handleChange={handleEditorChange}
                quillRef={quillRef}
                clearContent={handleClearContent}
              />
            </Form.Item>
            <Form.Item>
              <Button htmlType='submit' type='primary' loading={submitLoading}>
                Hoàn thành
              </Button>
            </Form.Item>
          </Form>
        </Container>
      </div>
    </Spin>
  );
};

export default PostAction;
