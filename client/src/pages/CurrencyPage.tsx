import React from 'react';
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {useCurrencyInfo} from "hooks";
import {Loader} from "@mantine/core";
import {CurrencyCard} from "components";

export const CurrencyPage = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const {currency, is_currency_loading, is_currency_error} = useCurrencyInfo(id || "1");

    return (
        <main className="container narrow">
            {is_currency_error && <Navigate to={"404"}/>}

            {!is_currency_loading && currency ?
                <CurrencyCard currency={currency}/>
                :
                <div className="loader-wrapper">
                    <Loader size="80px" color="yellow"/>
                </div>
            }
        </main>
    );
}
