import {Dispatch, ReactNode} from "react";

export interface IPortfolio {
    balance: string;
    is_profit: boolean;
    difference_usd: string;
    difference_percent: string;
    currencies: IPortfolioCurrency[];
}

export interface IPortfolioCurrency {
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

export interface IPortfolioContextProviderProps {
    children: ReactNode;
}

export interface IPortfolioContext {
    portfolio: IPortfolio;
    setPortfolio: (payload: IPortfolio) => void;
    dispatch: Dispatch<IPortfolioAction>;
}

export interface IPortfolioState {
    portfolio: IPortfolio;
}

export interface IPortfolioAction {
    type: string;
    portfolio_payload: IPortfolio;
}