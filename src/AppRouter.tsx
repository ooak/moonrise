import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { CheckoutPage } from './pages/CheckoutPage';
import { AdminPage } from './pages/AdminPage';
export function AppRouter() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>;
}