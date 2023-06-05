import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Link,
  } from "react-router-dom";
import youtube from '../../../assets/youtube.svg'
import inst from '../../../assets/inst.svg'
import logo from '../../../assets/logo-footer.svg';
import what from '../../../assets/what.svg'
import insta from '../../../assets/instagram.svg';
import email from '../../../assets/email.svg';
import qrcode from '../../../assets/qrcode.svg';
import whatPhone from '../../../assets/what-phone.svg'
import instaPhone from '../../../assets/insta-phone.svg'
import emailPhone from '../../../assets/email-phone.svg';
import s from './Footer.module.css'


const Footer = () => {
    const {t} = useTranslation();
  return ( 
    <>
    <footer className={s.footer1}>
      <div className={s.footer}>

      <div className={s.first_column}> 
        <img src={logo} alt="" />
            <p className={s.ataman}> ATAMAN.KG</p> 
            </div>

         <div className={s.second_column}>
      <p className={s.nav}>
            {t("navigation")}   
      </p>
        <ul className={s.links}> 
          <li>
                 <Link to='/'  className={s.social}>{t("home")} </Link>     
            </li>
            <li>
            <Link to='/products' className={s.social}>
              {t("products")}
              </Link>   
            </li>
            <li>
            <Link to='/about-us'  className={s.social}>
              {t("about-us")}
              </Link>   
            </li>
            <li>
            <Link to='/contacts'  className={s.social}>
              {t("contacts")}
              </Link>
            </li>
        </ul>
        </div>

<div className={s.box_third_box}>
        <div className={s.third_column}>
    <p className={s.social}>{t("social")}</p>
  <img src='https://cdn-icons-png.flaticon.com/512/1384/1384060.png' alt="" className={s.youtube_image}/> 
        <a className={s.youtube} href="https://www.youtube.com/@ataman1142/videos"> 
      YouTube
        </a>
             <div className={s.box_contact}>
 <img src={what} alt="" className={s.img_contact} />
        <img src={whatPhone} alt="" className={s.img_phone} />
 
        <a 
        href="tel: 0551784146" 
        className={s.number}
        >+996 551 78 41 46</a>
       </div>
       <div className={s.box_contact}>
        <img src={email} alt="" className={s.img_contact}/>
        <img src={emailPhone} alt="" className={s.img_phone} />
        <a href='mailto:atamankeyzhi@bk.ru'
        className={s.number}
        >atamankeyzhi@bk.ru</a>
       </div> 
       <div className={s.box_contact}>
        <img src={insta} alt="" className={s.img_contact} />
        <img src={instaPhone} alt="" className={s.img_phone} />
        <a 
href="https://www.instagram.com/ataman.ind/?igshid=YmMyMTA2M2Y%3D" 
        className={s.number2}
        target='_blank'
        >https://instagram.</a>
          <a 
href="https://www.instagram.com/ataman.ind/?igshid=YmMyMTA2M2Y%3D" 
        className={s.number3}
        target='_blank'
        >https://instagram.</a>
       </div>
       </div>

        </div>

      </div>
      <div>
      </div>
      <img src={qrcode} alt="" className={s.qrcode} />
    </footer>

   
   <footer className={s.footer2}>
   <div className={s.first_column2}> 
        <img src={logo} alt="" className={s.logo}/>
            <p className={s.ataman}> ATAMAN.KG</p> 
            </div>

            <div className={s.first_column2}> 
<p className={s.nav}>
            {t("navigation")}   
            </p>
        <ul className={s.links}> 
          <li>
                 <Link to='/'  className={s.social}>{t("home")} </Link>    <Link to='/products' className={s.social}>
              {t("products")}
              </Link>  <Link to='/about-us'  className={s.social}>
              {t("about-us")}
              </Link>      <Link to='/contacts'  className={s.social}>
              {t("contacts")}
              </Link>
            </li>
        </ul>
        </div>

        <div className={s.first_column2}>
    <p className={s.social}>{t("social")}</p>
    <div>

      <a href="https://www.instagram.com/ataman.ind/?igshid=YmMyMTA2M2Y%3D"> 
    <img src={inst} alt="" className={s.inst} /></a>

       <a target='_blank' 
href="https://www.youtube.com/@ataman1142/videos"><img src={youtube} alt="" className={s.youtube}/></a> 
    </div>
    <a href='mailto:atamankeyzhi@bk.ru'
        className={s.number}
        >atamankeyzhi@bk.ru</a>
        </div>
   </footer>
   </>
  )
}

export default Footer