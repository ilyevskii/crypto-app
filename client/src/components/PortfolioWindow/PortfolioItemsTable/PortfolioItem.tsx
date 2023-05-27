import React from 'react';

import {PortfolioCurrency} from "contexts";
import {usePortfolioFunctions} from "hooks";

interface PortfolioItemProps {
    currency: PortfolioCurrency;
}


export function PortfolioItem(props: PortfolioItemProps) {


    const {currency} = props;
    const {removePortfolioCurrency} = usePortfolioFunctions();


    return (
        <tr className="portfolio-item">
            <td>{currency.name}</td>
            <td>{currency.amount}</td>
            <td>{currency.priceUsd}</td>
            <td>{currency.initial_investments} &#36;</td>
            <td>{currency.current_investments} &#36;</td>
            <td>{currency.difference_usd} &#36;</td>
            <td>{currency.difference_percent} %</td>
            <td>
                <button className="toggle-currency-control-btn" onClick={() => removePortfolioCurrency(currency.id)}>
                    -
                </button>
            </td>
        </tr>
    );
}