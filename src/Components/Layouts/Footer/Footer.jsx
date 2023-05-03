import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Link,
    Router,
    Routes
  } from "react-router-dom";
import youtube from '../../../assets/youtube.svg'
import inst from '../../../assets/inst.svg'
import logo from '../../../assets/logo-footer.svg';
import s from './Footer.module.css'


const Footer = () => {
    const {t} = useTranslation();
  return ( 
    <>
    <footer className={s.footer}>
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

        <div className={s.third_column}>
    <p className={s.social}>{t("social")}</p>
    <a  
    className={s.inst}
href="https://www.instagram.com/ataman.ind/?igshid=YmMyMTA2M2Y%3D" 
        target='_blank'
        >    
        <img src={inst} alt="" className={s.inst} />
        </a>

        <a className={s.youtube} href="https://www.youtube.com/@ataman1142/videos"> 
        <img src={youtube} alt="" className={s.youtube}/>
        </a>
  
    <a href='mailto:atamankeyzhi@bk.ru'
        className={s.number}
        >atamankeyzhi@bk.ru</a>
        </div>
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