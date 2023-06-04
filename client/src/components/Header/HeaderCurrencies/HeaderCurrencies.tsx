import React, {useEffect, useState} from 'react';
import './HeaderCurrencies.scss';

import {ICurrency} from "services";
import {useAllCurrencies} from "hooks";
import {useMediaQuery} from "react-responsive";


export function HeaderCurrencies() {

    const [header_currencies, setHeaderCurrencies] = useState<ICurrency[]>([]);
    const {crypto_currencies, is_crypto_currencies_loading} = useAllCurrencies();
    const isSmallScreen = useMediaQuery({maxWidth: "591px"});

    useEffect(() => {
        if (!is_crypto_currencies_loading && crypto_currencies) setHeaderCurrencies(crypto_currencies.slice(0, 3));
    }, [crypto_currencies, is_crypto_currencies_loading])


    return (
        <ul className="header-currencies">
            {!is_crypto_currencies_loading && header_currencies &&
                <>
                    {header_currencies.map((currency: ICurrency) => (
                        <li className={`header-currencies-item`} key={currency.id}>
                            <p>{currency.name}: <span className="semi-bold">{currency.priceUsd}$</span></p>
                            {!isSmallScreen &&
                                <p className={`color-${currency.profit ? 'success' : 'failure'}`}>
                                    {currency.changePercent24Hr}%
                                </p>
                            }
                        </li>
                    ))}
                </>
            }
        </ul>
    );
}
