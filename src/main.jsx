import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/portfolio">
    <Routes>
      <Route path="/" element={<Portfolio />} />
    </Routes>
  </BrowserRouter>
);
