import React, {useState} from 'react';
import './Header.scss';

import {useNavigate} from "react-router-dom";
import {Menu} from "./Menu/Menu";
import {ModalWindow} from "../ModalWindow/ModalWindow";
import {PortfolioWindow} from "../PortfolioWindow/PortfolioWindow";


export function Header() {

    const [portfolioOpened, setPortfolioOpened] = useState<boolean>(false);
    const navigate = useNavigate();

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
                    134,32 <span className="semi-bold">USD</span> <span className="color-success">+2,38 (1,80 %)</span>
                </button>
            </header>
        </>
    );
}
