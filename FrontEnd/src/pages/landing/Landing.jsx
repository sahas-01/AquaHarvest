import React from "react";
import LandingImg from "../../images/background.png";
import "./landing.css";
import { Link, useNavigate } from "react-router-dom";
export default function Landing() {
  return (
    <div className="container">
      <h2 className="h2">Marine Farms</h2>
      <div className="section2">
        <div className="buyer-section">
          <Link to="/marketplace">
            Buy Fresh Marine Produce
            <br></br>from Farmers near you✨
          </Link>
          <Link to="/marketplace">
            <button className="button">
              <h3 className="h3">Visit Marketplace</h3>
            </button>
          </Link>
        </div>
        <div className="farmer-section">
          <div>Start your Marine Fish Farm Journey!</div>
          <Link to="/signin">
            <button className="button">
              <h3 className="h3">Getting Started</h3>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
