import React from "react";
import "./Resources.css";
import Navbar from "../../components/Navbar/Navbar";
import fishes from "../../data/fishes.json";

const Resources = () => {
  return (
    <div className="onb-container">
      <Navbar />
      <div className="firstPara"></div>
      <div className="links">
        <div className="LoadTank">
          <h2>Resources</h2>
        </div>
      </div>
      <ul>
        <li
          style={
            {
              marginTop: "10px"
            }
          }
        >
          <a
            href="https://www.agrifarming.in/fish-farming"
            style={{
              textDecoration: "underline",
              fontSize: "25px"
            }}
          >
            Fish Farming guide for beginners. Why you should consider fish
            farming.
          </a>
        </li>
        <li
          style={
            {
              marginTop: "10px"
            }
          }
        >
          <a
            href="https://www.agrifarming.in/fish-farming"
            style={{
              textDecoration: "underline",
              fontSize: "25px"
            }}
          >
            Fish Farming for Beginners
          </a>
        </li>
        <li
          style={
            {
              marginTop: "10px"
            }
          }
        >
          <a
            href="https://dahd.nic.in/related-links/centrally-sponsored-scheme-development-inland-fisheries-and-aquaculture"
            style={{
              textDecoration: "underline",
              fontSize: "25px"
            }}
          >
            Subsidy Resoures{" "}
          </a>
        </li>
      </ul>
      {/* <div className="LoadTank">
          <img src={user} alt="" />
          <p>New to fish farming?</p>
          <a href="https://en.wikipedia.org/wiki/Fish_farming">
            Check out details here
          </a>
        </div> */}
    </div>
  );
};

export default Resources;
