import React, {Suspense} from "react";
import {
  Routes,  
  Route,
  Form
} from "react-router-dom";
import Header from "./Components/Layouts/Header/Header";
import Footer from './Components/Layouts/Footer/Footer.jsx';
import HomePage  from './Pages/Home/Home.jsx';
import ContactsPage from './Pages/Contacts/Contacts.jsx';
import ProductsPage from './Pages/Products/Products.jsx';
import CertificatePage from './Pages/Certificate/Certificate.jsx';
import AboutUsPage from './Pages/AboutUs/AboutUs.jsx'
import './index.css';
import FormOrders from "./Pages/FormOrders/FormOrders";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import s from './Components/Layouts/Header/Header.module.css';
import homeStyles from './Components/Layouts/Header/Header-Home.module.css'; 
 

function App() {
  return (
    <Suspense fallback={<div className='loading'>Loading...</div>}>
     <Header className={s.header}/> 
     <Routes>
        <Route exact path="/" element={<div className={homeStyles.header}>
            <HomePage />
          </div>} />
        <Route path="/products" element={ 
        <div className={s.header}>
          <ProductsPage />
          </div>} />
        <Route path="/certificates" element={
          <div className={s.header}>
            <CertificatePage/>
            </div>} />
        <Route path="/about-us" element={
        <div className={s.header}>
        <AboutUsPage />
        </div>}/>
        <Route path="/contacts" element={ 
           <div className={s.header}>
            <ContactsPage />
            </div>} />
        <Route path="/order" element={  
        <div className={s.header}>
          <FormOrders/>
        </div>} />
        <Route path="*" element={  
        <div className={s.header}>
          <NotFoundPage />
          </div>}/>
    </Routes>
    <Footer />
  </Suspense>
 
  );
}

export default App;
