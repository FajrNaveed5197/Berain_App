import React from "react";
import "./App.css";
import Summary from "./components/Summary";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Mosque from "./components/Mosque";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

        <Route path="/" element={<Home />} />

          <Route path="/Home" element={<Home />} />

          <Route path="/Mosque" element={<Mosque />} />

          <Route path="/Summary" element={<Summary />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
