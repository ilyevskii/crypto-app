import {Dispatch, ReactNode} from "react";

export interface Portfolio {
    initial_investments: number;
    current_investments: number;
}

export interface PortfolioCurrency {
    id: string;
    amount: number;
    initial_investments: number;
    current_investments: number;
}

export interface AuthContextProviderProps {
    children: ReactNode;
}

export interface PortfolioContextInterface {
    portfolio: Portfolio;
    currencies: PortfolioCurrency[];
    setPortfolio: (payload: any) => void;
    setCurrencies: (payload: any) => void;
    dispatch: Dispatch<Action>;
}

export interface PortfolioState{
    portfolio: Portfolio;
    currencies: PortfolioCurrency[];
}

export interface Action {
    type: string;
    portfolio_payload?: Portfolio;
    currencies_payload?: PortfolioCurrency[];
}