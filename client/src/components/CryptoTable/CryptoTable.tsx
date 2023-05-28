import React, {MouseEvent, useEffect, useState} from 'react';

import {CryptoTableItem, ModalWindow, AddCurrencyWindow} from 'components';
import {Currency} from 'services';
import {useAllCurrencies, useSearchParams} from 'hooks';
import {Loader} from "@mantine/core";
import {useMediaQuery} from "react-responsive";


export function CryptoTable() {

    const {page, setPageSearchParam} = useSearchParams();
    const [currency, setCurrency] = useState<Currency | null>(null);
    const {crypto_currencies, is_crypto_currencies_loading} = useAllCurrencies();
    const [page_currencies, setPageCurrencies] = useState<Currency[]>([]);

    const isTinyScreen = useMediaQuery({maxWidth: "441px"});
    const isSmallScreen = useMediaQuery({maxWidth: "591px"});
    const isMediumScreen = useMediaQuery({maxWidth: "741px"});

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

            {!is_crypto_currencies_loading && crypto_currencies ?
                <table className="crypto-table">
                    <thead className="table-header">
                    <tr>
                        {!isMediumScreen && <th>#</th>}
                        <th>Name</th>
                        {!isMediumScreen && <th>Symbol</th>}
                        <th>Price (USD)</th>
                        {!isMediumScreen && <th>Supply</th>}
                        {!isSmallScreen && <th>VWAP (24Hr)	</th>}
                        {!isTinyScreen && <th>Vol (24Hr)</th>}
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