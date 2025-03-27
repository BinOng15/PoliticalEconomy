import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/customer/Home";
import PoliticalEconomy from "../pages/customer/PoliticalEconomy";
import CorePrinciples from "../pages/customer/CorePrinciples";
import Analysis from "../pages/customer/Analysis";
import Evaluate from "../pages/customer/Evaluate";
import Discover from "../pages/customer/Discover";
import Document from "../pages/customer/Document";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Customer Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/political-economy" element={<PoliticalEconomy />} />
      <Route path="/core-principles" element={<CorePrinciples />} />
      <Route path="/analysis" element={<Analysis />} />
      <Route path="/evaluate" element={<Evaluate />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/document" element={<Document />} />
    </Routes>
  );
};

export default AppRoutes;
