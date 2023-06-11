import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import s from "./Products.module.css";
import cart from "../../assets/cart.svg";
import kotlety from "../../assets/photo_2023-05-05_14-10-12.jpg";
import { Link, BrowserRouter as Router } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://13.53.133.130/email/product/api/")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const { t } = useTranslation();

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

// import React, { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import s from "./Products.module.css";
// import cart from "../../assets/cart.svg";
// import kotlety from "../../assets/photo_2023-05-05_14-10-12.jpg";
// import { Link, BrowserRouter as Router } from "react-router-dom";

// const Products = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("http://13.53.133.130/email/product/api/")
//       .then((response) => response.json())
//       .then((data) => setProducts(data));
//   });
//   const { t } = useTranslation();
//   return (
//     <>
  
//       <h3 className={s.products}>{t("products")}</h3>
//      <div className={s.row}>
//         <div className={s.column}>
//           <div className={s.card}>
//             {products.map((product) => (
//               <div key={product.id}>
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className={s.cutlets_img}
//                 />
//                 <h3 className={s.cutlets}>
//                   {product.name}
//                 </h3>
//                 <button className={s.cart}>
//                   <Link className={s.link} to="/order">
//                     <img src={cart} alt="" 
//                     className={s.cart_img} />
//                     {t("order-text")}
//                   </Link>
//                 </button>
//               </div>
//             ))}
//           </div>
          
//         </div>
//         </div>


     
//     </>
//   );
// };

// export default Products;
