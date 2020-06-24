export const textEditorConfig = {
  modules: {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  },
  formats: [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ],
};

export const actionTypes = {
  post: {
    CREATE_POST: 'CREATE_POST',
    UPDATE_POST: 'UPDATE_POST',
    FETCH_POSTS: 'FETCH_POSTS',
    FETCH_POST: 'FETCH_POST',
    COMMENT_ON_POST: 'COMMENT_ON_POST',
    DELETE_POST_COMMENT: 'DELETE_POST_COMMENT',
    LIKE_POST: 'LIKE_POST',
    UNLIKE_POST: 'UNLIKE_POST',
  },
};

export const defaultImage = {
  BACKGROUND: 'assets/images/default.jpg',
};

export const columnsTable = {
  columnsPlace: [
    {
      title: 'Tên địa điểm',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Thời gian tham quan',
      dataIndex: 'time',
      key: 'time',
    },
  ],
  columnsHotel: [
    {
      title: 'Tên khách sạn',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Ảnh',
      dataIndex: 'image',
      key: 'image',
    },
  ],
  columnsFood: [
    {
      title: 'Tên món ăn',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Ảnh',
      dataIndex: 'image',
      key: 'image',
    },
  ],
};
