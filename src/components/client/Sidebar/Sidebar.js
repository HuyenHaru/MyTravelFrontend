import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
// import {connect} from 'react-redux';
class Sidebar extends Component {
    render() {
        return (
            <div className="infor-sidebar">
                <div className="sidebar-box">
                    <aside className="side-nav sidenav-left sidenav-fixed sidenav-menu collapsed" id="sidenav-menu">
                        <div className="menu-wrap">
                            <div className="menu-item logo-item">
                                <a className="navbar-brand" href="/"><img src="./../assets/images/main-logo.png" alt="logo" /></a>
                                <i className="fa fa-bars" aria-hidden="true"></i>
                            </div>
                            <ul className="menu-list" id="main-menu">
                                <li className="menu-item">
                                    <NavLink to="/tao-don-hang" className="menu-link" activeClassName="active">
                                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                        <span>Tạo đơn hàng</span>
                                    </NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink to="/quan-ly-don-hang" className="menu-link">
                                        <i className="fas fa-boxes"></i>
                                        <span>Quản lý đơn hàng</span>
                                    </NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink to="/danh-sach-shipper" className="menu-link">
                                        <i className="fa fa-address-book" aria-hidden="true"></i>
                                        <span>Danh sách Shipper</span>
                                    </NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink to="/danh-sach-khach-hang" className="menu-link">
                                        <i className="fa fa-address-card" aria-hidden="true"></i>
                                        <span>Danh sách khách hàng</span>
                                    </NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink to="/tai-khoan-quan-tri" className="menu-link">
                                        <i className="fas fa-id-card-alt"></i>
                                        <span>Tài khoản quản trị</span>
                                    </NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink to="/quan-ly-vi-tien" className="menu-link">
                                        <i className="fas fa-wallet"></i>
                                        <span>Quản lý ví tiền</span>
                                    </NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink to="/danh-gia-khach-hang" className="menu-link" >
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <span>Đánh giá khách hàng</span>
                                    </NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink to="/ma-giam-gia" className="menu-link" >
                                        <i className="fas fa-receipt"></i>
                                        <span>Mã giảm giá</span>
                                    </NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink to="/thong-ke" className="menu-link" >
                                        <i className="fas fa-chart-bar"></i>
                                        <span>Thống kê</span>
                                    </NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink to="/tro-giup" className="menu-link" >
                                        <i className="fas fa-info-circle"></i>
                                        <span>Trợ giúp</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        )
    }
}
export default Sidebar;
