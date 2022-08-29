import "./Layout.scss";

import { Footer } from "../Component/Footer/Footer";
import { Header } from "../Component/Header/Header";
import React from "react";

export const Layout = (props) => {
  return (
    <div className="layout-wrapper">
      <div className="item-header">
        <Header />
      </div>
      <div className="item-content">{props.children}</div>

      <div className="item-footer">
        <Footer />
      </div>
    </div>
  );
};
