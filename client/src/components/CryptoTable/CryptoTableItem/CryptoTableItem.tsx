import React, {MouseEvent} from 'react';

import {useNavigate} from 'react-router-dom';
import {ICurrency} from 'services';

interface ITableItemProps {
    currency: ICurrency;
    handleClick: (event: MouseEvent, currency: ICurrency) => void;
}


export const CryptoTableItem = (props: ITableItemProps) => {


    const {currency, handleClick} = props;
    const navigate = useNavigate();

    const handleTableItemClick = () => {
        navigate(`/currency/${currency.id}`);
    }


    return (
        <>
            <tr onClick={handleTableItemClick} className="crypto-table__item">
                <td className="crypto-table__item-rank">{currency.rank}</td>
                <td className="crypto-table__item-name">{currency.name}</td>
                <td className="crypto-table__item-symbol">{currency.symbol}</td>
                <td className="crypto-table__item-price">{currency.priceUsd}</td>
                <td className="crypto-table__item-supply">{currency.supply}</td>
                <td className="crypto-table__item-vwap">{currency.vwap24Hr}</td>
                <td className="crypto-table__item-volume">{currency.volumeUsd24Hr}</td>
                <td className="crypto-table__item-change">{currency.changePercent24Hr}</td>
                <td className="crypto-table__item-buy">
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