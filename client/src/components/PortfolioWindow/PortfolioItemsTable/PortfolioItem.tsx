import React from 'react';

import {PortfolioCurrency} from "contexts";
import {usePortfolioFunctions} from "hooks";
import {useMediaQuery} from "react-responsive";

interface PortfolioItemProps {
    currency: PortfolioCurrency;
}


export function PortfolioItem(props: PortfolioItemProps) {


    const {currency} = props;
    const {removePortfolioCurrency} = usePortfolioFunctions();

    const mw441 = useMediaQuery({maxWidth: "441px"});
    const mw507 = useMediaQuery({maxWidth: "507px"});
    const mw591 = useMediaQuery({maxWidth: "591px"});
    const mw741 = useMediaQuery({maxWidth: "741px"});


    return (
        <tr className="portfolio-item">
            <td>{currency.name}</td>
            <td>{currency.amount}</td>
            {!mw741 && <td>{currency.priceUsd}</td>}
            {!mw507 && <td>{currency.initial_investments} &#36;</td>}
            <td>{currency.current_investments} &#36;</td>
            {!mw441 && <td>{currency.difference_usd} &#36;</td>}
            {!mw591 && <td>{currency.difference_percent} %</td>}
            <td>
                <button className="toggle-currency-control-btn" onClick={() => removePortfolioCurrency(currency.id)}>
                    -
                </button>
            </td>
        </tr>
    );
}