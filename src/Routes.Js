import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CARDAPIO from "./CARDAPIO.JS";


function Rotas() {
  return (
    // Rotas
    <Router>
      <Routes>
        <Route path="/CARDAPIO"  element={<CARDAPIO/>}/>
      </Routes>
    </Router>
  );
}

export default Rotas;