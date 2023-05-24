import React from 'react';
import './Header.scss';

import {useNavigate} from "react-router-dom";
import {Menu} from "./Menu/Menu";


export function Header() {

    const navigate = useNavigate();

    return (
        <header className="site-header">
            <div className="logo" onClick={() => navigate("/?page=1")}>
                <h1 className="logo-text semi-bold"><span>Coin</span>Cap</h1>
                <p className="logo-author">by @ilyevskii.</p>
            </div>
            <Menu/>
            <p className="portfolio-info">
                134,32 <span className="semi-bold">USD</span> <span className="color-success">+2,38 (1,80 %)</span>
            </p>
        </header>
    );
}
