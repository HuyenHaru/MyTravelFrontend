import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Upload, Button, Typography, Form, Space, Card } from 'antd';
import { UploadOutlined, LinkOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import { uploadProfileImage } from '../user.actions';

const { Text } = Typography;

const UpdateAvatar = ({ handleCancel, handleOpenImageLibrary }) => {
  const dispatch = useDispatch();
  const { loading, actionType } = useSelector(state => state.async);
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [fileList, setFileList] = useState([]);

  const customRequest = () => {};

  const handleChangeImage = e => {
    setImage(e.file);
    const files = e.fileList.map(file => ({ ...file, status: 'done' }));
    setFileList(files);
    setError(null);
  };

  const handleUpload = () => {
    if (!image) {
      setError({ image: { msg: 'Please choose an image to upload' } });
    } else {
      dispatch(uploadProfileImage(image));
    }
  };

  const uploadLoading = actionType === 'uploadAvatar' ? loading : false;

  return (
    <Card bordered={false} bodyStyle={{ padding: 0 }}>
      <Card.Meta
        title='Upload new profile image'
        description={
          <Fragment>
            <Form>
              <Form.Item>
                <ImgCrop rotate modalTitle='Your Profile Image'>
                  <Upload
                    customRequest={customRequest}
                    multiple={false}
                    listType='picture-card'
                    onChange={handleChangeImage}
                    disabled={image}
                    fileList={fileList}
                    defaultFileList={[]}
                  >
                    <UploadOutlined />
                  </Upload>
                </ImgCrop>
              </Form.Item>
              {image && image.name && (
                <Form.Item>
                  <LinkOutlined style={{ marginRight: 12 }} />
                  <Text>{image.name}</Text>
                </Form.Item>
              )}
              {error && error.image && (
                <Form.Item>
                  <Text type='danger'>{error.image.msg}</Text>
                </Form.Item>
              )}

              <Form.Item>
                <Space>
                  <Button
                    type='primary'
                    onClick={handleUpload}
                    loading={uploadLoading}
                    className='btn btn--dark'
                  >
                    Submit
                  </Button>
                  <Button onClick={handleCancel}>Cancel</Button>
                </Space>
              </Form.Item>
            </Form>
          </Fragment>
        }
      />
    </Card>
  );
};

export default UpdateAvatar;
