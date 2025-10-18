import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { App } from './App'
import { CheckoutPage } from './pages/CheckoutPage'
import { AdminPage } from './pages/AdminPage'

export function AppRouter() {
  useEffect(() => {
    // Add GTM noscript to body
    const noscript = document.createElement('noscript');
    noscript.innerHTML = '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KRHZ843T" height="0" width="0" style="display:none;visibility:hidden"></iframe>';
    document.body.insertBefore(noscript, document.body.firstChild);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}