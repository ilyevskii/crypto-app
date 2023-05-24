import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";


import {Header} from "./components/Header/Header";

function App() {
  return (
    <Router basename="/">
        <Header/>
        <Routes>

        </Routes>
    </Router>
  );
}

export default App;
