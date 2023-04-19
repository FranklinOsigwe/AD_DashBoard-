import React from "react";
import { Routes, Route } from 'react-router-dom'
import Customers from "../../Pages/Customers";
import Orders from "../../Pages/Orders";
import Inventory from "../../Pages/Inventory";
import Dashboard from "../../Pages/Dashboard";

function AppRoutes() {
  return (
   
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
      </Routes>

  );
}

export default AppRoutes;
