import React from 'react';
import './PortfolioItemsTable.scss';
import {useNavigate} from "react-router-dom";

import {usePortfolioFunctions} from 'hooks';
import {IPortfolioCurrency} from 'contexts';
import {PortfolioItem} from "./PortfolioItem";


export const PortfolioItemsTable = () => {

    const {portfolio} = usePortfolioFunctions();
    const navigate = useNavigate();

    const handleBuyClick = () => {
        navigate("/?page=1");
    }


    return (
        <>
            {portfolio.currencies.length ?
                <table className="portfolio-table table">
                    <thead className="table__header">
                    <tr className="portfolio-table__item">
                        <th className="portfolio-table__item-name">Name</th>
                        <th className="portfolio-table__item-sum">Amount</th>
                        <th className="portfolio-table__item-rate">Rate</th>
                        <th className="portfolio-table__item-invested">Invested</th>
                        <th className="portfolio-table__item-current">Current</th>
                        <th className="portfolio-table__item-profit-usd">Profit</th>
                        <th className="portfolio-table__item-profit-percents">Profit (%)</th>
                        <th className="portfolio-table__item-sell">Sell</th>
                    </tr>
                    </thead>
                    <tbody className="table__body">
                    {portfolio.currencies.map((currency: IPortfolioCurrency) => (
                        <PortfolioItem currency={currency} key={currency.id}/>
                    ))}
                    </tbody>
                </table>
                :
                <button className="button button--styled" onClick={handleBuyClick}>Buy Tokens</button>
            }
        </>

    );
}