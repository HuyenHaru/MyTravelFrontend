import React from 'react';
import Home from './features/home/Home';
import NewsList from './features/post/NewsList/NewsList';
import PostDetail from './features/post/PostDetailed/PostDetail';
import Login from './features/user/Login/Login';
import Register from './features/user/Register/Register';
import MyAccount from './features/user/MyAccount/MyAccount';
import MyTrip from './features/user/MyTrip/MyTrip';
import PostAction from './features/post/PostAction/PostAction';
const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Home />,
  },
  {
    path: '/cam-nang-du-lich',
    exact: true,
    main: () => <NewsList />,
  },
  {
    path: '/cam-nang-du-lich/:id',
    exact: true,
    main: () => <PostDetail />,
  },
  {
    path: '/dang-nhap',
    exact: true,
    main: () => <Login />,
  },
  {
    path: '/dang-ky',
    exact: true,
    main: () => <Register />,
  },
  {
    path: '/tai-khoan',
    exact: true,
    main: () => <MyAccount />,
  },
  {
    path: '/lich-trinh',
    exact: true,
    main: () => <MyTrip />,
  },
  {
    path: '/viet-bai',
    exact: true,
    main: () => <PostAction />,
  },
  {
    path: '/chinh-sua-bai-viet/:id',
    exact: true,
    main: () => <PostAction />,
  },
];
// const mapStateToProps = state =>{
//     return{
//     }
// }
export default routes;
