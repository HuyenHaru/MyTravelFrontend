import React, { Component } from 'react';
import SelectCustom from '../SelectBox/SelectBox';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faRunning, faSkating, faSnowboarding, faSwimmer, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
library.add(faRunning, faSkating, faSnowboarding, faSwimmer, faTimes);

const data = [
    {
        type: null,
        title: 'Tất cả',
    },
    {
        type: null,
        title: 'Hôm nay',
    },
    {
        type: null,
        title: 'Tuần này',
    },
    {
        type: null,
        title: 'Tháng này',
    },
    {
        type: null,
        title: 'Tùy chỉnh',
    }
];
class TabAll extends Component {
    render() {
        return (
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

                    <div className="col-lg-12 col-md-12">
                        <Link to="/quan-ly-don-hang/chi-tiet-don-hang" className="info-order">
                            <div className="head-info">
                                <div className="fl">
                                    #001 <b>SIÊU RẺ</b> | #HF0005502 | 12-07-2019, 14:22 | <span className="color-orange">45.000đ</span>
                                </div>
                                <div className="btn-primary fr">
                                    Đã nhận
                                </div>
                            </div>
                            <div className="body-info">
                                <ul>
                                    <li><i className="fas fa-circle color-blue"></i> 28a Lê Trọng Tấn, Dương Nội, Hà Nội, Việt Nam <span className="info-text">&ensp;Nguyễn Văn Dũng 8491567879986&ensp;</span></li>
                                    <li><i className="fas fa-circle color-orange"></i> Maidzo, số 5 49/64 Huỳnh Thúc Kháng, Láng Hạ, Đống Đa, Hà Nội <span className="info-text">&ensp;Thân 849079027139&ensp;</span></li>
                                </ul>
                            </div>
                        </Link>
                    
                        <Link to="/quan-ly-don-hang/chi-tiet-don-hang" className="info-order">
                            <div className="head-info">
                                <div className="fl">
                                    #001 <b>SIÊU RẺ</b> | #HF0005502 | 12-07-2019, 14:22 | <span className="color-orange">45.000đ</span>
                                </div>
                                <div className="btn-secondary fr">
                                    Hoàn thành
                                </div>
                            </div>
                            <div className="body-info">
                                <ul>
                                    <li><i className="fas fa-circle color-blue"></i> 28a Lê Trọng Tấn, Dương Nội, Hà Nội, Việt Nam <span className="info-text">&ensp;Nguyễn Văn Dũng 8491567879986&ensp;</span></li>
                                    <li><i className="fas fa-circle color-orange"></i> Maidzo, số 5 49/64 Huỳnh Thúc Kháng, Láng Hạ, Đống Đa, Hà Nội <span className="info-text">&ensp;Thân 849079027139&ensp;</span></li>
                                </ul>
                            </div>
                        </Link>
                    
                        <Link to="/quan-ly-don-hang/chi-tiet-don-hang" className="info-order">
                            <div className="head-info">
                                <div className="fl">
                                    #001 <b>SIÊU RẺ</b> | #HF0005502 | 12-07-2019, 14:22 | <span className="color-orange">45.000đ</span>
                                </div>
                                <div className="btn-primary fr">
                                    Đang tìm
                                </div>
                            </div>
                            <div className="body-info">
                                <ul>
                                    <li><i className="fas fa-circle color-blue"></i> 28a Lê Trọng Tấn, Dương Nội, Hà Nội, Việt Nam <span className="info-text">&ensp;Nguyễn Văn Dũng 8491567879986&ensp;</span></li>
                                    <li><i className="fas fa-circle color-orange"></i> Maidzo, số 5 49/64 Huỳnh Thúc Kháng, Láng Hạ, Đống Đa, Hà Nội <span className="info-text">&ensp;Thân 849079027139&ensp;</span></li>
                                </ul>
                            </div>
                        </Link>
                    
                        <Link to="/quan-ly-don-hang/chi-tiet-don-hang" className="info-order">
                            <div className="head-info">
                                <div className="fl">
                                    #001 <b>SIÊU RẺ</b> | #HF0005502 | 12-07-2019, 14:22 | <span className="color-orange">45.000đ</span>
                                </div>
                                <div className="btn-primary fr">
                                    Đã nhận
                                </div>
                            </div>
                            <div className="body-info">
                                <ul>
                                    <li><i className="fas fa-circle color-blue"></i> 28a Lê Trọng Tấn, Dương Nội, Hà Nội, Việt Nam <span className="info-text">&ensp;Nguyễn Văn Dũng 8491567879986&ensp;</span></li>
                                    <li><i className="fas fa-circle color-orange"></i> Maidzo, số 5 49/64 Huỳnh Thúc Kháng, Láng Hạ, Đống Đa, Hà Nội <span className="info-text">&ensp;Thân 849079027139&ensp;</span></li>
                                </ul>
                            </div>
                        </Link>
                    
                        <Link to="/quan-ly-don-hang/chi-tiet-don-hang" className="info-order">
                            <div className="head-info">
                                <div className="fl">
                                    #001 <b>SIÊU RẺ</b> | #HF0005502 | 12-07-2019, 14:22 | <span className="color-orange">45.000đ</span>
                                </div>
                                <div className="btn-danger fr">
                                    Đã hủy
                                </div>
                            </div>
                            <div className="body-info">
                                <ul>
                                    <li><i className="fas fa-circle color-blue"></i> 28a Lê Trọng Tấn, Dương Nội, Hà Nội, Việt Nam <span className="info-text">&ensp;Nguyễn Văn Dũng 8491567879986&ensp;</span></li>
                                    <li><i className="fas fa-circle color-orange"></i> Maidzo, số 5 49/64 Huỳnh Thúc Kháng, Láng Hạ, Đống Đa, Hà Nội <span className="info-text">&ensp;Thân 849079027139&ensp;</span></li>
                                </ul>
                            </div>
                        </Link>
                    
                    </div>
                </div>

            </div>
        );
    }
}

export default TabAll;