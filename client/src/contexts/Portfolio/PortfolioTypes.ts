import {Dispatch, ReactNode} from "react";

export interface Portfolio {
    balance: string;
    is_profit: boolean;
    difference_usd: string;
    difference_percent: string;
    currencies: PortfolioCurrency[];
}

export interface PortfolioCurrency {
    id: string;
    rank: string;
    amount: number;
    initial_investments: string;
    name: string;
    priceUsd: string;
    current_investments: string;
    is_profit: boolean;
    difference_percent: string;
    difference_usd: string;
}

export interface PortfolioContextProviderProps {
    children: ReactNode;
}

export interface PortfolioContextInterface {
    portfolio: Portfolio;
    setPortfolio: (payload: Portfolio) => void;
    dispatch: Dispatch<Action>;
}

export interface PortfolioState{
    portfolio: Portfolio;
}

export interface Action {
    type: string;
    portfolio_payload: Portfolio;
}