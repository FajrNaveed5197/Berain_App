import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import footer from "../footer.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footercolor">
      
        <div className="row">
          <div className="col-lg-3 ">
            <p>
              {" "}
              VAT Certificate <br></br>
              CR NO: 1010650807
            </p>
          </div>

          <div className="col-lg-6 ">
            <img src={footer} alt="footer" className="img-fluid" />
            <br/>
            <p>Copyrights Reserved To Berain Co. (Joint Stock company)</p>
          </div>

          <div className="col-lg-3">Privacy and refund policy</div>
        </div>
      
    </div>
  );
};

export default Footer;
