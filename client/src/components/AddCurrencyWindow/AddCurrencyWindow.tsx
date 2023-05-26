import React from 'react';
import './AddCurrencyWindow.scss';

import {usePortfolioFunctions} from 'hooks';
import {Currency} from 'services';

interface CurrencyWindowProps {
    currency: Currency;
}


export function AddCurrencyWindow(props: CurrencyWindowProps) {

    const {currency} = props;
    const {addCurrency} = usePortfolioFunctions();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        addCurrency(currency.id, currency.priceUsd, 10);
        (document.querySelector(".modal-close-btn") as HTMLButtonElement).click();
    }



    return (
        <div className="add-currency-window">
            <h4 className="add-currency-window-header">Buy {currency.symbol}</h4>
            <form onSubmit={handleSubmit} className="add-currency-window-form">
                <input
                    className="add-currency-window-input"
                    placeholder="Enter amount"
                />
                <button className="styled-btn" type="submit">
                    Buy
                </button>
            </form>
        </div>
    );
}
