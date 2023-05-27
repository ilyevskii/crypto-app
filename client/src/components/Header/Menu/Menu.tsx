import React, {useEffect, useState} from 'react';
import './Menu.scss';
import {Currency, HeaderCurrency} from "services";
import {useAllCurrencies} from "hooks";


export function Menu() {

    const [header_currencies, setHeaderCurrencies] = useState<Currency[]>([]);
    const {crypto_currencies, is_crypto_currencies_loading} = useAllCurrencies();

    useEffect(() => {
        if (!is_crypto_currencies_loading && crypto_currencies) setHeaderCurrencies(crypto_currencies.slice(0, 3));
    }, [crypto_currencies])

    return (
        <div id="menu">
            <ul className="menu-list">
                {!is_crypto_currencies_loading && header_currencies ?
                    <>
                        {header_currencies.map((currency: HeaderCurrency) => (
                            <li className={`menu-item`} key={currency.id}>
                                <p>{currency.name}: <span className="semi-bold">{currency.priceUsd}$</span></p>
                                <p className={`color-${currency.profit ? 'success' : 'failure'}`}>
                                    {currency.changePercent24Hr}%
                                </p>
                            </li>
                        ))}
                    </>
                    :
                    <div>Loading...</div>
                }
            </ul>
        </div>
    );
}
