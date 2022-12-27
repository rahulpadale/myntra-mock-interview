import React from "react";
import "./App.css";
import Cards from "./components/Product/Cards";
import Pdata from "./components/Product/Pdata";
import Navbar from "./components/Navbar/Navbar.jsx";
import Filter from "./components/Filter/Filter.jsx";
import Sort from "./components/Sort/Sort.jsx";
import { Route, Routes } from "react-router-dom";
import Details from "./components/DetailsPage/Details";
import{Home} from "./Pages";
import Products from "./components/Product/Products";
import Error from "./Pages/Error";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element = { <Home /> } />
          <Route path="/Products" element={<Products />} />
          <Route path="/details/:detailslug" element={<Details/>} />
          <Route path='/Error' element = { <Error/> } />
      </Routes>

    </>
  );
};

export default App;
