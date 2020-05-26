import React from "react";
import Home from "./pages/Home/Home";
import NewsList from "./pages/NewsList/NewsList";
import PostDetail from "./pages/PostDetail/PostDetail";
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
];
// const mapStateToProps = state =>{
//     return{
//     }
// }
export default routes;
