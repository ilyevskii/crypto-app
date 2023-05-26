import React, {MouseEvent} from 'react';

import {useNavigate} from 'react-router-dom';
import {Currency} from 'services';

interface TableItemProps {
    currency: Currency;
    handleClick: (event: MouseEvent, currency: Currency) => void;
}


export function CryptoTableItem(props: TableItemProps) {


    const {currency, handleClick} = props;
    const navigate = useNavigate();


    const handleTableItemClick = () => {
        navigate(`/currency/${currency.id}`);
    }


    return (
        <>
            <tr className="crypto-table-item" onClick={handleTableItemClick}>
                <td>{currency.rank}</td>
                <td>{currency.name}</td>
                <td>{currency.symbol}</td>
                <td>{currency.priceUsd}</td>
                <td>{currency.supply}</td>
                <td>{currency.vwap24Hr}</td>
                <td>{currency.volumeUsd24Hr}</td>
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