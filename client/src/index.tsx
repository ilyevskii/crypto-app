import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import {QueryClient, QueryClientProvider} from 'react-query';
import {PortfolioContextProvider} from "contexts";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = new QueryClient();


root.render(
    <QueryClientProvider client={client}>
        <PortfolioContextProvider>
            <App />
        </PortfolioContextProvider>
    </QueryClientProvider>
);
