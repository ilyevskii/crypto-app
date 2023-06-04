import React, {useEffect} from 'react';
import './PortfolioWindow.scss';
import {PortfolioItemsTable} from "./PortfolioItemsTable/PortfolioItemsTable";
import {usePageCurrencies, usePortfolioCurrencies, usePortfolioFunctions} from "hooks";


export const PortfolioWindow = () => {

    const {portfolio} = usePortfolioFunctions();


    return (
        <div className="portfolio-window">
            <h3 className="portfolio-window__header">My Portfolio</h3>
            <div className="portfolio-window__body weight_semi-bold">
                <p><span className="color-grey">BALANCE</span><span>&#36;{portfolio.balance}</span></p>
                {+portfolio.balance !== 0 &&
                    <p>
                        <span className="color-grey">PROFIT (&#36;)</span>
                        <span
                            className={`color-${portfolio.is_profit ? 'success' : 'failure'}`}>{portfolio.difference_usd}</span>
                    </p>
                }
                <p><span className="color-grey">TOKENS</span><span>{portfolio.currencies.length}</span></p>
                {+portfolio.balance !== 0 &&
                    <p>
                        <span className="color-grey">PROFIT (%)</span>
                        <span
                            className={`color-${portfolio.is_profit ? 'success' : 'failure'}`}>{portfolio.difference_percent}</span>
                    </p>
                }
            </div>
            <PortfolioItemsTable/>
        </div>
    );
}
