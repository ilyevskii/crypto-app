import React from 'react';

import {CryptoTable, Pagination} from "components";


export function MainPage() {

    return (
        <main className="container">
            <CryptoTable/>
            <Pagination total={50}/>
        </main>
    );
}
