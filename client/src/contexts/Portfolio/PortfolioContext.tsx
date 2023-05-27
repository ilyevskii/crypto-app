import {createContext, useReducer, useContext} from "react";
import React, {Context} from "react";
import {PortfolioReducer} from "./PortfolioReducer";
import {Portfolio, PortfolioContextInterface, PortfolioContextProviderProps, PortfolioCurrency} from "./PortfolioTypes";


const INITIAL_STATE : PortfolioContextInterface = {
    portfolio: localStorage.getItem("portfolio") ? JSON.parse(localStorage.getItem("portfolio")!) :
        {
            balance: "0",
            is_profit: true,
            difference_percent: "0",
            difference_usd: "0",
            currencies: [] as PortfolioCurrency[]
        } as Portfolio,
    setPortfolio: () => {},
    dispatch: () => {},
};

export const PortfolioContext: Context<PortfolioContextInterface> = createContext<PortfolioContextInterface>(INITIAL_STATE);

export function usePortfolio() {
    const context: PortfolioContextInterface | undefined = useContext(PortfolioContext);
    if (context === undefined) {
        throw new Error('usePortfolio must be used within an PortfolioProvider');
    }
    return context;
}


export const PortfolioContextProvider = ({children}: PortfolioContextProviderProps) => {
    const [state, dispatch] = useReducer(PortfolioReducer, INITIAL_STATE);

    console.log(state.portfolio)
    const setPortfolio = (payload: Portfolio) => {
        dispatch({ type: "SET_PORTFOLIO", portfolio_payload: payload });
        localStorage.setItem("portfolio", JSON.stringify(payload));
    }

    return (
        <PortfolioContext.Provider
            value={{
                portfolio: state.portfolio,
                setPortfolio: setPortfolio,
                dispatch
            }}
        >
            {children}
        </PortfolioContext.Provider>
    );

}
