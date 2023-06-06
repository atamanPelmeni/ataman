import React from "react";
import { useTranslation } from "react-i18next";
import s from "./Products.module.css";
import cart from "../../assets/cart.svg";
import kotlety from "../../assets/photo_2023-05-05_14-10-12.jpg";
import { Link, BrowserRouter as Router } from "react-router-dom";

const Products = () => {
  const { t } = useTranslation();
  return (
    <>
      <h3 className={s.products}>{t("products")}</h3>
      <div className={s.row}>
        <div className={s.column}>
          <div className={s.card}>
            <img src={kotlety} alt="" className={s.cutlets_img} />
            <h4 className={s.cutlets}>{t("cotlety")}</h4>

            <button className={s.cart}>
              <Link className={s.link} to="/order">
                <img src={cart} alt="" className={s.cart_img} />
                {t("order-text")}
              </Link>
            </button>
          </div>
        </div>
        <div className={s.column}>
          <div className={s.card}>
            <img
              src="https://eda.cooking/wp-content/uploads/2021/10/mini-meatballs-for-freezing2.jpg"
              alt=""
              className={s.cutlets_img}
            />
            <h4 className={s.cutlets}>
              {t("frika")}
              </h4>
            <button className={s.cart}>
              <Link className={s.link} to="/order">
                <img src={cart} alt="" 
                className={s.cart_img} />
                {t("order-text")}
              </Link>
            </button>
          </div>
        </div>
        <div className={s.column}>
          <div className={s.card}>
            <img
              src="https://i.lefood.menu/wp-content/uploads/w_images/2021/09/recept-4756-620x413.jpg"
              alt=""
              className={s.cutlets_img}
            />
            <h4 className={s.cutlets}> 
            {t("chuchvara")}
            </h4>

            <button className={s.cart}>
              <Link className={s.link} to="/order">
                <img src={cart} alt="" 
                className={s.cart_img} />
                {t("order-text")}
              </Link>
            </button>
          </div>
        </div>
        <div className={s.column}>
          <div className={s.card}>
            <img
              src="https://kstrip.ru/wp-content/uploads/2017/03/621811_foto-chuchvara.jpg"
              alt=""
              className={s.cutlets_img}
            />
            <h4 className={s.cutlets}>
               {t("vostok")}
               </h4>
            <button className={s.cart}>
              <Link className={s.link} to="/order">
                <img src={cart} alt="" className={s.cart_img} />
                {t("order-text")}
              </Link>
            </button>
          </div>
        </div>
        <div className={s.column}>
          <div className={s.card}>
            <img
              src="https://www.ermolino-produkty.ru/picts/articles/kak-slepit-vkusnie-pelmeni.jpg"
              alt=""
              className={s.cutlets_img}
            />
            <h4 className={s.cutlets}>
              {t("pelmemi-stol")}
              </h4>
            <button className={s.cart}>
              <Link className={s.link} to="/order">
                <img src={cart} alt="" className={s.cart_img} />
                {t("order-text")}
              </Link>
            </button>
          </div>
        </div>
        <div className={s.column}>
          <div className={s.card}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz90omWu5a9Hkvsf4V01qFjnNigyLF3ZtONw&usqp=CAU"
              alt=""
              className={s.cutlets_img}
            />
            <h4 className={s.cutlets}>{t("real")}</h4>

            <button className={s.cart}>
              <Link className={s.link} to="/order">
                <img src={cart} alt="" className={s.cart_img} />
                {t("order-text")}
              </Link>
            </button>
          </div>
        </div>

        <div className={s.column}>
          <div className={s.card}>
            <img
              src="https://buljon.ru/files/styles/recipe_large/public/images/recipes/2020-03/VPXFWTrBozawMXPIBDayvAHo1OZegS_hlUHteDnY9D8.jpg?itok=z-clpIcF"
              alt=""
              className={s.cutlets_img}
            />
            <h4 className={s.cutlets}>{t("dough")}</h4>

            <button className={s.cart}>
              <Link className={s.link} to="/order">
                <img src={cart} alt="" className={s.cart_img} />
                {t("order-text")}
              </Link>
            </button>
          </div>
        </div>

        <div className={s.column}>
          <div className={s.card}>
            <img
              src="https://www.gastronom.ru/binfiles/images/20161124/bad04f66.jpg"
              alt=""
              className={s.cutlets_img}
            />
            <h4 className={s.cutlets}>{t("manty-meat")}</h4>

            <button className={s.cart}>
              <Link className={s.link} to="/order">
                <img src={cart} alt="" className={s.cart_img} />
                {t("order-text")}
              </Link>
            </button>
          </div>
        </div>

        <div className={s.column}>
          <div className={s.card}>
            <img
              src="https://cdn.vkuso.ru/uploads/73958_45f331cf2324ed0acde6e02d4b4cc843_200419-053514.jpg"
              alt=""
              className={s.cutlets_img}
            />
            <h4 className={s.cutlets}>
              {t("manty-pumpkin")}
              </h4>

            <button className={s.cart}>
              <Link className={s.link} to="/order">
                <img src={cart} alt="" className={s.cart_img} />
                {t("order-text")}
              </Link>
            </button>
          </div>
        </div>

        <div className={s.column}>
          <div className={s.card}>
            <img
              src="https://www.photorecept.ru/wp-content/uploads/2019/07/9-12-1300x864.jpg"
              alt=""
              className={s.cutlets_img}
            />
            <h4 className={s.cutlets}>{t("vareniki")}</h4>

            <button className={s.cart}>
              <Link className={s.link} to="/order">
                <img src={cart} alt="" className={s.cart_img} />
                {t("order-text")}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
