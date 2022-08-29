import "./Transaction.scss";

import { Layout } from "../../Layout/Layout";
import React from "react";
import avanza from "../../Assets/images/carLogo.png";
import innova from "../../Assets/images/innovareborn.png";
import { useNavigate } from "react-router-dom";

export const Transaction = () => {
  let navigate = useNavigate();

  const handleBtnAdd = () => {
    navigate("/loan");
  };

  const handleWrapper = () => {
    navigate("/return");
  };
  return (
    <Layout>
      <div className="transaction-container">
        <div className="transaction-btn-wrapper">
          <div className="transaction-btn" onClick={handleBtnAdd}>Add Transaction</div>
        </div>
        <div className="transaction-wrapper" onClick={handleWrapper}>
          <div className="transaction-car-logo">
            <img className="car-logo" src={avanza} />
          </div>

          <div className="transaction-desc-wrapper">
            <div className="transaction-desc">AVANZA</div>
            <div className="transaction-desc">NAMA</div>
            <div className="transaction-desc">ALAMAT</div>
            <div className="transaction-desc">NO HP</div>
            <div className="transaction-desc">NP KTP</div>
            <div className="transaction-desc">NAMA DRIVER</div>
            <div className="transaction-desc">DURASI SEWA</div>
          </div>
        </div>

        <div className="transaction-wrapper">
          <div className="transaction-car-logo">
            <img className="car-logo" src={innova} />
          </div>

          <div className="transaction-desc-wrapper">
            <div className="transaction-desc">INNOVA</div>
            <div className="transaction-desc">NAMA</div>
            <div className="transaction-desc">ALAMAT</div>
            <div className="transaction-desc">NO HP</div>
            <div className="transaction-desc">NP KTP</div>
            <div className="transaction-desc">NAMA DRIVER</div>
            <div className="transaction-desc">DURASI SEWA</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
