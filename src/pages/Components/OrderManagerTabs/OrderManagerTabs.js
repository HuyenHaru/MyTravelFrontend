import React, { Component } from 'react';
import TabAll from '../TabAll/TabAll';
import Tabs from '../../../../components/client/Tab/Tabs';

class OrderManagerTabs extends Component {
    render() {
        return (
            // <div >
            //     {/* nav-tabs */}
            //     <ul id="" className="nav nav-tabs nav-tabs-responsive" role="tablist">
            //         <li role="presentation" className="active">
            //             <a href="#all" className="nav-link" aria-controls="all" role="tab" data-toggle="tab">Tất cả</a>
            //         </li>
            //         <li role="presentation" className="">
            //             <a href="#waiting" className="nav-link" aria-controls="waiting" role="tab" data-toggle="tab">Đang chờ</a>
            //         </li>
            //         <li role="presentation" className="">
            //             <a href="#searching" className="nav-link" aria-controls="searching" role="tab" data-toggle="tab">Đang tìm</a>
            //         </li>
            //         <li role="presentation" className="">
            //             <a href="#received" className="nav-link" aria-controls="received" role="tab" data-toggle="tab">Đã nhận</a>
            //         </li>
            //         <li role="presentation" className="">
            //             <a href="#doing" className="nav-link" aria-controls="doing" role="tab" data-toggle="tab">Đang thực hiện</a>
            //         </li>
            //         <li role="presentation" className="">
            //             <a href="#finish" className="nav-link" aria-controls="finish" role="tab" data-toggle="tab">Hoàn thành</a>
            //         </li>
            //         <li role="presentation" className="">
            //             <a href="#cancelled" className="nav-link" aria-controls="cancelled" role="tab" data-toggle="tab">Đã hủy</a>
            //         </li>
            //     </ul>
            //     {/* tab-content */}
            //     <div className="tab-content">
            //         {/* <!-- All -->  */}
            //         <div role="tabpanel" className="tab-pane in active" id="step1">
            //             <div className="content">
            //                 <TabAll/>
            //             </div>
            //         </div>
            //     </div>
            // </div>
            <Tabs>
                <div label="Tất cả">
                    <TabAll />
                </div>
                <div label="Đang chờ">

                </div>
                <div label="Đang tìm">

                </div>
                <div label="Đã nhận">

                </div>
                <div label="Đang thực hiện">

                </div>
                <div label="Hoàn thành">

                </div>
                <div label="Đã hủy">

                </div>
            </Tabs>
        );
    }
}

export default OrderManagerTabs;