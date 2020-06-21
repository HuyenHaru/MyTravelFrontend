import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const ModalChargePass = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <span>
      <a className="link-pass" onClick={toggle} href="#!">
        Đổi mật khẩu
      </a>
      <Modal isOpen={modal} toggle={toggle} className={(className, "modal-lg")}>
        <ModalHeader toggle={toggle}>Đổi mật khẩu</ModalHeader>
        <ModalBody>
          <form>
            <div className="body-form">
              <div className="form-group row">
                <label htmlFor="inputPass" className="col-sm-3 col-form-label">
                  Mật khẩu cũ*
                </label>
                <div className="col-sm-9">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPass"
                    placeholder="Nhập mật khẩu cũ"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="inputPass" className="col-sm-3 col-form-label">
                  Mật khẩu mới*
                </label>
                <div className="col-sm-9">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPass"
                    placeholder="Nhập mật khẩu mới"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="inputPass" className="col-sm-3 col-form-label">
                  Xác nhận lại
                </label>
                <div className="col-sm-9">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPass"
                    placeholder="Xác nhận lại mật khẩu"
                  />
                </div>
              </div>
              <div className="ft-btn fr">
                <button
                  type="submit"
                  className="btn btn-outline-success btn-add-item"
                >
                  Lưu
                </button>{" "}
                &emsp;
                <button
                  type="submit"
                  className="btn btn-outline-dark"
                  onClick={toggle}
                >
                  Hủy bỏ
                </button>
              </div>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </span>
  );
};

export default ModalChargePass;
