import React from "react";
import "./Footer.scss";
import { Logo, Lokatsa, Tel, Insstgram, telegram, Facebook } from "../../assets/image/img";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__box">
          <img src={Logo} alt="" />
          <div className="footer__text1">
            <img src={Lokatsa} />
            <p className="footer__text2">
              Manzil: Toshkent shahri, Sergeli tumani, Navro’z ko’cha 3-uy.
              Mo’ljal: “ASIA AUTO” avtosalon ichki qismi
            </p>
          </div>
          <div className="footer__text3">
            <p className="footer__text3__1">
              <img src={Tel} />
              <p>+998 99 999 99 99</p>
            </p>
            <p className="footer__text3__1">
              <img src={Tel} />
              <p>+998 99 999 99 99</p>
            </p>
          </div>
          <div className="footer__img">
            <img src={telegram} />
            <img src={Facebook} />
            <img src={Insstgram} />
          </div>
        </div>
      </div>
    </footer>
  );
}
