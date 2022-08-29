import "./Header.scss";

import React from "react";
import carLogo from "../../Assets/images/carLogo.png";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  let navigate = useNavigate();

  return (
    <div className="header-container">
      <div className="header-left">
        <img className="header-logo" src={carLogo}  style={{ cursor: "pointer" }} onClick={() => navigate("/")}/>
      </div>
      <div className="header-center">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/transaction")}
        >
          TRANSACTION
        </div>
      </div>
      <div className="header-right">
        <div style={{ cursor: "pointer" }} onClick={() => navigate("/history")}>
          HISTORY
        </div>
      </div>
    </div>
  );
};
