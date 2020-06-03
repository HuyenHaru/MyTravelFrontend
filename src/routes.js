import React from "react";
import Home from "./pages/Home/Home";
import NewsList from "./pages/NewsList/NewsList";
import PostDetail from "./pages/PostDetail/PostDetail";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import MyAccount from "./pages/MyAccount/MyAccount";
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/cam-nang-du-lich",
    exact: true,
    main: () => <NewsList />,
  },
  {
    path: "/cam-nang-du-lich/:id",
    exact: true,
    main: () => <PostDetail />,
  },
  {
    path: "/dang-nhap",
    exact: true,
    main: () => <Login />,
  },
  {
    path: "/dang-ky",
    exact: true,
    main: () => <Register />,
  },
  {
    path: "/tai-khoan",
    exact: true,
    main: () => <MyAccount />,
  },
];
// const mapStateToProps = state =>{
//     return{
//     }
// }
export default routes;
