import React from 'react'
import { useTranslation } from 'react-i18next';
import s from './Products.module.css'
import cart from '../../assets/cart.svg'
 
const Products = () => {
  const {t} = useTranslation();
  return (
   <>
<h3 className={s.products}>{t('products')}</h3>

<div className={s.row}>
  <div className={s.column}>
    <div className={s.card}>
    <img src="https://cdn.vkuso.ru/uploads/111114_45fca0f54aab675daf57e09801c1c650_301021-123143-660x400.jpg" alt="" className={s.cutlets_img}/>
  <h4 className={s.cutlets}>{t('cotlety')}</h4>
      <button className={s.cart} onClick={ProductCounter} >
  <img src={cart} alt=""  className={s.cart_img}/>
  {t('add-cart')}
  </button>
    </div>
  </div>

  <div className={s.column}>
    <div className={s.card}>
    <img src="https://eda.cooking/wp-content/uploads/2021/10/mini-meatballs-for-freezing2.jpg" alt="" className={s.cutlets_img}/>
  <h4 className={s.cutlets}>{t('frika')}</h4>
      <button className={s.cart}>
  <img src={cart} alt="" className={s.cart_img} />
  {t('add-cart')}
  </button>
    </div>
  </div>
  
  <div className={s.column}>
    <div className={s.card}>
    <img src="https://i.lefood.menu/wp-content/uploads/w_images/2021/09/recept-4756-620x413.jpg" alt="" className={s.cutlets_img}/>
    <h4 className={s.cutlets}> {t('chuchvara')}</h4>

      <button className={s.cart}>
  <img src={cart} alt="" className={s.cart_img}/>
  {t('add-cart')}
  </button>
    </div>
  </div>
  
  <div className={s.column}>
    <div className={s.card}>
    <img src="https://pojrem.ru/img2/k-1198-00.jpg" alt="" className={s.cutlets_img}/>
    <h4 className={s.cutlets}> {t('pelmemi-stol')}</h4>
      <button className={s.cart}>
  <img src={cart} alt="" className={s.cart_img} />
  {t('add-cart')}
  </button>
    </div>
  </div>
  <div className={s.column}>
    <div className={s.card}>
    <img src="https://kstrip.ru/wp-content/uploads/2017/03/621811_foto-chuchvara.jpg" alt="" className={s.cutlets_img}/>
  <h4 className={s.cutlets}> {t('vostok')}</h4>
      <button className={s.cart}>
  <img src={cart} alt="" 
  className={s.cart_img}/>
  {t('add-cart')}
  </button>
    </div>
  </div>
  <div className={s.column}>
    <div className={s.card}>
    <img src="https://www.ermolino-produkty.ru/picts/articles/kak-slepit-vkusnie-pelmeni.jpg" alt="" className={s.cutlets_img}/>
  <h4 className={s.cutlets}> 
  {t('pelmemi-stol')}
  </h4>
      <button className={s.cart}>
  <img src={cart} alt=""
   className={s.cart_img} />
  {t('add-cart')}
  </button>
    </div>
  </div>
  <div className={s.column}>
    <div className={s.card}>

    <img src="https://e1.edimdoma.ru/data/posts/0002/5167/25167-ed4_wide.jpg?1656675307" alt="" className={s.cutlets_img}/>
  <h4 className={s.cutlets}>{t('musul')}</h4>
      <button className={s.cart}>
  <img src={cart} alt="" 
  className={s.cart_img} />
  {t('add-cart')}
  </button>
    </div>
  </div>
  <div className={s.column}>
    <div className={s.card}>
    <img 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz90omWu5a9Hkvsf4V01qFjnNigyLF3ZtONw&usqp=CAU" 
    alt="" 
    className={s.cutlets_img}/>
  <h4 className={s.cutlets}>
    {t("real")}
    </h4>

      <button 
      className={s.cart}>
    <img 
  src={cart} alt="" 
  className={s.cart_img} />
{t('add-cart')}
  </button>
    </div>
  </div>
</div>
   </>
  )
}

export default Products