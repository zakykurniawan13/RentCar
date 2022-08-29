import "./Home.scss"

import { Layout } from "../../Layout/Layout";
import React from "react";
import contentLogo from "../../Assets/images/carLogoCenter.png";

export const Home = () => {
  return (
    <Layout>
      <div className="home-container">
        <div className="home-container-left">
          <img className="content-logo" src={contentLogo} />
        </div>
        <div className="home-container-right">
          <div className="content-profile">
            Jack Car Rent adalah perusahaan yang bergerak di bidang jasa
            penyewaan mobil, berdiri sejak tahun 2010 dan dipimpin oleh Fahmi,
            Bima dan Zaky.
          </div>
        </div>
      </div>
    </Layout>
  );
};
