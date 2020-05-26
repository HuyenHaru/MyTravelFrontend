import React, { Component } from 'react';
import Tabs from '../../../components/client/Tab/Tabs';
import ModalRecharge from '../Components/ModalRecharge/ModalRecharge';
import ModalWithdraw from '../Components/ModalWithdraw/ModalWithdraw';
import SelectCustom from '../Components/SelectBox/SelectBox';
import {data} from './../../../config/SelectInputConfig';

class WalletManager extends Component {
  render() {
    return (
      <main>
        <div className="order_detail">
          <div className="header">
            <div className="row">
              <div className="col-lg-6 col-md-5 col-sm-4 col-xs-4">
                <h1 className="title-header">QUẢN LÝ VÍ TIỀN</h1>
              </div>
              <div className="col-lg-6 col-md-7 col-sm-8 col-xs-8">
                <ul>
                  <li>Số tiền trong tài khoản: 0 VNĐ</li>
                  <li>Xin chào: Admin</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="order-tabs tab-manager" role="tabpanel" data-example-id="togglable-tabs">
            <Tabs>
              <div label="Nạp tiền">
                <span className="text-searchcus">Tìm khách hàng...</span>
                <span className="form-search">
                  <input type="search" placeholder="Nhập số điện thoại" />
                  <i className="fas fa-search"></i>
                </span>
                <div className="tb-money">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Thao tác</th>
                        <th>ID</th>
                        <th>Tài khoản</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th>Số dư</th>
                      </tr>

                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <button type="button" className="btn btn-export" data-toggle="modal" data-target="#exampleModalCenter">
                            Nạp tiền
                        </button>
                          <div className="modal fade modal-recharge" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <ModalRecharge />
                          </div>
                        </td>
                        <td className="color-blue">#HF005889</td>
                        <td>Bùi Thân</td>
                        <td>0954689321</td>
                        <td>buithan92@gmail.com</td>
                        <td>2.546.327</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
              <div label="Rút tiền">
                <span className="text-searchcus">Tìm khách hàng...</span>
                <span className="form-search">
                  <input type="search" placeholder="Nhập số điện thoại" />
                  <i className="fas fa-search"></i>
                </span>
                <div className="tb-money">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Thao tác</th>
                        <th>ID</th>
                        <th>Tài khoản</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th>Số dư</th>
                      </tr>

                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter">
                            Rút tiền
                        </button>
                          <div className="modal fade modal-recharge" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <ModalWithdraw />
                          </div>
                        </td>
                        <td className="color-blue">#HF005889</td>
                        <td>Bùi Thân</td>
                        <td>0954689321</td>
                        <td>buithan92@gmail.com</td>
                        <td>2.546.327</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
              <div label="Lịch sử giao dịch">
                <div className="tab-all">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 fl">
                      <div className="search">
                        <i className="fas fa-search"></i>
                        <input type="search" placeholder="Tìm kiếm ..." />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="select fr">
                        <SelectCustom data={data}
                          placeholder='Tất cả' />
                      </div>
                    </div>

                    <div className="col-lg-12 col-sm-12">
                      <table className="table table-bordered tb-money">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Tài khoản</th>
                            <th>Số điện thoại</th>
                            <th>Số tiền</th>
                            <th>Nội dung</th>
                            <th>Tạo bởi</th>
                            <th>Ngày tạo</th>
                            <th>Trạng thái</th>
                            <th>Nạp bởi</th>
                            <th>Ngày xử lý</th>
                            <th>Thao tác</th>
                          </tr>

                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td className="color-blue">#HF005889</td>
                            <td>Bùi Thân</td>
                            <td>0954689321</td>
                            <td>2.546.327</td>
                            <td>Nạp tiền</td>
                            <td>Nguyễn Đức</td>
                            <td>14/02/2019 15:55</td>
                            <td>
                                <div className="btn-status btn-primary">
                                    Thành công
                                </div>
                            </td>
                            <td>Nguyễn Đức</td>
                            <td>14/02/2019 15:55</td>
                            <td><i className="color-blue fas fa-pen-square"></i></td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td className="color-blue">#HF005889</td>
                            <td>Bùi Thân</td>
                            <td>0954689321</td>
                            <td>2.546.327</td>
                            <td>Nạp tiền</td>
                            <td>Nguyễn Đức</td>
                            <td>14/02/2019 15:55</td>
                            <td>
                                <div className="btn-status btn-secondary">
                                    Chờ xử lý
                                </div>
                            </td>
                            <td>Nguyễn Đức</td>
                            <td>14/02/2019 15:55</td>
                            <td><i className="color-blue fas fa-pen-square"></i></td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td className="color-blue">#HF005889</td>
                            <td>Bùi Thân</td>
                            <td>0954689321</td>
                            <td>2.546.327</td>
                            <td>Nạp tiền</td>
                            <td>Nguyễn Đức</td>
                            <td>14/02/2019 15:55</td>
                            <td>
                                <div className="btn-status btn-danger">
                                    Thất bại
                                </div>
                            </td>
                            <td>Nguyễn Đức</td>
                            <td>14/02/2019 15:55</td>
                            <td><i className="color-blue fas fa-pen-square"></i></td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td className="color-blue">#HF005889</td>
                            <td>Bùi Thân</td>
                            <td>0954689321</td>
                            <td>2.546.327</td>
                            <td>Nạp tiền</td>
                            <td>Nguyễn Đức</td>
                            <td>14/02/2019 15:55</td>
                            <td>
                                <div className="btn-status btn-primary">
                                    Thành công
                                </div>
                            </td>
                            <td>Nguyễn Đức</td>
                            <td>14/02/2019 15:55</td>
                            <td><i className="color-blue fas fa-pen-square"></i></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs>
            <div className="btn btn-export">Xuất dữ liệu</div>
          </div>

        </div>
      </main>
    );
  }
}

export default WalletManager;