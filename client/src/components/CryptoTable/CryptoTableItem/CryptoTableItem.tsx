import React, {MouseEvent} from 'react';
import './CryptoTableItem.scss';

import {useNavigate} from 'react-router-dom';
import {Currency} from 'components';

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
                <td>{parseFloat(currency.priceUsd).toFixed(3)}</td>
                <td>{parseFloat(currency.vwap24Hr).toFixed(3)}</td>
                <td>{parseFloat(currency.volumeUsd24Hr).toFixed(3)}</td>
                <td className={`color-${currency.changePercent24Hr[0] === "-" ? "failure" : "success"}`}>
                    {currency.changePercent24Hr.slice(0, 5)}%
                </td>
                <td>
                    <button
                        className="add-currency-control bold"
                        onClick={(event: MouseEvent) => {handleClick(event, currency)}}
                    >+</button>
                </td>
            </tr>
        </>
    );
}