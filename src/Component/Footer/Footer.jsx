import "./Footer.scss";

import React from "react";
import mailLogo from "../../Assets/images/mail.png";
import phoneLogo from "../../Assets/images/phone.png";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="footer-contact">Contact</div>
        <div className="footer-text-wrapper">
          <div>
            <img className="footer-mail" src={mailLogo} />
          </div>
          <div className="footer-email">jackcarrent@hotmail.com</div>
        </div>
        <div className="footer-text-wrapper">
          <div>
            <img className="footer-phone" src={phoneLogo} />
          </div>
          <div className="footer-phoneNumber">083131331</div>
        </div>
      </div>
      <div className="footer-right">
        <div>ADDRESS</div>
        <div>
          Kirana Boutique Office, Jl. Kirana Avenue No.1 - 2, Klp. Gading Tim.,
          Kec. Klp. Gading, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14240
        </div>
      </div>
    </div>
  );
};
