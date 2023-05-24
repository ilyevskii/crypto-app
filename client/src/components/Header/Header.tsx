import React from 'react';
import './Header.scss';

import {useNavigate} from "react-router-dom";


export function Header() {

    const navigate = useNavigate();

    return (
        <header className="site-header">
            <div className="logo" onClick={() => navigate("/?page=1")}>
                <h1 className="logo-text semi-bold"><span>Coin</span>Cap</h1>
                <p className="logo-author">by @ilyevskii.</p>
            </div>
        </header>
    );
}
