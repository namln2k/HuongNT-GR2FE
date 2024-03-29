import { Link } from "react-router-dom";
import "./header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Header() {
    return (
        <div className="header">
            <div className="headerTop">
                <div className="header-left">
                    <img src="assets/img/logoBK.png" alt="" />
                </div>
                <div className="header-right">
                    <div className="headerSearch">
                        <div className="searchInfo">
                            <input type="text" name="" id="" placeholder="Tìm kiếm" />
                            <img src="assets/icon/search.png" alt="" className="searchIcon" />
                        </div>
                        <div className="headerInfo">
                            <img src="assets/img/ava.jpg" alt="" className="ava" />
                            <div className="infor">
                                <strong>Xin chào</strong>
                                <span>Nguyễn Thu Hương</span>
                                <span>20194775</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="headerBottom">
                <div className="container">
                    <div className="row">
                        <Link to={'/divide'} className="col-md-3 textNone activeHeader">
                            <span>Phiếu giao nhiệm vụ</span>
                        </Link>
                        <Link to={'/evaluate'} className="col-md-3 textNone">
                            <span>Phiếu đánh giá ĐATN</span>
                        </Link>
                        <Link to={'/debate'} className="col-md-3 textNone">
                            <span>Phiếu phản biện ĐATN</span>
                        </Link>
                        <Link to={'/student'} className="col-md-3 textNone">
                            <span>Danh sách sinh viên</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}