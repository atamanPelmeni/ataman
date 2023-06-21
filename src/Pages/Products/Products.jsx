import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import s from "./Products.module.css";
import cart from "../../assets/cart.svg";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Loader } from "../../Components/loader/Loader";
import sl from '../../Components/loader/Loader.module.css'

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true); // Устанавливаем состояние загрузки перед началом запроса

    fetch("http://13.53.133.130/email/product/api/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false); // Устанавливаем состояние загрузки как завершенное после успешного получения данных
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError(true); // Устанавливаем состояние ошибки в случае неудачного запроса
        setLoading(false); // Устанавливаем состояние загрузки как завершенное после ошибки
      });
  }, []);

  const { t } = useTranslation();

  if (loading) {
    return <Loader />; // Показываем компонент Loader, если данные еще загружаются
  }

  if (error) {
    return <div className={sl.sorry}>{t('sorry')}</div>; // Показываем сообщение об ошибке, если не удалось получить данные
  }

  return (
    <>
      <h3 className={s.products}>{t("products")}</h3>
      <div className={s.grid}>
        {products.map((product) => (
          <div className={s.card} key={product.id}>
            <img src={product.image} alt={product.name} className={s.cutlets_img} />
            <h3 className={s.cutlets}>{product.name}</h3>
            <button className={s.cart}>
              <Link className={s.link} to="/order">
                <img src={cart} alt="" className={s.cart_img} />
                {t("order-text")}
              </Link>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
