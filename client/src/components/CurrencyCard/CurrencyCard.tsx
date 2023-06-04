import React, {useState} from 'react';
import './CurrencyCard.scss';

import {ModalWindow, ChangesSchedule, AddCurrencyWindow} from "components";
import {ICurrencyInfo} from "hooks";


export const CurrencyCard = ({currency}: { currency: ICurrencyInfo }) => {

    const [modalOpened, setModalOpened] = useState<boolean>(false);

    const handleBuyClick = () => {
        setModalOpened(state => !state);
    }


    return (
        <>
            {modalOpened &&
                <ModalWindow child={<AddCurrencyWindow currency={currency.info}/>} onClose={handleBuyClick}/>}

            <div className="currency-card">
                <div className="currency-card__header">
                    <div className="currency-card__header-logo">
                        <h2>{currency.info.name}</h2>
                        <p>{currency.info.symbol}</p>
                    </div>
                    <p className="currency-card__header-date">
                        <span>{currency.info.date}</span>
                        <span>{currency.info.time}</span>
                    </p>
                    <button
                        className="currency-card__toggle-button button button--toggle"
                        type="button"
                        onClick={handleBuyClick}>+
                    </button>
                </div>
                <div className="currency-card__body">
                    <div className="currency-card__body-info weight_semi-bold">
                        <p><span className="color-grey">NOW</span><span>&#36;{currency.info.priceUsd}</span></p>
                        <p><span className="color-grey">CHANGE</span>
                            <span className={`color-${currency.info.profit ? 'success' : 'failure'}`}>
                            {currency.info.changePercent24Hr}&#37;
                        </span>
                        </p>
                        <p><span className="color-grey">SUPPLY</span><span>&#36;{currency.info.supply}</span></p>
                        <p><span className="color-grey">HIGH 24H</span><span>&#36;{currency.info.vwap24Hr}</span></p>
                        <p><span className="color-grey">VOLUME</span><span>&#36;{currency.info.volumeUsd24Hr}</span></p>
                        <p><span className="color-grey">MARKET CAP</span><span>&#36;{currency.info.marketCapUsd}</span>
                        </p>
                    </div>
                    <ChangesSchedule changes={currency.changes} profit={currency.info.profit}/>
                </div>
                <button
                    className="button button--styled"
                    type="button"
                    onClick={handleBuyClick}>Buy Currency
                </button>
            </div>
        </>
    );
}