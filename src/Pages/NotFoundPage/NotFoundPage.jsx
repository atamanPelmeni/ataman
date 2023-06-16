import React from 'react'
import { useTranslation } from 'react-i18next';
import s from './NotFound.module.css'
import { Link } from 'react-router-dom';


const NotFoundPage = () => {
const {t} = useTranslation();
  return (
    <>
      <div className={s.not}>
       {t("not-page")} 
       <Link to="/" className={s.home}>{t("home")}</Link>
    </div>
    </>
  )
}

export default NotFoundPage