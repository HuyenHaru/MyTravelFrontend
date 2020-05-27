import React from "react";
import Home from "./pages/Home/Home";
import NewsList from "./pages/NewsList/NewsList";
import PostDetail from "./pages/PostDetail/PostDetail";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/danh-sach-tin-tuc",
    exact: true,
    main: () => <NewsList />,
  },
  {
    path: "/danh-sach-tin-tuc/:id",
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
];
// const mapStateToProps = state =>{
//     return{
//     }
// }
export default routes;
