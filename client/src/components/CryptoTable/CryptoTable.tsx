import React from 'react';
import './CryptoTable.scss';

import {CryptoTableItem} from "./CryptoTableItem/CryptoTableItem";


export function CryptoTable() {

    const crypto_currencies = [
        {
            id: "bitcoin",
            symbol: "BTC",
            name: "Bitcoin",
            priceUsd: "6929.8217756835584756",
            changePercent24Hr: "+0.8101417214350335",
            vwap24Hr: "7175.0663247679233209",
            volumeUsd24Hr: "2927959461.1750323310959460"
        },
        {
            id: "ethereum",
            symbol: "ETH",
            name: "Ethereum",
            priceUsd: "404.9774667045200896",
            changePercent24Hr: "-0.0999626159535347",
            vwap24Hr: "7175.0663247679233209",
            volumeUsd24Hr: "2927959461.1750323310959460"
        },
        {
            id: "ripple",
            symbol: "XRP",
            name: "XRP",
            priceUsd: "0.4202870472643482",
            changePercent24Hr: "-1.9518258685302665",
            vwap24Hr: "7175.0663247679233209",
            volumeUsd24Hr: "2927959461.1750323310959460"
        }

    ]


    return (

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
                {crypto_currencies.map((currency: any, index) => (
                    <CryptoTableItem currency={currency} index={index} key={currency.id}/>
                ))}
            </tbody>
        </table>

    );
}