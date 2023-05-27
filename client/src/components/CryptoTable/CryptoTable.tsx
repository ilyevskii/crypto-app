import React, {MouseEvent, useEffect, useState} from 'react';

import {CryptoTableItem, ModalWindow, AddCurrencyWindow} from 'components';
import {Currency} from 'services';
import {useAllCurrencies, useSearchParams} from 'hooks';


export function CryptoTable() {

    const {page} = useSearchParams();
    const [currency, setCurrency] = useState<Currency | null>(null);
    const {crypto_currencies, is_crypto_currencies_loading} = useAllCurrencies();
    const [page_currencies, setPageCurrencies] = useState<Currency[]>([]);

    const handleControllerClick = (event: MouseEvent, currency?: Currency | null) => {
        if (currency) setCurrency(currency);
        else setCurrency(null);
        event.stopPropagation();
    }

    useEffect(() => {
        if (page && crypto_currencies && !is_crypto_currencies_loading) {
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
                        <th>#</th>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Price (USD)</th>
                        <th>Supply</th>
                        <th>VWAP (24Hr)	</th>
                        <th>Vol (24Hr)</th>
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
                <div>Loading...</div>
            }
        </>
    );
}