import React, { useState, useEffect } from 'react';
import {
  Link
} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18n from '../../../Language/18n';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from '../../../assets/logo.svg';
import logoPhone from '../../../assets/logo-phone.svg'
import s from './Header.module.css';

const Header = () => {
 
  const [header, setHeader] = useState(false);
 useEffect(() => {
    const body = document.querySelector('body');
    if (header) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [header]);
const {t} = useTranslation();
const changeLanguage = (language) => {
    i18n.changeLanguage(language)
}
  return (
  <>
     <header className={s.header}>
      <Link to="/">
        <img src={logo} alt="" className={s.logo}/>
        <img src={logoPhone} alt="" className={s.logoPhone}/>
        </Link>   
        <ul
          className={
                header ? [s.menu, s.active].join(' ') : [s.menu]}> 
            <li className={s.li_links}>
                     <Link 
                className={s.links} 
                to='/'
                >
                    {t('home')}
                    </Link> 
              
               
            </li>
            <li className={s.li_links}>
                <Link 
                className={s.links} 
                to='/products'>
                    {t('products')}
                    </Link>
            </li>
            <li className={s.li_links}>
                <Link 
                className={s.links} 
                to='certificates'>   
                 {t('certificates')}
                </Link>
                </li>
            <li className={s.li_links}>

                <Link 
                to='about-us' 
                className={s.links}>
                    {t('about-us')}
                    </Link>
            </li>
            <li className={s.li_links}>
   
                <Link 
                className={s.links} 
                to='contacts'>
                    {t('contacts')}
                    </Link>
            </li>
           </ul> 
           <div onClick={() => setHeader(!header)} className={s.mobile_btn}>
            {header ? <AiOutlineClose size={30} className={s.header_icon} /> : <AiOutlineMenu size={30} className={s.header_icon} />}
             
            </div>
      
    </header>
    <div className={s.animation}>  
     
              <div className={s.language}>
                 <div 
                 onClick={() => changeLanguage('en')} className={s.en}>
                    EN
                    </div>
               <div 
               onClick={() => changeLanguage('ru')}     className={s.ru}>
               RU
               </div>
               </div>
               </div>
        </>    
  )
}

export default Header