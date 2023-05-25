import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";


import {Header} from "components";
import {MainPage} from "./pages/MainPage";

function App() {
  return (
    <Router basename="/">
        <Header/>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
