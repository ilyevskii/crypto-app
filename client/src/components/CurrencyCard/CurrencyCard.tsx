import React, {useEffect} from 'react';
import './CurrencyCard.scss';

import {ChangesSchedule} from "./ChangesSchedule/ChangesSchedule";


export function CurrencyCard() {

    const currency = {
        "id": "bitcoin",
        "rank": "1",
        "symbol": "BTC",
        "name": "Bitcoin",
        "supply": "17193925.0000000000000000",
        "maxSupply": "21000000.0000000000000000",
        "marketCapUsd": "119179791817.6740161068269075",
        "volumeUsd24Hr": "2928356777.6066665425687196",
        "priceUsd": "6931.5058555666618359",
        "changePercent24Hr": "-0.8101417214350335",
        "vwap24Hr": "7175.0663247679233209",
        "timestamp": 1533581098863,
        "date": "1 July 2018",
        "time": "12:00"
    }

    useEffect(() => {
        const date = new Date(currency.timestamp);
        currency.date = date.toLocaleDateString("en-GB", {day: "numeric", month: "long", year: "numeric"})
    }, [])



    return (
        <main className="container narrow">
            <div className="currency-card">
                <div className="currency-card-header">
                    <div className="currency-card-header-logo">
                        <h2>{currency.name}</h2>
                        <p>{currency.symbol}</p>
                    </div>
                    <p className="currency-card-header-date">
                        <span>{currency.date}</span>
                        <span>{currency.time}</span>
                    </p>
                    <button className="add-currency-control">+</button>
                </div>
                <div className="currency-card-body">
                    <div className="currency-card-body-info semi-bold">
                        <p><span className="color-grey">NOW</span> <span>&#36;{currency.priceUsd.slice(0,6)}</span></p>
                        <p><span className="color-grey">CHANGE</span> <span>{currency.changePercent24Hr.slice(1,6)}&#37;</span></p>
                        <p><span className="color-grey">MARKET CAP</span> <span>&#36;{currency.marketCapUsd.slice(0,6)}</span></p>
                        <p><span className="color-grey">HIGH</span> <span>&#36;{currency.vwap24Hr.slice(0,6)}</span></p>
                        <p><span className="color-grey">VOLUME</span> <span>&#36;{currency.volumeUsd24Hr.slice(0,6)}</span></p>
                        <p><span className="color-grey">SUPPLY</span> <span>&#36;{currency.volumeUsd24Hr.slice(0,6)}</span></p>
                    </div>
                    <ChangesSchedule/>
                </div>
                <button className="add-currency-btn">Buy Currency</button>
            </div>
        </main>
    );
}