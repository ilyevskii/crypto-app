import React, {useEffect, useState} from 'react';
import './HeaderCurrencies.scss';

import {ICurrency} from "services";
import {useAllCurrencies} from "hooks";
import {useMediaQuery} from "react-responsive";


export const HeaderCurrencies = () => {

    const [header_currencies, setHeaderCurrencies] = useState<Array<ICurrency>>([]);
    const {crypto_currencies, is_crypto_currencies_loading} = useAllCurrencies();
    const isSmallScreen = useMediaQuery({maxWidth: "591px"});

    useEffect(() => {
        if (!is_crypto_currencies_loading && crypto_currencies) setHeaderCurrencies(crypto_currencies.slice(0, 3));
    }, [crypto_currencies, is_crypto_currencies_loading])


    return (
        <ul className="header__currencies">
            {!is_crypto_currencies_loading && header_currencies &&
                <>
                    {header_currencies.map((currency: ICurrency) => (
                        <li className={`header__currencies-item`} key={currency.id}>
                            <p>{currency.name}: <span className="weight_semi-bold">{currency.priceUsd}$</span></p>
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
