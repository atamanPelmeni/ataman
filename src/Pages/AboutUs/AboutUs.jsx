import React from 'react'
import { useTranslation } from 'react-i18next';
import s from './AboutUs.module.css'
import backYellow2 from '../../assets/Rectangle 16.svg';

const AboutUs = () => {
const {t} = useTranslation();
  return (
   <> 
 <h3 className={s.aboutUs}>{t('about-us')}</h3>
 <p className={s.manager}>{t('manager')}</p>
 <div className={s.director}>{t('director')}</div>
 <p className={s.director}>{t('director-what')}</p>
 <p className={s.mission}>{t('their-misson')}</p>
 <div className={s.we}>{t('we')}</div>
 <div className={s.we}>{t('they-live')}</div>
 <p className={s.live}>{t('they-live-text')}</p>
 <div className={s.we}>{t('leader')}</div>
 <p className={s.live}>{t('leader-text')}</p>
 <div className={s.we}>{t('implement')}</div>
 <p className={s.live}>{t('implement-text')}</p>
<img src={backYellow2} className={s.back_yellow2} alt="" />
   </>
  )
}

export default AboutUs;