import React from 'react';
import './CryptoList.scss';


export function CryptoList() {

    const crypto_currencies = [
        {
            id: "bitcoin",
            symbol: "BTC",
            name: "Bitcoin",
            priceUsd: "6929.8217756835584756",
            changePercent24Hr: "-0.8101417214350335",
        },
        {
            id: "ethereum",
            symbol: "ETH",
            name: "Ethereum",
            priceUsd: "404.9774667045200896",
            changePercent24Hr: "-0.0999626159535347",
        },
        {
            id: "ripple",
            symbol: "XRP",
            name: "XRP",
            priceUsd: "0.4202870472643482",
            changePercent24Hr: "-1.9518258685302665",
        }

    ]


    return (

        <ul className="crypto-ist">
            {crypto_currencies.map((currency: any) => (
                <li className="currency-container" key={currency.id}>
                    {currency.name}
                    {currency.priceUsd}
                    {currency.symbol}
                </li>
            ))}
        </ul>

    );
}