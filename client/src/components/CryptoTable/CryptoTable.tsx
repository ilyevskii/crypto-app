import React, {MouseEvent, useState} from 'react';
import './CryptoTable.scss';

import {CryptoTableItem} from "./CryptoTableItem/CryptoTableItem";
import {ModalWindow} from "../ModalWindow/ModalWindow";
import {AddCurrencyWindow} from "../AddCurrencyWindow/AddCurrencyWindow";

export interface Currency {
    id: string,
    rank: string,
    symbol: string,
    name: string,
    priceUsd: string,
    changePercent24Hr: string,
    vwap24Hr: string,
    volumeUsd24Hr: string
}

export function CryptoTable() {

    const [currency, setCurrency] = useState<Currency | null>(null);

    const handleControllerClick = (event: MouseEvent, currency?: Currency | null) => {
        if (currency) setCurrency(currency);
        else setCurrency(null);
        event.stopPropagation();
    }

    const crypto_currencies = [
        {
            id: "bitcoin",
            rank: "1",
            symbol: "BTC",
            name: "Bitcoin",
            priceUsd: "6929.8217756835584756",
            changePercent24Hr: "+0.8101417214350335",
            vwap24Hr: "7175.0663247679233209",
            volumeUsd24Hr: "2927959461.1750323310959460"
        },
        {
            id: "ethereum",
            rank: "2",
            symbol: "ETH",
            name: "Ethereum",
            priceUsd: "404.9774667045200896",
            changePercent24Hr: "-0.0999626159535347",
            vwap24Hr: "7175.0663247679233209",
            volumeUsd24Hr: "2927959461.1750323310959460"
        },
        {
            id: "ripple",
            rank: "3",
            symbol: "XRP",
            name: "XRP",
            priceUsd: "0.4202870472643482",
            changePercent24Hr: "-1.9518258685302665",
            vwap24Hr: "7175.0663247679233209",
            volumeUsd24Hr: "2927959461.1750323310959460"
        }

    ]


    return (
        <>
            {currency && <ModalWindow child={<AddCurrencyWindow currency={currency}/>} onClose={handleControllerClick}/>}

            <table className="crypto-table">
                <thead className="crypto-table-header">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Price (USD)</th>
                    <th>VWAP (24Hr)	</th>
                    <th>Vol (24Hr)</th>
                    <th>Chg (24Hr)</th>
                    <th>Buy</th>
                </tr>
                </thead>
                <tbody>
                {crypto_currencies.map((currency: Currency) => (
                    <CryptoTableItem currency={currency} handleClick={handleControllerClick} key={currency.id}/>
                ))}
                </tbody>
            </table>
        </>
    );
}