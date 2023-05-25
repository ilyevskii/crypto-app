import React from 'react';
import './CryptoTableItem.scss';

import {useNavigate} from "react-router-dom";

interface TableItemProps {
    currency: any;
    index: number;
}


export function CryptoTableItem(props: TableItemProps) {

    const {currency, index} = props;
    const navigate = useNavigate();

    return (
        <tr className="crypto-table-item" onClick={() => navigate(`/currency/${currency.id}`)}>
            <td>{index}</td>
            <td>{currency.name}</td>
            <td>{currency.symbol}</td>
            <td>{parseFloat(currency.priceUsd).toFixed(3)}</td>
            <td>{parseFloat(currency.vwap24Hr).toFixed(3)}</td>
            <td>{parseFloat(currency.volumeUsd24Hr).toFixed(3)}</td>
            <td className={`color-${currency.changePercent24Hr[0] === "-" ? "failure" : "success"}`}>
                {currency.changePercent24Hr.slice(0, 5)}%
            </td>
            <td>
                <button className="add-currency-btn bold">+</button>
            </td>
        </tr>
    );
}