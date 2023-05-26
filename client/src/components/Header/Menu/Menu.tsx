import React from 'react';
import './Menu.scss';
import {useHeaderCurrencies} from "hooks";
import {HeaderCurrency} from "services";


export function Menu() {

    const {header_currencies, is_header_currencies_loading} = useHeaderCurrencies();

    return (
        <div id="menu">
            <ul className="menu-list">
                {!is_header_currencies_loading && header_currencies ?
                    <>
                        {header_currencies.map((currency: HeaderCurrency) => (
                            <li className={`menu-item`}>
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
