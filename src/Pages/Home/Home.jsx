import React from "react";
import { useTranslation } from "react-i18next";
import { Link, BrowserRouter as Router } from "react-router-dom";
import s from "./Home.module.css";
import vector from "../../assets/vector.svg";
import what from "../../assets/what.svg";
import insta from "../../assets/instagram.svg";
import email from "../../assets/email.svg";
import backYellow from "../../assets/Rectangle1.svg";
import backYellow2 from "../../assets/Rectangle2.svg";
import qrcode from "../../assets/qrcode.svg";
import whatPhone from "../../assets/what-phone.svg";
import instaPhone from "../../assets/insta-phone.svg";
import emailPhone from "../../assets/email-phone.svg";
import main from "../../assets/Rectangle1Main.svg";
import pelmeni from "../../assets/card.svg";
import dough from "../../assets/Rectangle16(1).svg";
import card from '../../assets/photo_2023-05-18_17-43-48.jpg'

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <img src={main} alt="Атаман" className={s.main} />
      <img src={backYellow2} alt="Замороженные продукты хорошоего качества" className={s.yellow} />
      <div className={s.main_block}>
        <h1 className={s.h1}>
          {t("home-page-frozen")}
          </h1>
        <div className={s.link_button}>
          <Link className={s.link} to="/products">
            {t("products")}
            <img src={vector} className={s.vector} alt="" />
          </Link>
        </div>

        <p className={s.ataman_phone}>
          {t("ataman-phone")}
          </p>
        <h2 className={s.contact}>{t("contact-us")}</h2>
      </div>
        <img src={pelmeni} 
        alt="" className={s.pelmeni_image} />
      <p className={s.ataman}>
        {t("ataman-text")}
        </p>
      <img src={dough} alt="тесто слоеное Атаман" className={s.dough} />
      <img src={backYellow} alt="" 
      className={s.back_yellow1} />
      <div className={s.main_box}>
        <div className={s.box_contact_main}>
          <div className={s.box_contact}>
            <img src={what} alt="" className={s.img_contact} />
            <img src={whatPhone} alt="" className={s.img_phone} />
 
            <a href="tel: 0551788146" className={s.number}>
              +996 551788146
            </a>
          </div>
          <div className={s.box_contact}>
            <img src={email} alt="" className={s.img_contact} />
            <img src={emailPhone} alt="" className={s.img_phone} />
            <a href="mailto:ataman.product01@gmail.com" className={s.number}>
            ataman.product01
            </a>
          </div>
          <div className={s.box_contact}>
            <img src={insta} alt="" className={s.img_contact} />
            <img src={instaPhone} alt="" className={s.img_phone} />
            <a
              href="https://www.instagram.com/ataman.ind/?igshid=YmMyMTA2M2Y%3D"
              className={s.number2}
              target="_blank"
            >
              https://instagram.com/atam...
            </a>
            <a
              href="https://www.instagram.com/ataman.ind/?igshid=YmMyMTA2M2Y%3D"
              className={s.number3}
              target="_blank"
            >
              https://instagram.
            </a>
          </div>
        </div>
        <img src={qrcode} alt="" className={s.qrcode} />
      </div>
<img src={card} alt="" className={s.card}/>


    </>
  );
};

export default Home;
