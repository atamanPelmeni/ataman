import React from 'react';
import { useTranslation } from 'react-i18next';
import location from '../../assets/Vector-location.png';
import phone from '../../assets/Vector-phone.png';
import back from '../../assets/Rectangle12.svg';
import s from './Contacts.module.css';

const Contacts = () => {
const {t} = useTranslation();
  return (
    <>
      <h2 className={s.contact}>                   
       {t('contacts')}
</h2>
    <div className={s.box}>
       <ul className={s.first}>
      <li className={s.li1}>
        ОсОО “ АТАМАН KG “
        </li>
      <li className={s.li}>
        {t('kyrgysztan')}
        </li>
      <li className={s.li}>
        {t('bishkek')}
        </li>
      <li className={s.li}>
        {t('street')} 
        <img src={location} alt="" />
        </li>
    </ul>

    <ul className={s.second}>
      <li className={s.li}>
        {t('our-contacts')}
        </li>
      <li className={s.li}>
        <img src={phone} alt="" />
        <a href="tel: +996 999 87 00 00"
         className={s.num}>
        +996 999 87 00 00
        </a>
        </li>
      <li className={s.li}>
      <img src={phone} alt="" />
      <a href="tel:+996 551 78 41 46"
      className={s.num}>
          +996 551 78 41 46
        </a>
        </li>
        <li className={s.li}>
      <img src={phone} alt="" />
      <a href="tel:+996 999 519 010"
      className={s.num}>
          +996 999 519 010
        </a>
        </li>
        <li className={s.li}>
      <img src={phone} alt="" />
      <a href="tel:++996 553 177 773"
      className={s.num}>
          +996 553 177 773
        </a>
        </li>
      <li className={s.li}>
         <a href='mailto:atamankeyzhi@bk.ru'
        className={s.li}
        >atamankeyzhi@bk.ru</a> 
         </li>
    </ul> 
    </div>
 
  <img src={back} alt="" className={s.back} />

  <div className={s.box2}>
       <ul className={s.first2}>
      <li className={s.ataman}>
        ОсОО “ АТАМАН KG “
        </li>
      <li className={s.li2}>
        {t('kyrgysztan')}
        </li>
      <li className={s.li2}>
        {t('bishkek')}
        </li>
      <li className={s.li2}>
        {t('street')} 
        <img src={location} alt="" />
        </li>
    </ul>

    <ul className={s.second2}>
      <li className={s.li2}>
        {t('our-contacts')}
        </li>
      <li className={s.li2}>
        <img src={phone} alt="" />
        <a href="tel: +996 999 51 90 10"
         className={s.num2}>
        +996 999 51 90 10
        </a>
        </li>
      <li className={s.li2}>
      <img src={phone} alt="" />
      <a href="tel:+996 551 78 41 46"
      className={s.num2}>
          +996 551 78 41 46
        </a>
        </li>
      <li className={s.li2}>
         <a href='mailto:atamankeyzhi@bk.ru'
        className={s.li2}
        >atamankeyzhi@bk.ru</a> 
         </li>
    </ul> 
    </div>
    </>
  )
}

export default Contacts