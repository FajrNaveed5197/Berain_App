import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../logo.png";
import "./navbar.css";

function CustomNavbar() {
  return (
    <Navbar expand="lg" bg="light" className="navclass">
      <Navbar.Brand href="#">
        <img
          src={logo}
          alt=""
          width="100%"
          height="100%"
          className="d-inline-block align-text-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
      <Navbar.Collapse id="navbarNavAltMarkup">
        <Nav className="ml-auto align-items-center d-flex flex-column flex-lg-row">
         
         
          <Nav.Link href="/Home" className="nav-link">
            Home
          </Nav.Link>

          <Nav.Link href="#" className="nav-link">
            About Berain
          </Nav.Link>
          <Nav.Link href="#" className="nav-link">
            Our Products
          </Nav.Link>
          <Nav.Link href="#" className="nav-link">
            Contact US
          </Nav.Link>
        </Nav>

        <div
          className="d-flex align-items-center"
          style={{ position: "relative", marginLeft: "auto" }}
        >
          <Button
            className="rounded-pill"
            style={{
              backgroundColor: "rgb(62, 160, 173)",
              width: "150px",
              marginRight: "10px",
            }}
          >
            Order Now
          </Button>

          <Link to="/Summary" style={{textDecoration:"none"}}>
          <i
            className="bi bi-basket2-fill"
            style={{
              color: "white",
              fontSize: "24px",
              backgroundColor: "rgb(107, 7, 107)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></i>

          </Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
