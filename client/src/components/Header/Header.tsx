import React, {useEffect, useState} from 'react';
import './Header.scss';

import {useNavigate} from "react-router-dom";
import {Menu} from "./Menu/Menu";
import {ModalWindow} from "../ModalWindow/ModalWindow";
import {PortfolioWindow} from "../PortfolioWindow/PortfolioWindow";
import {usePortfolioFunctions} from "hooks";


export function Header() {

    const [portfolioOpened, setPortfolioOpened] = useState<boolean>(false);
    const navigate = useNavigate();
    const {portfolio, getDifferences} = usePortfolioFunctions();

    const handlePortfolioClick = () => {
        setPortfolioOpened(state => !state);
    }

    return (
        <>
            {portfolioOpened && <ModalWindow child={<PortfolioWindow/>} onClose={handlePortfolioClick}/>}
            <header className="site-header">
                <div className="logo" onClick={() => navigate("/?page=1")}>
                    <h1 className="logo-text semi-bold"><span>Coin</span>Cap</h1>
                    <p className="logo-author">by @ilyevskii.</p>
                </div>
                <Menu/>
                <button className="portfolio-info-btn" onClick={handlePortfolioClick}>
                    <p>Balance: <span className="semi-bold">{portfolio.current_investments.toFixed(3)}$</span></p>
                    <p className={`color-${getDifferences().profit ? 'success' : 'failure'}`}>
                        {getDifferences().differenceUsd}&#36; ({getDifferences().differencePercent}%)
                    </p>
                </button>
            </header>
        </>
    );
}
