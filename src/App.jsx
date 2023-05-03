import React, {Suspense} from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import Header from "./Components/Layouts/Header/Header";
import Footer from './Components/Layouts/Footer/Footer.jsx';
import HomePage  from './Pages/Home/Home.jsx';
import ContactsPage from './Pages/Contacts/Contacts.jsx';
import ProductsPage from './Pages/Products/Products.jsx';
import CertificatePage from './Pages/Certificate/Certificate.jsx';
import AboutUsPage from './Pages/AboutUs/AboutUs.jsx'
import './index.css';
import BasketPage from './Pages/Basket/Basket.jsx';
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
     <Header /> 
    
     <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/certificates" element={<CertificatePage/>} />
        <Route path="/about-us" element={<AboutUsPage/>}/>
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="*" element={<NotFoundPage />}/>
    </Routes>
    <Footer />
  </Suspense>
 
  );
}

export default App;
