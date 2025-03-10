import React from 'react'
import { Routes, Route } from 'react-router';
import Categories from "../pages/Categories";
import Products from "../pages/Products";
import Suppliers from "../pages/Suppliers";
import Home from "../pages/Home";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/suppliers" element={<Suppliers />} />
      </Routes>
    </>
  )
}
