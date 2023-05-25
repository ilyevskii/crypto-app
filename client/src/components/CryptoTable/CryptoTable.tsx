import React from 'react';
import './CryptoTable.scss';


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
                    <tr className="crypto-table-item" key={currency.id}>
                        <td>{index}</td>
                        <td>{currency.name}</td>
                        <td>{currency.symbol}</td>
                        <td>{parseFloat(currency.priceUsd).toFixed(3)}</td>
                        <td>{parseFloat(currency.vwap24Hr).toFixed(3)}</td>
                        <td>{parseFloat(currency.volumeUsd24Hr).toFixed(3)}</td>
                        <td className={`${currency.changePercent24Hr[0] === "-" ? "color-failure" : "color-success"}`}>
                            {currency.changePercent24Hr.slice(0, 5)}%
                        </td>
                        <td><button className="add-currency-btn bold">+</button></td>
                    </tr>
                ))}
            </tbody>
        </table>

    );
}