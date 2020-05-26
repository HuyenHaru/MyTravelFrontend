import React, { Component } from 'react';

class ModalRecharge extends Component {
    render() {
        return (
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fl" id="exampleModalLongTitle">Nạp tiền [Bùi Thân: 1.234.543 <u>đ</u>]</h5>
                        <button type="button" className="close fr" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="head-form">Nạp tiền [Bùi Thân: 1.234.543 <u>đ</u>]</div>
                            <div className="body-form">
                                <div className="form-group row">
                                    <label htmlFor="inputMoney" className="col-sm-3 col-form-label">Số tiền*</label>
                                    <div className="col-sm-9">
                                        <label className="sr-only" htmlFor="inlineFormInputGroupMoney">Nhập tiền cần nạp vào tài khoản</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><u>đ</u></div>
                                            </div>
                                            <input type="text" className="form-control" id="inlineFormInputGroupMoney" placeholder="Nhập tiền cần nạp vào tài khoản" />
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">.00</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="inputNote" className="col-sm-3 col-form-label">Ghi chú</label>
                                    <div className="col-sm-9">
                                        <textarea rows="4" className="form-control" id="inputNote" />
                                    </div>
                                </div>

                                <div className="ft-btn">
                                    <button type="submit" className="btn btn-success">Nạp tiền</button> &emsp;
                                    <button type="submit" className="btn btn-outline-secondary">Hủy bỏ</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalRecharge;

