import React, { Component } from 'react';

class Modal extends Component {
    render() {
        return (
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fl" id="exampleModalLongTitle">Nhập mã khuyến mãi</h5>
                        <button type="button" className="close fr" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="input-group search-bar">
                            <input type="text" name="query" placeholder="Nhập mã khuyến mãi " className="input-group-field search-text" autoComplete="off" required="" />
                            <span className="input-group-btn">
                                <button className="btn icon-apply">
                                    Áp dụng
                                </button>
                            </span>
                        </form>

                        <div className="list-code">
                            <div className="title-listcode">Danh sách ưu đãi</div>
                            <div className="item-code">
                                <div className="fl">
                                    <div className=""><i className="fas fa-receipt"></i> SDQ15K</div>
                                    <div className="text-itemcode">Quận Hai Bà Trưng, Hoàng Mai, Đống Đa - từ 9h-12h<br/>
                                        Đồng giá cho 15k x 5 đơn/ngày cho dịch vụ siêu tốc
                                        <div className="color-orange">Kết thúc 31/07/2019 11:30:00</div>
                                    </div>
                                </div>
                                <div className="fr">
                                    <div className="percent">x50</div>
                                    <button className="btn icon-apply">
                                        Áp dụng
                                    </button>
                                </div>
                            </div>
                            <div className="item-code">
                                <div className="fl">
                                    <div className=""><i className="fas fa-receipt"></i> SDQ15K</div>
                                    <div className="text-itemcode">Quận Hai Bà Trưng, Hoàng Mai, Đống Đa - từ 9h-12h<br/>
                                        Đồng giá cho 15k x 5 đơn/ngày cho dịch vụ siêu tốc
                                        <div className="color-orange">Kết thúc 31/07/2019 11:30:00</div>
                                    </div>
                                </div>
                                <div className="fr">
                                    <div className="percent">x100</div>
                                    <button className="btn icon-apply">
                                        Áp dụng
                                    </button>
                                </div>
                            </div>
                            <div className="item-code">
                                <div className="fl">
                                    <div className=""><i className="fas fa-receipt"></i> SDQ15K</div>
                                    <div className="text-itemcode">Quận Hai Bà Trưng, Hoàng Mai, Đống Đa - từ 9h-12h<br/>
                                        Đồng giá cho 15k x 5 đơn/ngày cho dịch vụ siêu tốc
                                        <div className="color-orange">Kết thúc 31/07/2019 11:30:00</div>
                                    </div>
                                </div>
                                <div className="fr">
                                    <div className="percent">x60</div>
                                    <button className="btn icon-apply">
                                        Áp dụng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Modal;