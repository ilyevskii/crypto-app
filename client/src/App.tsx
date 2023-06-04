import React, {useEffect} from 'react';
import './App.scss';
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";


import {Header} from "components";
import {MainPage} from "./pages/MainPage";
import {ErrorPage} from "./pages/ErrorPage";
import {CurrencyPage} from "./pages/CurrencyPage";
import {usePortfolioCurrencies, usePortfolioFunctions} from "hooks";

const App = () => {

    const {updatePortfolioCurrencies} = usePortfolioFunctions();
    const {portfolio_currencies} = usePortfolioCurrencies();

    useEffect(() => {
        if (portfolio_currencies) updatePortfolioCurrencies(portfolio_currencies);
    }, [portfolio_currencies])

    return (
        <Router basename="/">
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/currency/:id" element={<CurrencyPage/>}/>
                <Route path="404" element={<ErrorPage/>}/>
                <Route path="*" element={<Navigate to={"404"}/>}/>
            </Routes>
        </Router>
    );
}

export default App;
