import React, { Component, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../../redux/actions/user.actions";
const Menubar = () => {
  const { authUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <header className="igi_header header home" id="header">
      <div className="container">
        <div className="row">
          <div className="logo">
            <NavLink className="menu-link" to="/">
              <img src="./../../assets/images/logo.png" />
            </NavLink>
          </div>
          <nav className="navbar navbar-expand-lg menu">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
            ></button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className="menu-link" to="/">
                    Trang chủ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="menu-link" to="/danh-sach-tin-tuc">
                    Cẩm nang du lịch
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="menu-link" to="/lich-trinh">
                    Bạn muốn đến?
                  </NavLink>
                </li>
                {authUser ? (
                  <div className="login-success">
                    <li className="nav-item">
                      <NavLink
                        className="menu-link"
                        to=""
                        onClick={handleLogout}
                      >
                        logout
                      </NavLink>
                    </li>
                  </div>
                ) : (
                  <Fragment>
                    <li className="nav-item">
                      <NavLink className="menu-link" to="/dang-ky">
                        Đăng ký
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="menu-link" to="/dang-nhap">
                        Đăng nhập
                      </NavLink>
                    </li>
                  </Fragment>
                )}
              </ul>
            </div>

            <div className="igi_box_search">
              <form className="search-form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Từ khóa tìm kiếm..."
                />
                <input type="submit" value="" />
              </form>
            </div>
          </nav>
          <div className="clear"></div>
        </div>
      </div>
    </header>
  );
};

export default Menubar;
