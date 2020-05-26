import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SelectCustom from "../Components/SelectBox/SelectBox";
import { data } from "./../../config/SelectInputConfig";
import { fetchPost } from "../../redux/actions/post.actions";

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentPost } = useSelector((state) => state.post);
  console.log(id);

  useEffect(() => {
    if (id) {
      dispatch(fetchPost(id));
    }
  }, [id]);
  return (
    <main>
      <div className="header">
        <div className="row">
          <div className="col-lg-6 col-md-5 col-sm-4 col-xs-4">
            <h1 className="title-header">Danh sách khách hàng</h1>
          </div>
          <div className="col-lg-6 col-md-7 col-sm-8 col-xs-8">
            <ul>
              <li>Số tiền trong tài khoản: 0 VNĐ</li>
              <li>Xin chào: Admin</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="customer-list">
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
                <SelectCustom data={data} placeholder="Tất cả" />
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
                    <th>Email</th>
                    <th>Địa chỉ</th>
                    <th>Ngày tạo</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td className="color-blue">#HF005889</td>
                    <td>Bùi Thân</td>
                    <td>0954689321</td>
                    <td>buithan@gmai.com</td>
                    <td>
                      Số 9 lô 5B, Đường Trung Yên 6, Trung Yên, Trung Hòa, Cầu
                      Giấy
                    </td>
                    <td>14/02/2019 15:55</td>
                    <td>
                      <i class="color-blue fas fa-pen-square"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td className="color-blue">#HF005889</td>
                    <td>Bùi Thân</td>
                    <td>0954689321</td>
                    <td>buithan@gmai.com</td>
                    <td>
                      Số 9 lô 5B, Đường Trung Yên 6, Trung Yên, Trung Hòa, Cầu
                      Giấy
                    </td>
                    <td>14/02/2019 15:55</td>
                    <td>
                      <i class="color-blue fas fa-pen-square"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td className="color-blue">#HF005889</td>
                    <td>Bùi Thân</td>
                    <td>0954689321</td>
                    <td>buithan@gmai.com</td>
                    <td>
                      Số 9 lô 5B, Đường Trung Yên 6, Trung Yên, Trung Hòa, Cầu
                      Giấy
                    </td>
                    <td>14/02/2019 15:55</td>
                    <td>
                      <i class="color-blue fas fa-pen-square"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td className="color-blue">#HF005889</td>
                    <td>Bùi Thân</td>
                    <td>0954689321</td>
                    <td>buithan@gmai.com</td>
                    <td>
                      Số 9 lô 5B, Đường Trung Yên 6, Trung Yên, Trung Hòa, Cầu
                      Giấy
                    </td>
                    <td>14/02/2019 15:55</td>
                    <td>
                      <i class="color-blue fas fa-pen-square"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PostDetail;
