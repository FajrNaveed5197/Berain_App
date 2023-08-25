import "./mosque.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import mosque from "../whitemosque.png";
import map from "../map.png";
import CustomNavbar from "./Navbar";
import Footer from "./Footer";
import Makkah from "../Makkah.png";
import Nabawi from "../nabawi.png";
import Foodbank from "../foodbank.png";
const Mosque = () => {
  return (
    <div>
      <Header></Header>
      <CustomNavbar></CustomNavbar>

      <div className="col-6 text-center mt-3  card-container">
        <div
          className=" btn btn-group-toggle"
          data-toggle="buttons"
          style={{ display: "flex" }}
        >
          <Link to="/Home" style={{textDecoration:"none"}}>
            <button className="btn whitebutton" disabled>
              <i className="bi bi-house-door-fill"></i>
              Home
            </button>
          </Link>

          <Link to="/Mosque" style={{textDecoration:"none"}}>
            <button className="btn bluebutton ">
              <img src={mosque} alt="mosqueimg" />
              Mosque
            </button>
          </Link>
        </div>
      </div>

      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px",
          color: "rgb(107, 7, 107)",
        }}
      >
        <b>Choose Mosque address </b>
      </div>

      <div
        className="row mt-3 mb-3"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="col-7 ">
          <div className="card" style={{ borderRadius: "15px" }}>
            <img
              src={map}
              className="card-img-top "
              alt="Card"
              style={{ marginTop: "25px" }}
            />
            <div className="card-body"></div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-wrap mt-3 mb-3 gap-4 justify-content-center">

        <div>
        <div className="card cardheight d-flex justify-content-center align-items-center">
          <img className="smollimgs " src={Makkah} alt="Makkah" />
          <p>
            <b>Makkah</b>
          </p>
          <p style={{ fontSize: "small", color: "grey", margin: "6px" }}>
            Order Berain water, we will deliver on Your behalf in cooperation
            with reliable parties
          </p>
        </div>
        </div>



        <div>
        <div className="card cardheight d-flex justify-content-center align-items-center">
          <img className="smollimgs" src={Nabawi} alt="Nabawi" />
          
          <p style={{ fontSize: "small", color: "grey", margin: "6px" }}>
            Order Berain water, we will deliver it on behalf to visitor in the
            Prophet’s Haram and to the mosques of madinah
          </p>
        </div>
        </div>



        <div>
        <div className="card cardheight d-flex justify-content-center align-items-center">
          <img className="smollimgs " src={Foodbank} alt="Foodbank" />
          <p>
            <b>Saudi Food Bank</b>
          </p>
          <p style={{ fontSize: "small", color: "grey", margin: "6px" }}>
            You can now donate Berain water to more than 10,000 poor families
            served by the saudi food bank
          </p>
        </div>
        </div>

        

      </div>

      <Footer></Footer>
    </div>
  );
};

export default Mosque;
