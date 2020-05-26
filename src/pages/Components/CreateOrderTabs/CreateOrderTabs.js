import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import Tabs from '../../../../components/client/Tab/Tabs';

class CreateOrderTabs extends Component {
    render() {
        return (
            <div className="order-tabs">
                <Tabs>
                    {/* tab1 */}
                    <div label="Bước" number="1">
                        <h1 className="title-content">Điểm lấy hàng</h1>
                        <ul>
                            <li>
                                Tên người gửi
                                </li>
                            <li>Số điện thoại người gửi</li>
                            <li>Địa chỉ người gửi</li>
                            <li>Địa chỉ chi tiết</li>
                        </ul>
                        <div className="footer-content">
                            <div className="total-money">
                                <div className="fl">Tổng tiền <i className="fas fa-info-circle"></i></div>
                                <div className="fr">0đ</div>
                            </div>
                            <div className="clear"></div>
                            <div className="button btn">
                                Xác nhận dịch vụ <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                    {/* tab2 */}
                    <div label=" Bước" number="2">
                        <h1 className="title-content">Điểm kết thúc</h1>
                        <ul>
                            <li>
                                Tên người nhận
                                </li>
                            <li>Số điện thoại người nhận</li>
                            <li>Địa chỉ người nhận</li>
                            <li>Địa chỉ chi tiết</li>
                        </ul>
                        <div className="footer-content">
                            <div className="total-money">
                                <div className="fl">Tổng tiền <i className="fas fa-info-circle"></i></div>
                                <div className="fr">0đ</div>
                            </div>
                            <div className="clear"></div>
                            <div className="button btn">
                                Xác nhận dịch vụ <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                    {/* tab3 */}
                    <div label="Bước " number="3">
                        <h1 className="title-content">Thông tin đơn hàng</h1>
                        <ul>
                            <li>Thu hộ COD</li>
                            <li>Ghi chú</li>
                        </ul>
                        <div className="box">
                            <div className="box-check">
                                <div className="row">
                                    <div className="col-sm-8 col-xs-2 col-md-1 col-lg-1">
                                        <i className="fas fa-exchange-alt icon-exchange"></i>
                                    </div>
                                    <div className="col-sm-7 col-xs-7 col-md-8 col-lg-8">
                                        Quay lại điểm lấy hàng
                                            <div className="small-size">21.000 vnđ</div>
                                    </div>
                                    <div className="col-sm-3 col-xs-3 col-md-3 col-lg-3">
                                        <div className="form-check fr">
                                            <i className="fas fa-info-circle"></i>
                                            <span><input type="checkbox" className="checkbox"></input></span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="box-check">
                                <div className="row">
                                    <div className="col-sm-8 col-xs-2 col-md-1 col-lg-1">
                                        <i className="fas fa-money-check-alt icon-exchange"></i>
                                    </div>
                                    <div className="col-sm-7 col-xs-7 col-md-8 col-lg-8">
                                        Hỗ trợ tài xế
                                             <div className="small-size">5.000 vnđ</div>
                                    </div>
                                    <div className="col-sm-3 col-xs-3 col-md-3 col-lg-3">
                                        <div className="form-check fr">
                                            <i className="fas fa-info-circle"></i>
                                            <span><input type="checkbox" className="checkbox"></input></span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-pay">
                            <div className="text-promotion">
                                <div className="fl">Nhập mã để được giảm giá nhiều hơn</div>
                                <div className="fr">
                                    <button type="button" className="btn btn-modal" data-toggle="modal" data-target="#exampleModalCenter">
                                        Nhập ngay
                                            </button>
                                    <div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <Modal />
                                    </div>
                                </div>
                            </div>
                            <div className="input-code">
                                <button type="button" className="btn btn-code" data-toggle="modal" data-target="#exampleModalCenter">
                                    <i className="fas fa-receipt"></i> &nbsp;Vui lòng nhập mã khuyến mãi
                                        </button>
                                <div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <Modal />
                                </div>
                            </div>

                            <div className="text-promotion type-pay">
                                <div className="fl">Thuận tiện hơn khi thanh toán bằng tài khoản!</div>
                                <div className="fr">
                                    <button type="button" className="btn btn-modal" data-toggle="modal" data-target="#exampleModalCenter">
                                        Đổi
                                        </button>
                                    <div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <Modal />
                                    </div>
                                </div>
                            </div>
                            <div className="input-code">
                                <button type="button" className="btn btn-code" data-toggle="modal" data-target="#exampleModalCenter">
                                    <i className="far fa-money-bill-alt"></i> &nbsp;Tiền mặt
                                        <i className="fas fa-angle-down fr"></i>
                                </button>
                            </div>

                        </div>
                        <div className="footer-content">
                            <div className="total-money">
                                <div className="fl">Tổng tiền <i className="fas fa-info-circle"></i></div>
                                <div className="fr">58.000đ</div>
                            </div>
                            <div className="clear"></div>
                            <div className="button btn">
                                TẠO ĐƠN HÀNG
                                </div>
                        </div>

                    </div>
                    {/* tab4 */}
                    <div label="Thành công" number="4">
                        <div className="step4">
                            <h1 className="title-content">Mã đơn hàng của bạn là: <span className="color-orange">#HF005889</span></h1>
                            <ul>
                                <li>Điểm lấy hàng <i className="fas fa-sort-down fr"></i></li>
                                <li>Tên người gửi</li>
                                <li>Số điện thoại người gửi</li>
                                <li>Địa chỉ người gửi</li>
                                <li>Địa chỉ chi tiết</li>
                            </ul>
                            <ul>
                                <li>Điểm kết thúc <i className="fas fa-sort-down fr"></i></li>
                                <li>Tên người nhận</li>
                                <li>Số điện thoại người nhận</li>
                                <li>Địa chỉ người nhận</li>
                                <li>Địa chỉ chi tiết</li>
                            </ul>
                            <ul>
                                <li>Thông tin đơn hàng <i className="fas fa-sort-down fr"></i></li>
                                <li>Thu hộ (COD)</li>
                                <li>Ghi chú</li>
                            </ul>
                            <div className="footer-content">
                                <div className="total-money">
                                    <div className="fl">Tổng tiền <i className="fas fa-info-circle"></i></div>
                                    <div className="fr">0đ</div>
                                </div>
                                <div className="clear"></div>
                                <div className="button btn">TẠO ĐƠN HÀNG MỚI</div>
                                <div className="button btn">KIỂM TRA ĐƠN HÀNG</div>
                                <div className="text">
                                    Nhân viên chăm sóc khách hàng của chúng tôi sẽ liên hệ ngay với quý khách trong thời gian sớm nhất
                                    <div className="color-red">" Sự hài lòng của quý khách là thành công của chúng tôi"</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </Tabs>
            </div>

        );
    }
}

export default CreateOrderTabs;