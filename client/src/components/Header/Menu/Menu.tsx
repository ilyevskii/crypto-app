import React from 'react';
import './Menu.scss';


export function Menu() {


    return (
        <div id="menu">
            <ul className="menu-list">
                <li className={`menu-item`}>
                    <p>Bitcoin: <span className="semi-bold">27.000$</span></p>
                </li>
                <li className={`menu-item`}>
                    <p>Etherium: <span className="semi-bold">3.000$</span></p>
                </li>
                <li className={`menu-item`}>
                    <p>Ripple: <span className="semi-bold">2$</span></p>
                </li>
            </ul>
        </div>
    );
}
