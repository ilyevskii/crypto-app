import React, {MouseEvent} from 'react';

import {useNavigate} from 'react-router-dom';
import {ICurrency} from 'services';
import {useMediaQuery} from "react-responsive";

interface ITableItemProps {
    currency: ICurrency;
    handleClick: (event: MouseEvent, currency: ICurrency) => void;
}


export const CryptoTableItem = (props: ITableItemProps) => {


    const {currency, handleClick} = props;
    const navigate = useNavigate();

    const mw442px = useMediaQuery({maxWidth: "442px"});
    const mw593px = useMediaQuery({maxWidth: "53px"});
    const mw741px = useMediaQuery({maxWidth: "741px"});


    const handleTableItemClick = () => {
        navigate(`/currency/${currency.id}`);
    }


    return (
        <>
            <tr onClick={handleTableItemClick}>
                {!mw741px && <td>{currency.rank}</td>}
                <td>{currency.name}</td>
                {!mw741px && <td>{currency.rank}</td>}
                <td>{currency.priceUsd}</td>
                {!mw593px && <td>{currency.supply}</td>}
                {!mw741px && <td>{currency.vwap24Hr}</td>}
                {!mw442px && <td>{currency.volumeUsd24Hr}</td>}
                <td className={`color-${currency.profit ? "success" : "failure"}`}>
                    {currency.changePercent24Hr}%
                </td>
                <td>
                    <button
                        className="button button--toggle weight_bold"
                        onClick={(event: MouseEvent) => {
                            handleClick(event, currency)
                        }}
                    >+
                    </button>
                </td>
            </tr>
        </>
    );
}