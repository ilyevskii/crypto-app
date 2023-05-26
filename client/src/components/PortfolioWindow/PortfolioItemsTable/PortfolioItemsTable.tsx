import React from 'react';
import {useNavigate} from "react-router-dom";

import {usePortfolioFunctions} from 'hooks';
import {PortfolioCurrency} from 'contexts';
import {PortfolioItem} from "./PortfolioItem";


export function PortfolioItemsTable() {

    const {currencies} = usePortfolioFunctions();
    const navigate = useNavigate();

    const handleBuyClick = () => {
        (document.querySelector(".modal-close-btn") as HTMLButtonElement).click();
        navigate("/?page=1");
    }

    return (
        <>
            {currencies.length ?
                <table className="portfolio-items-table">
                    <thead className="table-header">
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Invested</th>
                        <th>Current</th>
                        <th>Profit</th>
                        <th>Profit (%)</th>
                        <th>Sell</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currencies.map((currency: PortfolioCurrency) => (
                        <PortfolioItem currency={currency} key={currency.id}/>
                    ))}
                    </tbody>
                </table>
                :
                <button className="styled-btn" onClick={handleBuyClick}>Buy Tokens</button>
            }
        </>

    );
}