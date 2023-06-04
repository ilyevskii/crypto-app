import React from 'react';

import {IPortfolioCurrency} from "contexts";
import {usePortfolioFunctions} from "hooks";
import {useMediaQuery} from "react-responsive";

interface IPortfolioItemProps {
    currency: IPortfolioCurrency;
}


export function PortfolioItem(props: IPortfolioItemProps) {


    const {currency} = props;
    const {removePortfolioCurrency} = usePortfolioFunctions();

    const mw441px = useMediaQuery({maxWidth: "441px"});
    const mw507px = useMediaQuery({maxWidth: "507px"});
    const mw591px = useMediaQuery({maxWidth: "591px"});
    const mw741px = useMediaQuery({maxWidth: "741px"});


    return (
        <tr className="portfolio-item">
            <td>{currency.name}</td>
            <td>{currency.amount}</td>
            {!mw741px && <td>{currency.priceUsd}</td>}
            {!mw507px && <td>{currency.initial_investments} &#36;</td>}
            <td>{currency.current_investments} &#36;</td>
            {!mw441px && <td>{currency.difference_usd} &#36;</td>}
            {!mw591px && <td>{currency.difference_percent} %</td>}
            <td>
                <button className="toggle-currency-control-btn" onClick={() => removePortfolioCurrency(currency.id)}>
                    -
                </button>
            </td>
        </tr>
    );
}