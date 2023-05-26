import React from 'react';
import './PortfolioWindow.scss';
import {PortfolioItemsTable} from "./PortfolioItemsTable/PortfolioItemsTable";
import {usePortfolioFunctions} from "hooks";


export function PortfolioWindow() {

    const {currencies, portfolio} = usePortfolioFunctions();


    return (
        <div className="portfolio-window">
            <h3 className="portfolio-window-header">My Portfolio</h3>
            <div className="portfolio-window-info semi-bold">
                <p><span className="color-grey">BALANCE</span><span>&#36;{portfolio.current_investments}</span></p>
                <p><span className="color-grey">TOKENS</span><span>{currencies.length}</span></p>
            </div>
            <PortfolioItemsTable/>
        </div>
    );
}
