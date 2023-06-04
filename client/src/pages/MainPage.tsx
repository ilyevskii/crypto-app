import React, {useEffect, useState} from 'react';

import {CryptoTable, Pagination} from "components";
import {useAllCurrencies, useSearchParams} from "hooks";
import {Navigate} from "react-router-dom";
import {Loader} from "@mantine/core";
import {ICurrency} from "services";


export function MainPage() {

    const {page, setPageSearchParam} = useSearchParams();
    const {crypto_currencies, is_crypto_currencies_loading, is_crypto_currencies_error} = useAllCurrencies();
    const [page_currencies, setPageCurrencies] = useState<ICurrency[]>([]);

    useEffect(() => {
        if (crypto_currencies) {
            if (!page || isNaN(+page)) setPageSearchParam(1);
            setPageCurrencies(crypto_currencies.slice((+page! - 1) * 15, Math.min((+page! - 1) * 15 + 15, crypto_currencies.length)));
        }
    }, [crypto_currencies, page])


    return (
        <main className="container">
            {is_crypto_currencies_error && <Navigate to={"404"}/>}

            {!is_crypto_currencies_loading && crypto_currencies ?
                <CryptoTable page_currencies={page_currencies}/>
                :
                <div className="loader-wrapper">
                    <Loader size="80px" color="yellow"/>
                </div>
            }
            <Pagination total={50}/>
        </main>
    );
}
