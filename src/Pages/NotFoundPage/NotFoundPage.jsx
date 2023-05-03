import React from 'react'
import { useTranslation } from 'react-i18next';


const NotFoundPage = () => {
const {t} = useTranslation();

  return (
    <div>
       {t("not-page")} 
       <a href="/">Home</a>
    </div>
  )
}

export default NotFoundPage