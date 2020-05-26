import React, { Component } from 'react';
import SelectCustom from '../SelectBox/SelectBox';
import {dataBank} from './../../../../config/SelectInputConfig';


class ModalWithdraw extends Component {
    render() {
        return (
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fl" id="exampleModalLongTitle">Rút tiền khỏi ví [Bùi Thân: 1.234.543 <u>đ</u>]</h5>
                        <button type="button" className="close fr" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="head-form">
                                <span>Số dư ví:</span>
                                1.278.900 <u>đ</u>
                            </div>
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
                                    <label htmlFor="inputNote" className="col-sm-3 col-form-label">Hình thức</label>
                                    <div className="col-sm-9">
                                        <div className="selectbank form-control">
                                            <SelectCustom data={dataBank} placeholder='Hình thức'/>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputUser" className="col-sm-3 col-form-label">Tên người nhận*</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="inputUser" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputAccount" className="col-sm-3 col-form-label">Số tài khoản</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="inputAccount" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputBranch" className="col-sm-3 col-form-label">Chi nhánh</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="inputBranch" />
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

export default ModalWithdraw;

