import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";


import {Header, CurrencyCard} from "components";
import {MainPage} from "./pages/MainPage";

function App() {

  return (
      <Router basename="/">
          <Header/>
          <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/currency/:id" element={<CurrencyCard/>}/>
          </Routes>
      </Router>
  );
}

export default App;
