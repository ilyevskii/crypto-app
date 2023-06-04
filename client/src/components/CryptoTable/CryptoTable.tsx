import React, {MouseEvent, useState} from 'react';

import {CryptoTableItem, ModalWindow, AddCurrencyWindow} from 'components';
import {Currency} from 'services';
import {useMediaQuery} from "react-responsive";


export function CryptoTable({page_currencies}: { page_currencies: Currency[] }) {

    const [currency, setCurrency] = useState<Currency | null>(null);

    const mw442px = useMediaQuery({maxWidth: "442px"});
    const mw593px = useMediaQuery({maxWidth: "53px"});
    const mw741px = useMediaQuery({maxWidth: "741px"});

    const handleControllerClick = (event: MouseEvent, currency?: Currency | null) => {
        if (currency) setCurrency(currency);
        else setCurrency(null);
        event.stopPropagation();
    }


    return (
        <>
            {currency &&
                <ModalWindow child={<AddCurrencyWindow currency={currency}/>} onClose={handleControllerClick}/>}

            <table className="crypto-table">
                <thead className="table-header">
                <tr>
                    {!mw741px && <th>#</th>}
                    <th>Name</th>
                    {!mw741px && <th>Symbol</th>}
                    <th>Price (USD)</th>
                    {!mw593px && <th>Supply</th>}
                    {!mw741px && <th>VWAP (24Hr) </th>}
                    {!mw442px && <th>Vol (24Hr)</th>}
                    <th>Chg (24Hr)</th>
                    <th>Buy</th>
                </tr>
                </thead>
                <tbody>
                {page_currencies.map((currency: Currency) => (
                    <CryptoTableItem currency={currency} handleClick={handleControllerClick} key={currency.id}/>
                ))}
                </tbody>
            </table>
        </>
    );
}