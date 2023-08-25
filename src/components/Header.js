import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./header.css";

const Header = () => {
  return (
    <div className="container-fluid">
    <div className="headercolor row d-flex align-items-center">
      <div className="col-lg-6 d-flex gap-4 ">
        <i className="bi bi-telephone-fill">&nbsp;&nbsp;920025555</i>
        <i className="bi bi-geo-alt">&nbsp;&nbsp;Confirm Address</i>
      </div>

      
      <div className="col-lg-6 d-flex gap-4 justify-content-end">
        <button className="btn btn-light rounded" >English</button>
        <i className="bi bi-search"></i>
      </div>



    </div>
    </div>
  );
};

export default Header;
