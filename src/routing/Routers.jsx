import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Owners from "../pages/Owners/Owners";
import Tenants from "../pages/Tenants/Tenants";
import Properties from "../pages/Properties/Properties";
import PageNotFound from "../pages/PageNotFound/PageNotFound";


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/owners" element={<Owners />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="*" element={<PageNotFound />} /> 
      </Routes>

  );
};

export default App;
