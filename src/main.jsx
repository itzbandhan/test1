import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa"
import "./css/main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
