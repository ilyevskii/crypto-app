import React, {useEffect, useState} from 'react';

import {CryptoTable, Pagination} from "components";
import {usePageCurrencies, useSearchParams} from "hooks";
import {Navigate} from "react-router-dom";
import {Loader} from "@mantine/core";
import {ICurrency} from "services";


export const MainPage = () => {

    const {page, setPageSearchParam} = useSearchParams();
    const {crypto_currencies, is_crypto_currencies_loading, is_crypto_currencies_error} = usePageCurrencies();

    useEffect(() => {
       if (!page || isNaN(+page) || +page > 100) setPageSearchParam(1);
    }, [page])


    return (
        <main className="container">
            {is_crypto_currencies_error && <Navigate to={"404"}/>}

            {!is_crypto_currencies_loading && crypto_currencies ?
                <CryptoTable page_currencies={crypto_currencies}/>
                :
                <div className="loader-wrapper">
                    <Loader size="80px" color="yellow"/>
                </div>
            }
            <Pagination total={100}/>
        </main>
    );
}
