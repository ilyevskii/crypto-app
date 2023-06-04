import React, {useEffect, useState} from 'react';
import './Header.scss';

import {useNavigate} from "react-router-dom";
import {HeaderCurrencies} from "./HeaderCurrencies/HeaderCurrencies";
import {ModalWindow} from "../ModalWindow/ModalWindow";
import {PortfolioWindow} from "../PortfolioWindow/PortfolioWindow";
import {usePageCurrencies, usePortfolioCurrencies, usePortfolioFunctions} from "hooks";


export const Header = () => {

    const [portfolioOpened, setPortfolioOpened] = useState<boolean>(false);
    const {portfolio, updatePortfolioCurrencies} = usePortfolioFunctions();
    const {portfolio_currencies} = usePortfolioCurrencies();
    const navigate = useNavigate();

    const handlePortfolioClick = () => {
        setPortfolioOpened(state => !state);
    }


    return (
        <>
            {portfolioOpened && <ModalWindow child={<PortfolioWindow/>} onClose={handlePortfolioClick}/>}
            <header className="header">
                <div className="header__logo" onClick={() => navigate("/?page=1")}>
                    <h1 className="header__logo-text weight_semi-bold"><span>Coin</span>Cap</h1>
                    <p className="header__logo-author">by @ilyevskii.</p>
                </div>
                <HeaderCurrencies/>
                <button className="header__portfolio-button button" onClick={handlePortfolioClick}>
                    <p>Balance: <span className="weight_semi-bold">{portfolio.balance}&#36;</span></p>
                    <p className={`color-${portfolio.is_profit ? 'success' : 'failure'}`}>
                        {portfolio.difference_usd}&#36; ({portfolio.difference_percent}%)
                    </p>
                </button>
            </header>
        </>
    );
}
