import React, {Suspense} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./Components/Layouts/Header/Header";
import HomePage from './Pages/Home/Home.jsx';
import ContactsPage from './Pages/Contacts/Contacts.jsx';
import ProductsPage from './Pages/Products/Products.jsx';
import CertificatePage from './Pages/Certificate/Certificate.jsx';
import AboutUsPage from './Pages/AboutUs/AboutUs.jsx'
import './index.css';
import BasketPage from './Pages/Basket/Basket.jsx';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
  
        <Route path="/products" component={ProductsPage} />
        <Route path="/certificates" component={CertificatePage} />
        <Route path="/about-us" component={AboutUsPage}/>
        <Route path="/contacts" component={ContactsPage} />
        <Route path="/basket" component={BasketPage} />
      </Switch>
    </Router>
  </Suspense>
 
    
  );
}

export default App;
