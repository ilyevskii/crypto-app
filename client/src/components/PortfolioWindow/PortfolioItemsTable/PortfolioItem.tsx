import React from 'react';

import {IPortfolioCurrency} from "contexts";
import {usePortfolioFunctions} from "hooks";

interface IPortfolioItemProps {
    currency: IPortfolioCurrency;
}


export const PortfolioItem = (props: IPortfolioItemProps) => {

    const {currency} = props;
    const {removePortfolioCurrency} = usePortfolioFunctions();


    return (
        <tr>
            <td className="portfolio-table__item-name">{currency.name}</td>
            <td className="portfolio-table__item-sum">{currency.amount}</td>
            <td className="portfolio-table__item-rate">{currency.priceUsd}</td>
            <td className="portfolio-table__item-invested">{currency.initial_investments} &#36;</td>
            <td className="portfolio-table__item-current">{currency.current_investments} &#36;</td>
            <td className="portfolio-table__item-profit-usd">{currency.difference_usd} &#36;</td>
            <td className="portfolio-table__item-profit-percents">{currency.difference_percent} %</td>
            <td className="portfolio-table__item-sell">
                <button className="button button--toggle" onClick={() => removePortfolioCurrency(currency.id)}>
                    -
                </button>
            </td>
        </tr>
    );
}