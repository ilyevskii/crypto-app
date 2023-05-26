import React from 'react';
import './ChangesSchedule.scss';
import {HistoryItem} from "services";
import {ModifiedHistory} from "../../../services/CoincapService/Types";


import {Line} from 'react-chartjs-2';
import {
    Chart,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';


Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

interface Props {
    changes: ModifiedHistory;
    profit: boolean;
}


export function ChangesSchedule(props: Props) {


    const {hours, prices, min, max} = props.changes;

    const options={
        responsive: true,
        scales: {
            y: {
                min: min,
                max: max
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }

    const change = {
        labels: hours,
        datasets: [
            {
                fill: true,
                data: hours.map((value, index) => prices[index]),
                pointRadius: 0,
                pointHoverRadius: 5,
                borderColor: props.profit ? 'rgb(24, 198, 131)' : 'rgb(244, 67, 54)',
                backgroundColor: props.profit ? 'rgba(24, 198, 131, 0.2)' : 'rgb(244, 67, 54, 0.2)',
            },
        ],
    };

    return (
        <Line options={options} data={change} className="changes-schedule"/>
    );
}