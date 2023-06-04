import React from 'react';
import './HeaderCurrencies.scss';

import {ICurrency} from "services";
import {useHeaderCurrencies} from "hooks";
import {useMediaQuery} from "react-responsive";


export const HeaderCurrencies = () => {

    const {header_currencies, is_header_currencies_loading} = useHeaderCurrencies();

    const isSmallScreen = useMediaQuery({maxWidth: "591px"});


    return (
        <ul className="header__currencies">
            {!is_header_currencies_loading && header_currencies &&
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
