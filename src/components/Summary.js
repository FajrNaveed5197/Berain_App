import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import Collapse from "react-bootstrap/Collapse";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./summary.css";
import recommendedproduct from "../recommendedproduct.png";
import summaryimg1 from "../summaryimg1.png";
import Header from "./Header";
import CustomNavbar from "./Navbar";
import Footer from "./Footer";
import logo from "../mainlogo.png";
import partner1 from "../partner1.png";
import partner2 from "../partner2.png";
import partner3 from "../partner3.png";
import method1 from "../methodpay.png";
import method2 from "../methodmada.png";
import method3 from "../methodvisa.png";
import method4 from "../methodstc.png";
import method5 from "../methodcash.png";
import berainatstadiummodal from "../berainatstadiummodalimg.png";

function Summary() {
  const [isChecked, setIsChecked] = useState(true);
  const [open, setOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(false);
  const [icon, setIcon] = useState("bi bi-caret-down-fill");
  const [selectedButton, setSelectedButton] = useState("");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const toggleCollapse = () => {
    setOpen(!open);
    setIcon(open ? "bi bi-caret-down-fill" : "bi bi-caret-up-fill");
  };

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleNumChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{12}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  const handleCheckboxChange = (e) => {
    const checkboxValue = e.target.value;
    setIsChecked(checkboxValue);
  };
  return (
    <div>
      <Header></Header>
      <CustomNavbar></CustomNavbar>
      <div className="container">
        <div className="row mb-3" style={{ display: "flex", flexWrap: "wrap" }}>
          <div className="col-lg-6">
            <div className="card mt-3" style={{ borderRadius: "20px" }}>
              <div
                className="d-flex justify-content-between"
                style={{
                  margin: "30px",
                  borderBottom: "1px solid rgba(133, 133, 123, 0.25)",
                }}
              >
                <div>
                  <img
                    src={summaryimg1}
                    alt="summaryimg1"
                    className="imgstyle"
                  />
                </div>
                <div>
                  <span>48 * 330 ml</span> <br />
                  <div className="d-flex gap-3">
                    <button className="plusminusprops">+</button>
                    <span>4</span>
                    <button className="plusminusprops">-</button>
                  </div>
                </div>

                <div>
                  <span style={{ color: "rgb(107, 7, 107)" }}>
                    {" "}
                    <b> 200 SAR</b>{" "}
                  </span>{" "}
                  <br />
                  <i
                    class="bi bi-trash3"
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  ></i>
                </div>
              </div>

              <div
                className="d-flex justify-content-between"
                style={{
                  margin: "20px",
                  borderBottom: "1px solid rgba(133, 133, 123, 0.25)",
                }}
              >
                <div>
                  <img
                    src={summaryimg1}
                    alt="summaryimg1"
                    className="imgstyle"
                  />
                </div>
                <div>
                  <span>48 * 200 ml</span> <br />
                  <span>
                    <button className="plusminusprops">+</button>&nbsp;3 &nbsp;
                    <button className="plusminusprops">-</button>
                  </span>
                </div>

                <div>
                  <span style={{ color: "rgb(107, 7, 107)" }}>
                    {" "}
                    <b> 200 SAR</b>{" "}
                  </span>{" "}
                  <br />
                  <i
                    class="bi bi-trash3"
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  ></i>
                </div>
              </div>

              <a
                href="/Home"
                style={{
                  color: "rgb(62, 160, 173)",
                  // marginLeft: "40px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                <b>Add More Products </b>
              </a>
            </div>

            <div className="card mt-3" style={{ borderRadius: "20px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "rgb(107, 7, 107)",
                  margin: "30px",
                }}
              >
                <span>
                  <b> Delivery Charges:</b>
                </span>
                <span>
                  <b> 10 Riyal</b>
                </span>
              </div>
              <div>
                <p style={{ color: "rgb(62, 160, 173)" }}>
                  {" "}
                  Add 3 more packs and get free delivery.{" "}
                </p>
              </div>
            </div>

            <div className="card mt-3" style={{ borderRadius: "20px" }}>
              <span
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: "20px",
                  margin: "30px",
                }}
              >
                Recommended Products
              </span>

              <div
                style={{
                  marginBottom: "30px",
                  display: "flex",
                  gap: "15px",
                  overflowX: "auto",
                }}
              >
                <div
                  className="recommendationscrollcard"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="recommendcards">
                    <div>
                      <img
                        src={recommendedproduct}
                        className="imgstyle"
                        alt=""
                      />
                    </div>
                    <div className="d-flex flex-column">
                      <span
                        style={{
                          fontSize: "20px",
                          whiteSpace: "nowrap",
                          marginTop: "20px",
                          color: "rgb(62, 160, 173)",
                          fontWeight: "bold",
                        }}
                      >
                        Berain 200 ML
                      </span>
                      <span style={{ fontSize: "16px", color: "grey" }}>
                        12 Glasses
                      </span>
                      <div>
                        <button
                          style={{
                            color: "white",
                            // background: "rgb(107, 7, 107)",
                            borderRadius: "15px",
                            padding: "5px",
                            marginTop: "5px",
                            border: "none",
                            width: "80px",
                            background:
                              "linear-gradient(124.11deg, #993A99 0.3%, #6C0051 100%)",
                          }}
                        >
                          22 SAR
                        </button>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          marginRight: "10px",
                          justifyContent: "flex-end",
                          alignItems: "flex-end",
                          flex: 1,
                        }}
                      >
                        <button
                          style={{
                            background: "rgb(62, 160, 173)",
                            borderRadius: "10px",
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="recommendationscrollcard"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="recommendcards">
                    <div>
                      <img
                        src={recommendedproduct}
                        className="imgstyle"
                        alt=""
                      />
                    </div>
                    <div className="d-flex flex-column">
                      <span
                        style={{
                          fontSize: "20px",
                          whiteSpace: "nowrap",
                          marginTop: "20px",
                          color: "rgb(62, 160, 173)",
                          fontWeight: "bold",
                        }}
                      >
                        Berain 200 ML
                      </span>
                      <span style={{ fontSize: "16px", color: "grey" }}>
                        12 Glasses
                      </span>
                      <div>
                        <button
                          style={{
                            color: "white",
                            // background: "rgb(107, 7, 107)",
                            borderRadius: "15px",
                            padding: "5px",
                            marginTop: "5px",
                            border: "none",
                            width: "80px",
                            background:
                              "linear-gradient(124.11deg, #993A99 0.3%, #6C0051 100%)",
                          }}
                        >
                          22 SAR
                        </button>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          marginRight: "10px",
                          justifyContent: "flex-end",
                          alignItems: "flex-end",
                          flex: 1,
                        }}
                      >
                        <button
                          style={{
                            background: "rgb(62, 160, 173)",
                            borderRadius: "10px",
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="recommendationscrollcard"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="recommendcards">
                    <div>
                      <img
                        src={recommendedproduct}
                        className="imgstyle"
                        alt=""
                      />
                    </div>
                    <div className="d-flex flex-column">
                      <span
                        style={{
                          fontSize: "20px",
                          whiteSpace: "nowrap",
                          marginTop: "20px",
                          color: "rgb(62, 160, 173)",
                          fontWeight: "bold",
                        }}
                      >
                        Berain 200 ML
                      </span>
                      <span style={{ fontSize: "16px", color: "grey" }}>
                        12 Glasses
                      </span>
                      <div>
                        <button
                          style={{
                            color: "white",
                            // background: "rgb(107, 7, 107)",
                            borderRadius: "15px",
                            padding: "5px",
                            marginTop: "5px",
                            border: "none",
                            width: "80px",
                            background:
                              "linear-gradient(124.11deg, #993A99 0.3%, #6C0051 100%)",
                          }}
                        >
                          22 SAR
                        </button>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          marginRight: "10px",
                          justifyContent: "flex-end",
                          alignItems: "flex-end",
                          flex: 1,
                        }}
                      >
                        <button
                          style={{
                            background: "rgb(62, 160, 173)",
                            borderRadius: "10px",
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="recommendationscrollcard"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="recommendcards">
                    <div>
                      <img
                        src={recommendedproduct}
                        className="imgstyle"
                        alt=""
                      />
                    </div>
                    <div className="d-flex flex-column">
                      <span
                        style={{
                          fontSize: "20px",
                          whiteSpace: "nowrap",
                          marginTop: "20px",
                          color: "rgb(62, 160, 173)",
                          fontWeight: "bold",
                        }}
                      >
                        Berain 200 ML
                      </span>
                      <span style={{ fontSize: "16px", color: "grey" }}>
                        12 Glasses
                      </span>
                      <div>
                        <button
                          style={{
                            color: "white",
                            // background: "rgb(107, 7, 107)",
                            borderRadius: "15px",
                            padding: "5px",
                            marginTop: "5px",
                            border: "none",
                            width: "80px",
                            background:
                              "linear-gradient(124.11deg, #993A99 0.3%, #6C0051 100%)",
                          }}
                        >
                          22 SAR
                        </button>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          marginRight: "10px",
                          justifyContent: "flex-end",
                          alignItems: "flex-end",
                          flex: 1,
                        }}
                      >
                        <button
                          style={{
                            background: "rgb(62, 160, 173)",
                            borderRadius: "10px",
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="recommendationscrollcard"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="recommendcards">
                    <div>
                      <img
                        src={recommendedproduct}
                        className="imgstyle"
                        alt=""
                      />
                    </div>
                    <div className="d-flex flex-column">
                      <span
                        style={{
                          fontSize: "20px",
                          whiteSpace: "nowrap",
                          marginTop: "20px",
                          color: "rgb(62, 160, 173)",
                          fontWeight: "bold",
                        }}
                      >
                        Berain 200 ML
                      </span>
                      <span style={{ fontSize: "16px", color: "grey" }}>
                        12 Glasses
                      </span>
                      <div>
                        <button
                          style={{
                            color: "white",
                            // background: "rgb(107, 7, 107)",
                            borderRadius: "15px",
                            padding: "5px",
                            marginTop: "5px",
                            border: "none",
                            width: "80px",
                            background:
                              "linear-gradient(124.11deg, #993A99 0.3%, #6C0051 100%)",
                          }}
                        >
                          22 SAR
                        </button>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          marginRight: "10px",
                          justifyContent: "flex-end",
                          alignItems: "flex-end",
                          flex: 1,
                        }}
                      >
                        <button
                          style={{
                            background: "rgb(62, 160, 173)",
                            borderRadius: "10px",
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mt-3" style={{ borderRadius: "20px" }}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                      checked={isChecked}
                      onChange={toggleCheckbox}
                    />
                    <label
                      className="form-check-label ml-2"
                      htmlFor="flexCheckChecked"
                    >
                      Include the free Items
                    </label>
                  </div>
                  <button
                    className="collapse-button mb-0"
                    onClick={toggleCollapse}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    <i className={icon}></i>
                  </button>
                </div>
                <Collapse in={open}>
                  <div id="example-collapse-text" className="collapse-content">
                    <ul style={{ color: "#6C296C" }}>
                      <li style={{ margin: "3% 60% 3% 0" }}>
                        48 * 200ml{" "}
                        <i class="bi bi-dot" style={{ margin: "0px 10px" }}></i>{" "}
                        3 Items
                      </li>
                      <li style={{ margin: "3% 60% 3% 0" }}>
                        48 * 200ml{" "}
                        <i class="bi bi-dot" style={{ margin: "0px 10px" }}></i>{" "}
                        3 Items
                      </li>
                      <li style={{ margin: "3% 60% 3% 0" }}>
                        Play Cards{" "}
                        <i class="bi bi-dot" style={{ margin: "0 10px" }}></i> 3
                        Items
                      </li>
                    </ul>
                  </div>
                </Collapse>
              </div>
            </div>

            <div className="card mt-3" style={{ borderRadius: "20px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  margin: "30px",
                  gap: "10px",
                }}
              >
                <span>
                  <b> ADDRESS</b>
                </span>
                <span
                  style={{ background: "#E9E4E9", color: "#6C296C" }}
                  class="badge"
                >
                  Home
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  marginLeft: "30px",
                  color: "grey",
                }}
              >
                <h5>Apartment (Riyadh, Derah Dist)</h5>
                <h5>32 Makka Streat, Floor 2, No 4</h5>
                <label
                  style={{
                    borderTop: "1px solid rgba(133, 133, 123, 0.25)",
                    width: "90%",
                    marginTop: "10px",
                    paddingTop: "15px",
                  }}
                >
                  Recipient phone (Optional):
                </label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "15%",
                    marginBottom: "10%",
                  }}
                >
                  <p style={{ marginRight: "10px", marginLeft: "15%" }}></p>
                  <PhoneInput
                    country={"us"}
                    value={phoneNumber}
                    onChange={handleNumChange}
                    inputProps={{ required: true }}
                  />
                  <button
                    style={{
                      background: "transparent",
                      borderRadius: "5px",
                      padding: "5px 10px",
                      color: valid ? "blue" : "grey",
                      border: "none",
                      marginRight: "30%",
                    }}
                  >
                    <i class="bi bi-check-circle-fill"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="card mt-3" style={{ borderRadius: "20px" }}>
              <div style={{ marginTop: "30px", marginBottom: "30px" }}>
                <div
                  style={{ display: "flex", gap: "10px" }}
                  class="form-check"
                >
                  <input
                    style={{
                      borderRadius: "20px",
                      marginLeft: "30px",
                      display: "flex",
                    }}
                    name="check1"
                    class="form-check-input"
                    type="checkbox"
                    value="checkbox1"
                    id="checkbox1"
                    checked={isChecked === "checkbox1"}
                    onChange={handleCheckboxChange}
                  />
                  <label class="form-check-label" for="checkbox1">
                    Deliver ASAP
                  </label>
                </div>
                <div
                  style={{ display: "flex", gap: "10px" }}
                  class="form-check"
                >
                  <input
                    style={{ borderRadius: "20px", marginLeft: "30px" }}
                    name="check1"
                    class="form-check-input"
                    type="checkbox"
                    value="checkbox2"
                    id="checkbox2"
                    checked={isChecked === "checkbox2"}
                    onChange={handleCheckboxChange}
                  />
                  <label class="form-check-label" for="checkbox2">
                    Or select delivery date and time
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-3">
            <div className="card " style={{ borderRadius: "20px" }}>
              <div>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    marginTop: "20px",
                    margin: "30px",
                  }}
                >
                  <b> Select your reward plan</b>
                </span>
                <div
                  style={{
                    color: "grey",
                    display: "flex",
                    gap: "15px",
                    marginLeft: "30px",
                    paddingBottom: "30px",
                  }}
                >
                  <button
                    style={{
                      background: "transparent",
                      color: selectedButton === "berain" ? "#00AFAB" : "grey",
                      border:
                        selectedButton === "berain"
                          ? "1px solid #00AFAB"
                          : "1px solid grey",
                      borderRadius: "10px",
                      padding: "10px",
                      width: "120px",
                    }}
                    onClick={() => handleButtonClick("berain")}
                  >
                    Berain at the stadium
                  </button>
                  <button
                    style={{
                      background: "transparent",
                      color: selectedButton === "promo" ? "#00AFAB" : "grey",
                      border:
                        selectedButton === "promo"
                          ? "1px solid #00AFAB"
                          : "1px solid grey",
                      borderRadius: "10px",
                      padding: "10px",
                      width: "120px",
                    }}
                    onClick={() => handleButtonClick("promo")}
                  >
                    Promo Code
                  </button>
                </div>
                {/* Collapsible content */}
                {selectedButton === "berain" && (
                  <div>
                    <div
                      style={{ margin: "0px 90px 20px 90px", color: "#667085" }}
                    >
                      Join berain f elmal3ab now to support your favorite club
                      and get free cartons.
                    </div>
                    <div style={{ marginBottom: "30px" }}>
                      <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        style={{
                          border: "none",
                          background:
                            "linear-gradient(108.65deg, #F1F8F7 0%, #C5E2E1 100%)",
                          width: "60%",
                          borderRadius: "20px",
                        }}
                      >
                        <span style={{ color: "#008784" }}> Join Now</span>
                      </button>
                      <div style={{ marginBottom: "30px" }}>
                        <div
                          className="modal fade"
                          id="exampleModal"
                          tabIndex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div
                            className="modal-dialog"
                            style={{ maxWidth: "50%" }}
                          >
                            <div className="modal-content">
                              <div
                                className="modal-header"
                                style={{ border: "none" }}
                              >
                                <div
                                  style={{
                                    position: "absolute",
                                    paddingLeft: "90%",
                                    marginTop: "3%",
                                  }}
                                >
                                  <button
                                    type="button"
                                    className="btn-close custom-close-button"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                              </div>
                              <div
                                className="modal-body"
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div>
                                  <img
                                    src={berainatstadiummodal}
                                    style={{ width: "80%", height: "30%" }}
                                    alt=""
                                  />
                                </div>
                                <div
                                  style={{
                                    width: "100%",
                                    marginTop: "3%",
                                    textAlign: "center",
                                  }}
                                >
                                  <span>
                                    Fill the fields and support your favorite
                                    club <br /> and get free cartons.
                                  </span>
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    width: "100%",
                                  }}
                                >
                                  <div
                                    class="mb-3"
                                    style={{ width: "30%", margin: "0 auto" }}
                                  >
                                    <label
                                      for="formGroupfirstname"
                                      class="form-label"
                                      style={{
                                        marginRight: "50%",
                                        color: "#98A2B3",
                                        marginTop: "10px",
                                      }}
                                    >
                                      First Name
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="firstname"
                                      placeholder="First name"
                                    />
                                  </div>
                                  <div
                                    class="mb-3"
                                    style={{ width: "30%", margin: "0 auto" }}
                                  >
                                    <label
                                      for="formGroupfirstname"
                                      class="form-label"
                                      style={{
                                        marginRight: "50%",
                                        color: "#98A2B3",
                                      }}
                                    >
                                      Last Name
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="lastname"
                                      placeholder="Last name"
                                    />
                                  </div>
                                  <div
                                    class="mb-3"
                                    style={{ width: "30%", margin: "0 auto" }}
                                  >
                                    <label
                                      for="formDateOfBirth"
                                      class="form-label"
                                      style={{
                                        marginRight: "40%",
                                        color: "#98A2B3",
                                      }}
                                    >
                                      Date of Birth
                                    </label>
                                    <div class="input-group">
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="dob-day"
                                        placeholder="Day"
                                        style={{ width: "30%" }}
                                      />
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="dob-month"
                                        placeholder="Month"
                                        style={{ width: "30%" }}
                                      />
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="dob-year"
                                        placeholder="Year"
                                        style={{ width: "40%" }}
                                      />
                                    </div>
                                  </div>

                                  <div style={{ display: "flex", gap: "5px" }}>
                                    <span>Gender:</span>

                                    <div class="form-check">
                                      <input
                                        class="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                      />
                                      <label
                                        class="form-check-label"
                                        for="flexRadioDefault1"
                                      >
                                        Male
                                      </label>
                                    </div>
                                    <div class="form-check">
                                      <input
                                        class="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault2"
                                        checked
                                      />
                                      <label
                                        class="form-check-label"
                                        for="flexRadioDefault2"
                                      >
                                        Female
                                      </label>
                                    </div>
                                  </div>

                                  <div class="form-check mt-3">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="defaultCheck1"
                                    />
                                    <label
                                      class="form-check-label"
                                      for="defaultCheck1"
                                    >
                                      I agree to the terms and conditions
                                    </label>
                                  </div>

                                  <button
                                    style={{
                                      marginTop: "20px",
                                      display: "flex",
                                      justifyContent: "center",
                                      background:
                                        "linear-gradient(108.65deg, #F1F8F7 0%, #C5E2E1 100%)",
                                      borderRadius: "20px",
                                      width: "50%",
                                      border: "none",
                                    }}
                                  >
                                    Join
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {selectedButton === "promo" && (
                  <div style={{ marginLeft: "30px" }}>
                    Promo Promo Promo Promo Promo Promo Promo Promo Promo Promo
                    Promo
                  </div>
                )}
              </div>
            </div>

            <div className="card mt-3" style={{ borderRadius: "20px" }}>
              <div>
                <span
                  style={{
                    display: "flex",
                    // justifyContent: "flex-start",
                    marginTop: "20px",
                    margin: "30px",
                  }}
                >
                  <b> REDEEM BERAIN POINTS</b>
                </span>
                <div
                  class="d-flex justify-content-center"
                  style={{
                    position: "relative",
                    background: "#F7F5F7",
                    margin: "45px",
                    borderRadius: "20px",
                    height: "50px",
                    borderRightColor: "none",
                  }}
                >
                  <img
                    alt="logo"
                    style={{
                      width: "50px",
                      height: "50px",
                      position: "absolute",
                      top: "0px",
                      left: "-4px",
                    }}
                    src={logo}
                  />
                  <span
                    style={{
                      color: "rgba(108, 41, 108, 1)",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Current Balance = 5000 points{" "}
                  </span>
                </div>

                <div style={{ marginLeft: "10%", display: "flex", gap: "46%" }}>
                  <span>Points</span>
                  <span>SAR</span>
                </div>

                <div style={{ display: "flex", gap: "5%", marginLeft: "10%" }}>
                  <div
                    style={{
                      width: "40%",
                      background: "white",
                      padding: "5px 15px",
                      borderRadius: "10px",
                      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
                      border: "1px solid rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <span>5000</span>
                  </div>
                  <i class="bi bi-arrow-left-right"></i>
                  <div
                    style={{
                      width: "40%",
                      background: "white",
                      padding: "5px 15px",
                      borderRadius: "10px",
                      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                      border: "1px solid rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <span>500</span>
                  </div>
                </div>

                <div style={{ marginTop: "30px", marginBottom: "30px" }}>
                  <button
                    style={{
                      marginLeft: "5%",
                      width: "60%",
                      borderRadius: "20px",
                      background:
                        "linear-gradient(108.65deg, #F1F8F7 0%, #C5E2E1 100%)",
                      color: "rgba(0, 135, 132, 1)",
                    }}
                  >
                    Redeem
                  </button>
                </div>
              </div>
            </div>

            <div className="card mt-3" style={{ borderRadius: "20px" }}>
              <div>
                <span
                  style={{
                    display: "flex",
                    // justifyContent: "flex-start",
                    marginTop: "20px",
                    margin: "30px",
                  }}
                >
                  <b>Redeem partners points</b>
                </span>
              </div>
              <div
                style={{
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  display: "flex",
                  justifyContent: "space-around",
                  width: "100%",
                  marginBottom: "30px",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    padding: "20px",
                    borderRadius: "20px",
                    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img src={partner1} alt="" style={{ width: "50%" }} />
                </div>
                <div
                  style={{
                    flex: 1,
                    padding: "20px",
                    borderRadius: "20px",
                    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img src={partner2} alt="" style={{ width: "50%" }} />
                </div>
                <div
                  style={{
                    flex: 1,
                    padding: "20px",
                    borderRadius: "20px",
                    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img src={partner3} alt="" style={{ width: "50%" }} />
                </div>
              </div>
            </div>

            <div className="card mt-3" style={{ borderRadius: "20px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "30px",
                  marginRight: "30px",
                  marginBottom: "20px",
                }}
              >
                <div class="form-check" style={{ marginLeft: "30px" }}>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Use wallet
                  </label>
                </div>
                <div>
                  <span style={{ color: "rgba(108, 41, 108, 1)" }}>
                    {" "}
                    <b> 1200 SAR</b>
                  </span>
                </div>
              </div>

              <div
                style={{ borderTop: "5px solid rgba(228, 231, 236, 1)" }}
              ></div>
              <div
                class="form-check"
                style={{
                  marginLeft: "30px",
                  display: "flex",
                  gap: "10px",
                  marginTop: "20px",
                  marginBottom: "30px",
                }}
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  And choose another method
                </label>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  marginLeft: "50px",
                  marginRight: "50px",
                  gap: "20px",
                  marginBottom: "30px",
                }}
              >
                <div class="form-check" className="methodstyle">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    <img style={{ padding: "10px" }} src={method1} alt="" />
                  </label>
                </div>
                <div class="form-check" className="methodstyle">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    <img src={method2} alt="" />
                  </label>
                </div>
                <div class="form-check" className="methodstyle">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    <img src={method3} alt="" />
                  </label>
                </div>
                <div class="form-check" className="methodstyle">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    <img src={method4} alt="" />
                  </label>
                </div>
                <div class="form-check" className="methodstyle">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    <img src={method5} alt="" />
                  </label>
                </div>
              </div>
            </div>

            <div className="card mt-3" style={{ borderRadius: "20px" }}>
              <div>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    marginTop: "20px",
                    margin: "30px",
                  }}
                >
                  <b>ORDER SUMMARY</b>
                </span>
              </div>

              <div
                style={{
                  marginBottom: "20px",
                  marginRight: "30px",
                  marginLeft: "30px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>Total before VAT</span>
                <span>1300 SAR</span>
              </div>

              <div
                style={{
                  marginBottom: "20px",
                  marginRight: "30px",
                  marginLeft: "30px",
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid rgba(133, 133, 123, 0.25)",
                }}
              >
                <span>VAT</span>
                <span>195 SAR</span>
              </div>

              <div
                style={{
                  marginRight: "30px",
                  marginLeft: "30px",
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "30px",
                }}
              >
                <span>Wallet</span>
                <span>-1200 SAR</span>
              </div>
            </div>

            <div
              style={{
                marginTop: "30px",
                marginBottom: "30px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                style={{
                  color: "white",
                  width: "400px",
                  display: "flex",
                  justifyContent: "space-between",
                  borderRadius: "20px",
                  border: "none",
                  background:
                    "linear-gradient(124.11deg, #00AFAB 0%, #007E8A 100%)",
                }}
              >
                <span style={{ margin: "8px" }}>Proceed to Pay</span>
                <span style={{ margin: "8px" }}>55 SAR</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Summary;
