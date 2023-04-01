import React from "react";
import { Logo, Night,Lokatsa } from "../../assets/image/img";
import "./header.scss";
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <div className="header__left">
            <div className="header__logo">
              <img src={Logo} alt="image" />
            </div>
            <div className="header__list">
              <div className="header__item">О компании</div>
              <div className="header__item">Портфолио</div>
              <div className="header__item">Услуги</div>
              <div className="header__item">Контакты</div>
            </div>
          </div>
          <div className="header__right">
            <div className="header__icon">
              <img src={Night} img />
            </div>
            <div className="header__num">
              <p className="header__num__1">+998 90 777-77-77</p>
              <p className="header__num__2">chotatam@gmail.com</p>
            </div>
            <button className="header__btn">Заказать звонок</button>
          </div>
        </nav>
      </div>
    </header>
  );
}
