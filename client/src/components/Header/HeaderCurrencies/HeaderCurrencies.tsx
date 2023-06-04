import React, {useEffect, useState} from 'react';
import './HeaderCurrencies.scss';
import {useQueryClient} from "react-query";
import {ICurrency} from "services";
import {usePageCurrencies} from "hooks";
import {useMediaQuery} from "react-responsive";


export const HeaderCurrencies = () => {

    const [header_currencies, setHeaderCurrencies] = useState<Array<ICurrency>>([]);
    const {crypto_currencies} = usePageCurrencies();
    const isSmallScreen = useMediaQuery({maxWidth: "591px"});
    const client = useQueryClient();

    useEffect(() => {
        if (crypto_currencies) {
            const header_currs = client.getQueryData(['page_currencies', '1']);
            if (header_currs) {
                setHeaderCurrencies((header_currs as Array<ICurrency>).slice(0, 3));
            }
            else {
                setHeaderCurrencies(crypto_currencies.slice(0, 3));
            }
        }
    }, [crypto_currencies])



    return (
        <ul className="header__currencies">
            {header_currencies &&
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
