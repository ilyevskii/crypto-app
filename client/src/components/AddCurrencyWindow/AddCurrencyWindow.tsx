import React, {ChangeEvent, useState} from 'react';
import './AddCurrencyWindow.scss';

import {usePortfolioFunctions} from 'hooks';
import {Currency} from 'services';

interface CurrencyWindowProps {
    currency: Currency;
}


export function AddCurrencyWindow(props: CurrencyWindowProps) {

    const {currency} = props;
    const {addCurrency} = usePortfolioFunctions();
    const [value, setValue] = useState<string>("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        addCurrency(currency.id, currency.name, currency.priceUsd, Number(value));
        (document.querySelector(".modal-close-btn") as HTMLButtonElement).click();
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value: string = event.target.value;

        if (!isNaN(Number(value))) {
            setValue(value);
        }
    }


    return (
        <div className="add-currency-window">
            <h4 className="add-currency-window-header">Buy {currency.symbol}</h4>
            <form onSubmit={handleSubmit} className="add-currency-window-form">
                <input
                    placeholder="Enter amount"
                    value={value}
                    onChange={handleChange}
                />
                <button className="styled-btn" type="submit" disabled={!value}>
                    Buy
                </button>
            </form>
        </div>
    );
}
