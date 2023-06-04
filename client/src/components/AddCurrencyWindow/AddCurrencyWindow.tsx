import React, {ChangeEvent, useState} from 'react';
import './AddCurrencyWindow.scss';

import {usePortfolioFunctions} from 'hooks';
import {ICurrency} from 'services';
import {useNavigate} from "react-router-dom";

interface ICurrencyWindowProps {
    currency: ICurrency;
}


export const AddCurrencyWindow = (props: ICurrencyWindowProps) => {

    const {currency} = props;
    const {addPortfolioCurrency} = usePortfolioFunctions();
    const [value, setValue] = useState<string>("");
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        addPortfolioCurrency(currency, Number(value));
        navigate("/?page=1");
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value: string = event.target.value;

        if (!isNaN(Number(value))) {
            setValue(value);
        }
    }


    return (
        <div className="add-currency-window">
            <h4 className="add-currency-window__header">Buy {currency.symbol}</h4>
            <form onSubmit={handleSubmit} className="add-currency-window__form">
                <input
                    className="input"
                    placeholder="Enter amount"
                    value={value}
                    onChange={handleChange}
                />
                <button className="button button--styled" type="submit" disabled={!value}>
                    Buy
                </button>
            </form>
        </div>
    );
}
