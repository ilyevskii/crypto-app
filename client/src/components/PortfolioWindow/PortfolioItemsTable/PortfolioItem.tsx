import React from 'react';

import {PortfolioCurrency} from "contexts";
import {usePortfolioFunctions} from "hooks";

interface PortfolioItemProps {
    currency: PortfolioCurrency;
}


export function PortfolioItem(props: PortfolioItemProps) {


    const {currency} = props;
    const {removeCurrency} = usePortfolioFunctions();


    return (
        <tr className="portfolio-item">
            <td>{currency.id}</td>
            <td>{currency.id}</td>
            <td>{currency.amount}</td>
            <td>{Number(currency.initial_investments).toFixed(3)}</td>
            <td>{Number(currency.current_investments).toFixed(3)}</td>
            <td>{Number(currency.current_investments).toFixed(3)}</td>
            <td>{Number(currency.current_investments).toFixed(3)}</td>
            <td>
                <button className="toggle-currency-control-btn" onClick={() => removeCurrency(currency.id, "1")}>
                    -
                </button>
            </td>
        </tr>
    );
}