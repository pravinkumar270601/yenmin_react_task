import React from "react";
import ticketBanner from "../Assets/7ce18bd4cf8f86daee202cadfc0970ab.png";
import "./Page1.css";
import { CiShare2 } from "react-icons/ci";

const Page1 = () => {
  return (
    <div className="Page1">
      <div className="page1-left">
        <img src={ticketBanner} alt="" style={{ width: "100%",height:"380px" }} />
      </div>
      <div className="page1-right">
        <div className="golden-ticket-div">
          <h3>Golden Ticket</h3>
          <div>
            <CiShare2
              style={{ color: "var(--secnd-color)", fontSize: "19px" }}
            />
            <span
              style={{
                color: "var(--secnd-color)",
                fontWeight: "600",
                marginLeft: "5px",
              }}
            >
              Share
            </span>
          </div>
        </div>
        <div className="price-div" style={{ height: "250px" }}>
          <p className="p1">Price</p>
          <p className="p2">2.45 CEOL</p>

          <div className="d-flex justify-content-between mt-2">
            <div
              style={{
                background: "white",
                padding: "10px",
                width: "45%",
                borderRadius: "15px",
              }}
            >
              <p className="p1">Available Tickets</p>
              <p className="p3">290</p>
            </div>
            <div
              style={{
                background: "white",
                padding: "10px",
                width: "45%",
                borderRadius: "15px",
              }}
            >
              <p className="p1">Sold Tickets</p>
              <p className="p3">10</p>
            </div>
          </div>
          <div className="mt-2">
            <select
              style={{
                borderRadius: "5px",
                outline: "none",
                border: "none",
                padding: "10px",
              }}
            >
              <option value="option1"> 1</option>
            </select>
            <span
              style={{
                padding: "10px",
                borderRadius: "20px",
                background: "linear-gradient(-90deg, #CB2E14, #6F13A2)",
                marginLeft: "10px",
                color: "white",
              }}
            >
              Connect Wallet
            </span>
          </div>
          <div className="mt-2"> Note <span className="page1-add-link">Please add</span> your email address to receive ticket receipts </div>
        </div>
        <div className="about-dropdown">

        <select
              style={{
                borderRadius: "5px",
                outline: "none",
                border: "none",
                padding: "10px",
                width:"100%",
                background:"var(--primary-color)"
              }}
            >
              <option value="option1">About</option>
            </select>
            <div className="mt-2" style={{borderRadius: "5px",padding:"6px",width:"100%",background:"var(--primary-color)"}}>
            Lorem ipsum dolor sit amet, consecksmkmkmd re et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 

            </div>

        </div>
      </div>
    </div>
  );
};

export default Page1;
