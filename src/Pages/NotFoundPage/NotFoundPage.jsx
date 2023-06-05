import React from 'react'
import { useTranslation } from 'react-i18next';
import s from './NotFound.module.css'


const NotFoundPage = () => {
const {t} = useTranslation();
  return (
    <>
    <img src="https://banketof.ru/articles/wp-content/uploads/2020/04/screenshot_6-2.jpg" alt="" className={s.pelmeni} />
      <div className={s.not}>
       {t("not-page")} 
       <a href="/" className={s.home}>{t("home")} </a>
    </div>
    </>
  )
}

export default NotFoundPage