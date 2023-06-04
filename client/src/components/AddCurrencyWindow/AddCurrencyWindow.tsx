import React, {ChangeEvent, useState} from 'react';
import './AddCurrencyWindow.scss';

import {usePortfolioFunctions} from 'hooks';
import {ICurrency} from 'services';

interface ICurrencyWindowProps {
    currency: ICurrency;
}


export function AddCurrencyWindow(props: ICurrencyWindowProps) {

    const {currency} = props;
    const {addPortfolioCurrency} = usePortfolioFunctions();
    const [value, setValue] = useState<string>("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        addPortfolioCurrency(currency, Number(value));
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
