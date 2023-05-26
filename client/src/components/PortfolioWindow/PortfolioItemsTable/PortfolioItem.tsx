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
            <td>{currency.name}</td>
            <td>{currency.amount}</td>
            <td>{+(currency.initial_investments).toFixed(2)} &#36;</td>
            <td>{+(currency.current_investments).toFixed(2)} &#36;</td>
            <td>{+(currency.current_investments - currency.initial_investments).toFixed(2)} &#36;</td>
            <td>{+((currency.current_investments - currency.initial_investments)/currency.initial_investments).toFixed(3)} %</td>
            <td>
                <button className="toggle-currency-control-btn" onClick={() => removeCurrency(currency.id)}>
                    -
                </button>
            </td>
        </tr>
    );
}