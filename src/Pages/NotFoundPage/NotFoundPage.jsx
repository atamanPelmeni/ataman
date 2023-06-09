import React from 'react'
import { useTranslation } from 'react-i18next';
import s from './NotFound.module.css'
import { Link } from 'react-router-dom';


const NotFoundPage = () => {
const {t} = useTranslation();
  return (
    <>
    <img src="https://banketof.ru/articles/wp-content/uploads/2020/04/screenshot_6-2.jpg" 
    alt="пельмени" className={s.pelmeni} />
      <div className={s.not}>
       {t("not-page")} 
       <Link to="/" className={s.home}>{t("home")}</Link>
    </div>
    </>
  )
}

export default NotFoundPage