import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link, BrowserRouter as Router } from "react-router-dom";
import yellow from '../../assets/Ellipse1.svg';
import pelmeni from '../../assets/main-pelmeni.svg'
import circle from '../../assets/circle-pelmeni.png'
import s from './Home.module.css';
import vector from '../../assets/vector.svg';
import what from '../../assets/what.svg'
import insta from '../../assets/instagram.svg';
import email from '../../assets/email.svg';
import backYellow from '../../assets/Rectangle1.svg';
import backYellow2 from '../../assets/Rectangle2.svg';
import qrcode from '../../assets/qrcode.svg';
import Loader from '../../Loader/Loader.jsx';
import whatPhone from '../../assets/what-phone.svg'
import instaPhone from '../../assets/insta-phone.svg'
import emailPhone from '../../assets/email-phone.svg'

const Home = () => {
const {t} = useTranslation();

  return (
  <> 
  <img src={yellow} alt="" className={s.yellow}/>
  <img src={pelmeni} alt="" className={s.pelmeni}/>
<img src={circle} alt="" className={s.circle}/>
  <div className={s.main_block}>
    <h1 className={s.h1}>{t("home-page-frozen")}</h1>
{/* <p className={s.best}>{t("best-friends")}</p> */}
          <div className={s.link_button}>   
              <Link   
               className={s.link}   
                to='/products'>
                    {t('products')}
                    <img src={vector} 
                    className={s.vector}
                    alt="" />
                    </Link>
                   </div>
          <p className={s.ataman}>{t("ataman-text")}</p>
          <p className={s.ataman_phone}>{t("ataman-phone")}</p>
          <h2 className={s.contact}>{t("contact-us")}</h2>
          <div className={s.main_box}>
            <div> 
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
        >https://instagram.com/atam...</a>
          <a 
href="https://www.instagram.com/ataman.ind/?igshid=YmMyMTA2M2Y%3D" 
        className={s.number3}
        target='_blank'
        >https://instagram.</a>
       </div>
          </div> 
           <img src={qrcode} alt="" className={s.qrcode} />
          </div>       
           </div>
        
<img src={backYellow} alt="" className={s.back_yellow1} />
<img src={backYellow2} alt="" className={s.back_yellow2} />
  </>
  )
}

export default Home