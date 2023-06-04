import React from 'react';
import {useNavigate} from "react-router-dom";

import {usePortfolioFunctions} from 'hooks';
import {IPortfolioCurrency} from 'contexts';
import {PortfolioItem} from "./PortfolioItem";
import {useMediaQuery} from "react-responsive";


export const PortfolioItemsTable = () => {

    const {portfolio} = usePortfolioFunctions();
    const navigate = useNavigate();

    const mw441 = useMediaQuery({maxWidth: "441px"});
    const mw507 = useMediaQuery({maxWidth: "507px"});
    const mw591 = useMediaQuery({maxWidth: "591px"});
    const mw741 = useMediaQuery({maxWidth: "741px"});

    const handleBuyClick = () => {
        (document.querySelector(".modal-close-btn") as HTMLButtonElement).click();
        navigate("/?page=1");
    }


    return (
        <>
            {portfolio.currencies.length ?
                <table className="table">
                    <thead className="table__header">
                    <tr>
                        <th>Name</th>
                        <th>{mw441 ? "Sum" : "Amount"}</th>
                        {!mw741 && <th>Rate</th>}
                        {!mw507 && <th>Invested</th>}
                        <th>Current</th>
                        {!mw441 && <th>Profit</th>}
                        {!mw591 && <th>Profit (%)</th>}
                        <th>Sell</th>
                    </tr>
                    </thead>
                    <tbody>
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