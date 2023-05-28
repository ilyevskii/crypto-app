import React, {MouseEvent} from 'react';

import {useNavigate} from 'react-router-dom';
import {Currency} from 'services';
import {useMediaQuery} from "react-responsive";

interface TableItemProps {
    currency: Currency;
    handleClick: (event: MouseEvent, currency: Currency) => void;
}


export function CryptoTableItem(props: TableItemProps) {


    const {currency, handleClick} = props;
    const navigate = useNavigate();

    const isTinyScreen = useMediaQuery({maxWidth: "441px"});
    const isSmallScreen = useMediaQuery({maxWidth: "591px"});
    const isMediumScreen = useMediaQuery({maxWidth: "741px"});


    const handleTableItemClick = () => {
        navigate(`/currency/${currency.id}`);
    }


    return (
        <>
            <tr className="crypto-table-item" onClick={handleTableItemClick}>
                {!isMediumScreen && <td>{currency.rank}</td>}
                <td>{currency.name}</td>
                {!isMediumScreen && <td>{currency.rank}</td>}
                <td>{currency.priceUsd}</td>
                {!isSmallScreen && <td>{currency.supply}</td>}
                {!isMediumScreen && <td>{currency.vwap24Hr}</td>}
                {!isTinyScreen && <td>{currency.volumeUsd24Hr}</td>}
                <td className={`color-${currency.profit ? "success" : "failure"}`}>
                    {currency.changePercent24Hr}%
                </td>
                <td>
                    <button
                        className="toggle-currency-control-btn bold"
                        onClick={(event: MouseEvent) => {handleClick(event, currency)}}
                    >+</button>
                </td>
            </tr>
        </>
    );
}