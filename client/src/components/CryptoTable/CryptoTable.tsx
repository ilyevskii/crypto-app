import React, {MouseEvent, useState} from 'react';
import './CryptoTable.scss';

import {CryptoTableItem, ModalWindow, AddCurrencyWindow} from 'components';
import {ICurrency} from 'services';


export const CryptoTable = ({page_currencies}: { page_currencies: Array<ICurrency>}) => {

    const [currency, setCurrency] = useState<ICurrency | null>(null);

    const handleControllerClick = (event: MouseEvent, currency?: ICurrency | null) => {
        if (currency) setCurrency(currency);
        else setCurrency(null);
        event.stopPropagation();
    }


    return (
        <>
            {currency &&
                <ModalWindow child={<AddCurrencyWindow currency={currency}/>} onClose={handleControllerClick}/>}

            <table className="crypto-table table">
                <thead className="table__header">
                <tr className="crypto-table__item">
                    <th className="crypto-table__item-rank">#</th>
                    <th className="crypto-table__item-name">Name</th>
                    <th className="crypto-table__item-symbol">Symbol</th>
                    <th className="crypto-table__item-price">Price (USD)</th>
                    <th className="crypto-table__item-supply">Supply</th>
                    <th className="crypto-table__item-vwap">VWAP (24Hr) </th>
                    <th className="crypto-table__item-volume">Vol (24Hr)</th>
                    <th className="crypto-table__item-change">Chg (24Hr)</th>
                    <th className="crypto-table__item-buy">Buy</th>
                </tr>
                </thead>
                <tbody className="table__body">
                {page_currencies.map((currency: ICurrency) => (
                    <CryptoTableItem currency={currency} handleClick={handleControllerClick} key={currency.id}/>
                ))}
                </tbody>
            </table>
        </>
    );
}