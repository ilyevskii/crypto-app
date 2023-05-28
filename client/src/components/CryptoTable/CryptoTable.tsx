import React, {MouseEvent, useEffect, useState} from 'react';

import {CryptoTableItem, ModalWindow, AddCurrencyWindow} from 'components';
import {Currency} from 'services';
import {useAllCurrencies, useSearchParams} from 'hooks';
import {Loader} from "@mantine/core";
import {useMediaQuery} from "react-responsive";
import {Navigate} from "react-router-dom";


export function CryptoTable() {

    const {page, setPageSearchParam} = useSearchParams();
    const [currency, setCurrency] = useState<Currency | null>(null);
    const {crypto_currencies, is_crypto_currencies_loading, is_crypto_currencies_error} = useAllCurrencies();
    const [page_currencies, setPageCurrencies] = useState<Currency[]>([]);

    const mw442px = useMediaQuery({maxWidth: "442px"});
    const mw593px = useMediaQuery({maxWidth: "53px"});
    const mw741px = useMediaQuery({maxWidth: "741px"});

    const handleControllerClick = (event: MouseEvent, currency?: Currency | null) => {
        if (currency) setCurrency(currency);
        else setCurrency(null);
        event.stopPropagation();
    }

    useEffect(() => {
        if (crypto_currencies && !is_crypto_currencies_loading) {
            if (!page || isNaN(+page)) setPageSearchParam(1);
            setPageCurrencies(crypto_currencies.slice((+page!-1) * 15, Math.min((+page!-1) * 15 + 15, crypto_currencies.length)));
        }
    }, [crypto_currencies, page])


    return (
        <>
            {currency && <ModalWindow child={<AddCurrencyWindow currency={currency}/>} onClose={handleControllerClick}/>}
            {is_crypto_currencies_error && <Navigate to={"404"}/>}

            {!is_crypto_currencies_loading && crypto_currencies ?
                <table className="crypto-table">
                    <thead className="table-header">
                    <tr>
                        {!mw741px && <th>#</th>}
                        <th>Name</th>
                        {!mw741px && <th>Symbol</th>}
                        <th>Price (USD)</th>
                        {!mw593px && <th>Supply</th>}
                        {!mw741px && <th>VWAP (24Hr)	</th>}
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
                :
                <div className="loader-wrapper">
                    <Loader size="80px" color="yellow"/>
                </div>
            }
        </>
    );
}