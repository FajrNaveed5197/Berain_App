import React from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fontsource/lexend"; // Defaults to weight 400
import "@fontsource/lexend/400.css"; // Specify weight
import "./maincontent.css";
import mosque from "../mosque.png";
import b1 from "../bottlec1r1.png";
import b2 from "../bottlec2r1.png";
import b3 from "../bottlec3r1.png";
import b4 from "../bottlec1r2.png";
import b5 from "../bottlec2r2.png";
import b6 from "../bottlec3r2.png";

const MainContent = () => {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 text-center mt-3  card-container">
          <div
            className=" btn btn-group-toggle"
            data-toggle="buttons"
            style={{ display: "flex" }}
          >
            <Link to="/Home" style={{textDecoration:"none"}}>
              <button className="btn bluebutton ">
                <i className="bi bi-house-door-fill"></i>
                Home
              </button>
            </Link>

            <Link to="/Mosque" style={{textDecoration:"none"}}>
              <button className="btn whitebutton" disabled>
                <img src={mosque} alt="" />
                Mosque
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className=" d-flex mt-3 mb-3 gap-4 flex-wrap justify-content-center">
        <div>
          <div className="card card-equal-height">
            <img src={b1} alt="b1" className="card-img-style" />
            <div className="card-body" style={{ marginLeft: "20px" }}>
              <button
                style={{
                  color: "white",
                  background: "rgb(107, 7, 107)",
                  borderRadius: "15px",
                  paddingLeft: "2%",
                  paddingRight: "2%",
                  marginLeft: "70%",
                  width: "fit-content",
                }}
              >
                22 SAR
              </button>
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <h4
                  className="card-text"
                  style={{ color: "rgb(62, 160, 173)" }}
                >
                  Berain 200 ML &nbsp;
                </h4>
                <p
                  style={{
                    color: "gray",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <b>(48 bottles)</b>
                </p>
              </div>
              <p>
                The water bottle has full of natural nutritions and fill your
                body minerals needs.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  placeholder="0"
                  // min={0}
                  style={{
                    borderRadius: "10px",
                    width: "80px",
                    textAlign: "center",
                  }}
                />
                <button
                  style={{
                    color: "white",
                    border: "0",
                    borderRadius: "10px",
                    backgroundColor: "rgb(62, 160, 173)",
                    padding: "5px",
                    width: "120px",
                    marginLeft: "20px",
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card card-equal-height">
            <img src={b2} alt="b2" className="card-img-style" />
            <div className="card-body" style={{ marginLeft: "20px" }}>
              <button
                style={{
                  color: "white",
                  background: "rgb(107, 7, 107)",
                  borderRadius: "15px",
                  paddingLeft: "2%",
                  paddingRight: "2%",
                  marginLeft: "70%",
                  width: "fit-content",
                }}
              >
                22 SAR
              </button>
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <h4
                  className="card-text"
                  style={{ color: "rgb(62, 160, 173)" }}
                >
                  Berain 200 ML &nbsp;
                </h4>
                <p
                  style={{
                    color: "gray",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <b>(48 bottles)</b>
                </p>
              </div>
              <p>
                The water bottle has full of natural nutritions and fill your
                body minerals needs.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  placeholder="0"
                  // min={0}
                  style={{
                    borderRadius: "10px",
                    width: "80px",
                    textAlign: "center",
                  }}
                />
                <button
                  style={{
                    color: "white",
                    border: "0",
                    borderRadius: "10px",
                    backgroundColor: "rgb(62, 160, 173)",
                    padding: "5px",
                    width: "120px",
                    marginLeft: "20px",
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card card-equal-height">
            <img src={b3} alt="b3" className="card-img-style " />
            <div className="card-body" style={{ marginLeft: "20px" }}>
              <button
                style={{
                  color: "white",
                  background: "rgb(107, 7, 107)",
                  borderRadius: "15px",
                  paddingLeft: "2%",
                  paddingRight: "2%",
                  marginLeft: "70%",
                  width: "fit-content",
                }}
              >
                22 SAR
              </button>
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <h4
                  className="card-text"
                  style={{ color: "rgb(62, 160, 173)" }}
                >
                  Berain 200 ML &nbsp;
                </h4>
                <p
                  style={{
                    color: "gray",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <b>(48 bottles)</b>
                </p>
              </div>
              <p>
                The water bottle has full of natural nutritions and fill your
                body minerals needs.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  placeholder="0"
                  // min={0}
                  style={{
                    borderRadius: "10px",
                    width: "80px",
                    textAlign: "center",
                  }}
                />
                <button
                  style={{
                    color: "white",
                    border: "0",
                    borderRadius: "10px",
                    backgroundColor: "rgb(62, 160, 173)",
                    padding: "5px",
                    width: "120px",
                    marginLeft: "20px",
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>



        <div>
          <div className="card card-equal-height">
            <img src={b4} alt="b4" className="card-img-style" />
            <div className="card-body" style={{ marginLeft: "20px" }}>
              <button
                style={{
                  color: "white",
                  background: "rgb(107, 7, 107)",
                  borderRadius: "15px",
                  paddingLeft: "2%",
                  paddingRight: "2%",
                  marginLeft: "70%",
                  width: "fit-content",
                }}
              >
                22 SAR
              </button>
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <h4
                  className="card-text"
                  style={{ color: "rgb(62, 160, 173)" }}
                >
                  Berain 200 ML &nbsp;
                </h4>
                <p
                  style={{
                    color: "gray",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <b>(48 bottles)</b>
                </p>
              </div>
              <p>
                The water bottle has full of natural nutritions and fill your
                body minerals needs.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  placeholder="0"
                  // min={0}
                  style={{
                    borderRadius: "10px",
                    width: "80px",
                    textAlign: "center",
                  }}
                />
                <button
                  style={{
                    color: "white",
                    border: "0",
                    borderRadius: "10px",
                    backgroundColor: "rgb(62, 160, 173)",
                    padding: "5px",
                    width: "120px",
                    marginLeft: "20px",
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card card-equal-height">
            <img src={b5} alt="b5" className="card-img-style" />
            <div className="card-body" style={{ marginLeft: "20px" }}>
              <button
                style={{
                  color: "white",
                  background: "rgb(107, 7, 107)",
                  borderRadius: "15px",
                  paddingLeft: "2%",
                  paddingRight: "2%",
                  marginLeft: "70%",
                  width: "fit-content",
                }}
              >
                22 SAR
              </button>
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <h4
                  className="card-text"
                  style={{ color: "rgb(62, 160, 173)" }}
                >
                  Berain 200 ML &nbsp;
                </h4>
                <p
                  style={{
                    color: "gray",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <b>(48 bottles)</b>
                </p>
              </div>
              <p>
                The water bottle has full of natural nutritions and fill your
                body minerals needs.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  placeholder="0"
                  // min={0}
                  style={{
                    borderRadius: "10px",
                    width: "80px",
                    textAlign: "center",
                  }}
                />
                <button
                  style={{
                    color: "white",
                    border: "0",
                    borderRadius: "10px",
                    backgroundColor: "rgb(62, 160, 173)",
                    padding: "5px",
                    width: "120px",
                    marginLeft: "20px",
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card card-equal-height">
            <img src={b6} alt="b6" className="card-img-style" />
            <div className="card-body" style={{ marginLeft: "20px" }}>
              <button
                style={{
                  color: "white",
                  background: "rgb(107, 7, 107)",
                  borderRadius: "15px",
                  paddingLeft: "2%",
                  paddingRight: "2%",
                  marginLeft: "70%",
                  width: "fit-content",
                }}
              >
                22 SAR
              </button>
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <h4
                  className="card-text"
                  style={{ color: "rgb(62, 160, 173)" }}
                >
                  Berain 200 ML &nbsp;
                </h4>
                <p
                  style={{
                    color: "gray",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <b>(48 bottles)</b>
                </p>
              </div>
              <p>
                The water bottle has full of natural nutritions and fill your
                body minerals needs.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  placeholder="0"
                  // min={0}
                  style={{
                    borderRadius: "10px",
                    width: "80px",
                    textAlign: "center",
                  }}
                />
                <button
                  style={{
                    color: "white",
                    border: "0",
                    borderRadius: "10px",
                    backgroundColor: "rgb(62, 160, 173)",
                    padding: "5px",
                    width: "120px",
                    marginLeft: "20px",
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default MainContent;
