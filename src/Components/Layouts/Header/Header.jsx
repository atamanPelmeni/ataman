import React, {useState, useEffect, useRef}from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18n from '../../../Language/18n';

import logo from '../../../assets/logo.svg';
import basket from '../../../assets/basket.svg';
import s from './Header.module.css';


const Header = () => {
const [isActive, setActive] = useState(false);
const handleClick = () => {
  setActive(current => !current)
}

const {t} = useTranslation();
const changeLanguage = (language) => {
    i18n.changeLanguage(language)
}
  return (
  <>
    <header>
      <Link to="/">
        <img src={logo} alt="" className={s.logo}/>
        </Link>  
        <ul className={s.nav_links}> 
            <li 
            style={{
                  border: isActive ? '1px solid #FFFFFF' : '',
                  padding: isActive ? '10px': '',
                  position: isActive ? 'absolute': '',
                  left: isActive ? '51%': '',
                  top: isActive ? '8%': '',
                }}
                onClick={handleClick}
                >
                 <Link 
                className={s.links} 
                to='/'
                >
                    {t('home')}
                    </Link>
            </li>
            <li>
                <Link 
                
                className={s.links} 
                to='/products'>
                    {t('products')}
                    </Link>
            </li>
            <li>
                <Link 
                 
                className={s.links} 
                to='certificates'>   
                 {t('certificates')}
                </Link>
                </li>
            <li>
                <Link 
                 
                to='about-us' 
                className={s.links}>
                    {t('about-us')}
                    </Link>
            </li>
            <li>
                <Link 
                 
                className={s.links} 
                to='contacts'>
                    {t('contacts')}
                    </Link>
            </li>
           </ul>
    
             
 
    </header>
    <div className={s.link_basket}>
       <Link to="basket">
                <img src={basket} alt="" className={s.basket} />
                </Link>
    </div>
     
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
        </>    

  )
}

export default Header