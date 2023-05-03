import React from 'react'
import { useTranslation } from 'react-i18next';
import certificate from '../../assets/certificate.svg' 
import backYellow from '../../assets/Rectangle1.svg';
import Rectangle from '../../assets/Rectangle 16.svg'
import certificate2 from '../../assets/certificate2.svg'
import certificate3 from '../../assets/certificate3.svg'
import certificate4 from '../../assets/certificate4.svg'
import certificate5 from '../../assets/certificate5.svg'
import certificate6 from '../../assets/certificate6.svg'
import certificate7 from '../../assets/certificate7.svg'
import s from './Certificate.module.css'

const Certificate = () => {
const {t} = useTranslation();

  return (
  <>          
  {/* <h3 className={s.certificate}>{t('certificates')}</h3> */}
  <div className={s.certificate_img}>
  <img src={certificate} alt="" />
  </div>

  <div className={s.box_certificate}>
      <img src={certificate2} alt="" className={s.img_right} />
  <img src={certificate3} alt="" className={s.img_left} />
  </div>
<div className={s.box_certificate}>
    <img src={certificate4} alt="" className={s.img_right}/>
  <img src={certificate5} alt="" className={s.img_left}  />
</div>

<div className={s.box_certificate}>
    <img src={certificate6} alt="" className={s.img_right}/>
  <img src={certificate7} alt="" className={s.img_left}  />
</div>

  <img src={backYellow} alt="" className={s.yellow}/>
  <img src={Rectangle} alt="" className={s.rectan} />
  </>
  )
}

export default Certificate