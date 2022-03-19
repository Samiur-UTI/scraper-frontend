import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Result from './pages/result';
import Details from './pages/details';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="search" element={<Result />}/>
      <Route path=":property_name" element={<Details />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))