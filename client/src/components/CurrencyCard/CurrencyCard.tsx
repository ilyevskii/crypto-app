import React, {useState} from 'react';
import './CurrencyCard.scss';

import {useMediaQuery} from "react-responsive";

import {ModalWindow, ChangesSchedule, AddCurrencyWindow} from "components";
import {CurrencyInfoType} from "hooks";


export function CurrencyCard({currency}: {currency: CurrencyInfoType}) {

    const [modalOpened, setModalOpened] = useState<boolean>(false);
    const mw442px = useMediaQuery({maxWidth: "442px"});

    const handleBuyClick = () => {
        setModalOpened(state => !state);
    }


    return (
        <>
            {modalOpened && <ModalWindow child={<AddCurrencyWindow currency={currency.info}/>} onClose={handleBuyClick}/>}

            <div className="currency-card">
                <div className="currency-card-header">
                    <div className="currency-card-header-logo">
                        <h2>{currency.info.name}</h2>
                        <p>{currency.info.symbol}</p>
                    </div>
                    <p className="currency-card-header-date">
                        <span>{currency.info.date}</span>
                        <span>{currency.info.time}</span>
                    </p>
                    {!mw442px &&
                    <button
                        className="toggle-currency-control-btn"
                        type="button"
                        onClick={handleBuyClick}>+</button>
                    }
                </div>
                <div className="currency-card-body">
                    <div className="currency-card-body-info semi-bold">
                        <p><span className="color-grey">NOW</span><span>&#36;{currency.info.priceUsd}</span></p>
                        <p><span className="color-grey">CHANGE</span>
                            <span className={`color-${currency.info.profit ? 'success' : 'failure'}`}>
                            {currency.info.changePercent24Hr}&#37;
                        </span>
                        </p>
                        <p><span className="color-grey">SUPPLY</span><span>&#36;{currency.info.supply}</span></p>
                        <p><span className="color-grey">HIGH 24H</span><span>&#36;{currency.info.vwap24Hr}</span></p>
                        <p><span className="color-grey">VOLUME</span><span>&#36;{currency.info.volumeUsd24Hr}</span></p>
                        <p><span className="color-grey">MARKET CAP</span><span>&#36;{currency.info.marketCapUsd}</span></p>
                    </div>
                    <ChangesSchedule changes={currency.changes} profit={currency.info.profit}/>
                </div>
                <button
                    className="styled-btn"
                    type="button"
                    onClick={handleBuyClick}>Buy Currency</button>
            </div>
        </>
    );
}