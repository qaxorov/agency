import React from "react";
import "./Contact.scss";
import { Img1, Img2, Img3, Img4, Img5 } from "../../assets/image/img";

export default function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__box">
          <div className="contact__left">
            <h1 className="contact__title">
              Sizni bir finjon qahva ustida loyihangizni batafsil muhokama
              qilishga mamnuniyat ila taklif qilamiz.
            </h1>
            <form className="contact__form">
              <input
                type="text"
                placeholder="Ismingiz"
                className="contact__input"
              />
              <input
                type="text"
                placeholder="Telefon raqamingiz"
                className="contact__input"
              />
              <input
                type="text"
                placeholder="G'oyangiz xaqida qisqacha (Muhim emas)"
                className="contact__input"
              />
            </form>
            <div className="contact__left__bottom">
              <p className="contact__text1">
                Qanday xizmatlardan foydalanishni xoxlaysiz?
              </p>
              <div className="contact__begin">
                <ul className="contact__checkbox1">
                  <li className="contact__checkbox__item">
                    <input
                      type="checkbox"
                      className="contact__checkbox__check"
                      checked
                    />
                    <p className="contact__item__text">Backend</p>
                  </li>
                  <li className="contact__checkbox__item">
                    <input
                      type="checkbox"
                      className="contact__checkbox__check"
                      checked
                    />
                    <p className="contact__item__text">CRM ishlab chiqish</p>
                  </li>
                  <li className="contact__checkbox__item">
                    <input
                      type="checkbox"
                      className="contact__checkbox__check"
                      checked
                    />
                    <p className="contact__item__text">
                      Internet magazin ishlab chiqish
                    </p>
                  </li>
                  <li className="contact__checkbox__item">
                    <input
                      type="checkbox"
                      className="contact__checkbox__check"
                      checked
                    />
                    <p className="contact__item__text">Logotip va Brandbook</p>
                  </li>
                  <li className="contact__checkbox__item">
                    <input
                      type="checkbox"
                      className="contact__checkbox__check"
                      checked
                    />
                    <p className="contact__item__text">Portal ishlab chiqish</p>
                  </li>
                  <li className="contact__checkbox__item">
                    <input
                      type="checkbox"
                      className="contact__checkbox__check"
                      checked
                    />
                    <p className="contact__item__text">Veb dizayn</p>
                  </li>
                  <li className="contact__checkbox__item">
                    <input
                      type="checkbox"
                      className="contact__checkbox__check"
                      checked
                    />
                    <p className="contact__item__text">Mobilograf</p>
                  </li>
                </ul>

                <ul className="contact__checkbox2">
                  <li className="contact__checkbox__item">
                    <input
                      type="checkbox"
                      className="contact__checkbox__check"
                      checked
                    />
                    <p className="contact__item__text">Frontend</p>
                  </li>
                  <li className="contact__checkbox__item">
                    <input
                      type="checkbox"
                      className="contact__checkbox__check"
                      checked
                    />
                    <p className="contact__item__text">Grafik dizayn</p>
                  </li>
                  <li className="contact__checkbox__item">
                    <input
                      type="checkbox"
                      className="contact__checkbox__check"
                      checked
                    />
                    <p className="contact__item__text">Motion dizayn</p>
                  </li>
                  <li className="contact__checkbox__item">
                    <input
                      type="checkbox"
                      className="contact__checkbox__check"
                      checked
                    />
                    <p className="contact__item__text">
                      Mobil ilova ishlab chiqish
                    </p>
                  </li>
                  <li className="contact__checkbox__item">
                    <input
                      type="checkbox"
                      className="contact__checkbox__check"
                      checked
                    />
                    <p className="contact__item__text">
                      Veb sayt ishlab chiqish
                    </p>
                  </li>
                  <li className="contact__checkbox__item">
                    <input
                      type="checkbox"
                      className="contact__checkbox__check"
                      checked
                    />
                    <p className="contact__item__text">SMM dizayn</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="contact__rightt">
            <div className="contact__right">
              <h3 className="contact__right__title">NIMANI MA'QUL KO'RASIZ?</h3>
              <div className="contact__cards">
                <img src={Img1} alt="" />
                <img src={Img2} alt="" />
                <img src={Img3} alt="" />
                <img src={Img4} alt="" />
              </div>
            </div>
            <img src={Img5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
