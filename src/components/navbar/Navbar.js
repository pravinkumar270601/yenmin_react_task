import React from "react";
import "./navbar.css";
import { IoMdSearch } from "react-icons/io";
import { FaWallet } from "react-icons/fa";
import logo from "../../Assets/a1214b6642d7cc8365820e7eecd9b444.png";

const Navbar = () => {
  return (
    <div>
      <nav className="" style={{ height: "70px" }}>
        <div
          className="container-fluid d-flex"
          style={{ padding: "0px", height: "100%" }}
        >
          <div style={{ width: "30vw", padding: "5px" }}>
            <img src={logo} alt="" className="logo"  />
          </div>
          <div
            className="d-flex align-items-center "
            style={{
              width: "70vw",
              background: "linear-gradient(-90deg, #CB2E14, #6F13A2)",
              padding: "10px 5%",
            }}
          >
            <div className="serach-div d-flex align-items-center ">
              <input
                type="text"
                id="serach"
                placeholder="Search Ticket"
                style={{
                  padding: "6px 20px",
                  borderRadius: "25px",
                  outline: "none",
                  border: "none",
                  backgroundColor: "rgb(255,255,255,.6)",
                }}
              />
              <IoMdSearch className="icon" />
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            
              <div
                className="d-flex justify-content-between align-items-center "
                style={{ width: "100%" }}
              >
                <div className="nav-text">Home</div>
                <div className="nav-text">Events</div>
                <div className="d-flex align-items-center">
                  <div
                    className="nav-text"
                    style={{
                      padding: "6px 10PX",
                      borderRadius: "25px",
                      backgroundColor: "rgb(255,255,255,.5)",
                    }}
                  >
                    <FaWallet className="icon2" />
                    Connect Wallet
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
