import React, { Component, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import { logout } from "../../../redux/actions/user.actions";
import { Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Menubar = () => {
  const { authUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="header">
      <Container>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand as={NavLink} to="/">
            <img className="logo" src="./../../assets/images/logo.png" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/">
                Trang chủ
              </Nav.Link>
              <Nav.Link as={NavLink} to="/cam-nang-du-lich">
                Cẩm nang du lịch
              </Nav.Link>
              <Nav.Link as={NavLink} to="/lich-trinh">
                Bạn muốn đến?
              </Nav.Link>
              {Object.keys(authUser).length > 0 ? (
                <Fragment>
                  <NavDropdown title="Tài khoản" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={NavLink} to="/tai-khoan">
                      Tài khoản của tôi
                    </NavDropdown.Item>

                    <NavDropdown.Item onClick={handleLogout}>
                      Đăng xuất
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={NavLink} to="/viet-bai">
                    <i className="fas fa-edit"></i>
                    Viết bài
                  </Nav.Link>
                </Fragment>
              ) : (
                <Fragment>
                  <Nav.Link as={NavLink} to="/dang-ky">
                    Đăng ký
                  </Nav.Link>

                  <Nav.Link as={NavLink} to="/dang-nhap">
                    Đăng nhập
                  </Nav.Link>
                </Fragment>
              )}
            </Nav>
            <Nav>
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
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <div className="clearfix"></div>
    </div>
  );
};

export default Menubar;
