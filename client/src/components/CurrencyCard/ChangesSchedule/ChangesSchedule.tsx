import React from 'react';
import './ChangesSchedule.scss';

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

export function ChangesSchedule() {

    const hours = ['1AM', '1AM', '1AM', '1AM', '1AM', '1AM', '1AM'];
    const prices = [200, 345, 400, 600, 200, 500, 234, 900];
    const {min, max, profit} = {min: 0, max: 1000, profit: true};

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

    const changes = {
        labels: hours,
        datasets: [
            {
                fill: true,
                data: hours.map((value, index) => prices[index]),
                pointRadius: 0,
                pointHoverRadius: 5,
                borderColor: profit ? 'rgb(244, 67, 54)' : 'rgb(24, 198, 131)',
                backgroundColor: profit ? 'rgb(244, 67, 54, 0.2)' : 'rgba(24, 198, 131, 0.2)',
            },
        ],
    };

    return (
        <Line options={options} data={changes} className="changes-schedule"/>
    );
}