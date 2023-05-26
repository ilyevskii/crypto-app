import React from 'react';
import './AddCurrencyWindow.scss';

interface CurrencyWindowProps {
    currency: any;
}

export function AddCurrencyWindow(props: CurrencyWindowProps) {

    const {currency} = props;


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
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
