import React, {useEffect, useState} from 'react';
import './Header.scss';

import {useNavigate} from "react-router-dom";
import {HeaderCurrencies} from "./HeaderCurrencies/HeaderCurrencies";
import {ModalWindow} from "../ModalWindow/ModalWindow";
import {PortfolioWindow} from "../PortfolioWindow/PortfolioWindow";
import {useAllCurrencies, usePortfolioFunctions} from "hooks";


export const Header = () => {

    const [portfolioOpened, setPortfolioOpened] = useState<boolean>(false);
    const {crypto_currencies, is_crypto_currencies_loading} = useAllCurrencies();
    const {portfolio, updatePortfolioCurrencies} = usePortfolioFunctions();
    const navigate = useNavigate();

    const handlePortfolioClick = () => {
        setPortfolioOpened(state => !state);
    }

    useEffect(() => {
        if (!is_crypto_currencies_loading && crypto_currencies) updatePortfolioCurrencies(crypto_currencies);
    }, [crypto_currencies])


    return (
        <>
            {portfolioOpened && <ModalWindow child={<PortfolioWindow/>} onClose={handlePortfolioClick}/>}
            <header className="site-header">
                <div className="logo" onClick={() => navigate("/?page=1")}>
                    <h1 className="logo-text semi-bold"><span>Coin</span>Cap</h1>
                    <p className="logo-author">by @ilyevskii.</p>
                </div>
                <HeaderCurrencies/>
                <button className="portfolio-info-btn" onClick={handlePortfolioClick}>
                    <p>Balance: <span className="semi-bold">{portfolio.balance}</span></p>
                    <p className={`color-${portfolio.is_profit ? 'success' : 'failure'}`}>
                        {portfolio.difference_usd}&#36; ({portfolio.difference_percent}%)
                    </p>
                </button>
            </header>
        </>
    );
}
