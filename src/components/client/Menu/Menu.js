import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class Menubar extends Component {
  render() {
    return (
      <header class="igi_header header home" id="header">
        <div class="container">
          <div class="row">
            <div class="logo">
              <a href="#" title=""><img src="./../../assets/images/logo.png" /></a>
            </div>
            <nav class="navbar navbar-expand-lg menu">
              <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent">
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <NavLink className="menu-link" to="/">Trang chủ</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink className="menu-link" to="/danh-sach-tin-tuc" >Cẩm nang du lịch</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink className="menu-link" to="/lich-trinh">Bạn muốn đến?</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink className="menu-link" to="/dang-ky">Đăng ký</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink className="menu-link" to="/dang-nhap">Đăng nhập</NavLink>
                  </li>
                </ul>
              </div>

              <div class="igi_box_search">
                <form class="search-form">
                  <input type="text" class="form-control" placeholder="Từ khóa tìm kiếm..."/>
                  <input type="submit" value="" />
                </form>
              </div>
            </nav>
            <div class="clear"></div>
          </div>
        </div>
      </header>

    );
  }
}
// const mapStateToProps = state =>{
//   return{
//       menu: state.menu
//   }
// }
// const mapDispatchToProps = (dispatch, props) =>{
//   return{
//     fetchMenuList: () =>{
//       dispatch(actFetchDataMenuRequest());
//     },
//     fetchActionCategory:(catname) =>{
//       dispatch(actFetchDataCategoryRequest(catname));
//     }
//   }
// }
export default Menubar;