import {createContext, useReducer, useContext} from "react";
import React, {Context} from "react";
import {PortfolioReducer} from "./PortfolioReducer";
import {Portfolio, PortfolioContextInterface, AuthContextProviderProps, PortfolioCurrency} from "./PortfolioTypes";


const INITIAL_STATE : PortfolioContextInterface = {
    portfolio: localStorage.getItem("portfolio") ? JSON.parse(localStorage.getItem("portfolio")!) :
                    {total_investments: 0, total_currencies: 0} as Portfolio,
    currencies: localStorage.getItem("currencies") ? JSON.parse(localStorage.getItem("currencies")!) : [] as PortfolioCurrency[],
    setPortfolio: () => {},
    setCurrencies: () => {},
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


export const PortfolioContextProvider = ({children}: AuthContextProviderProps) => {
    const [state, dispatch] = useReducer(PortfolioReducer, INITIAL_STATE);

    const setPortfolio = (payload: Portfolio) => {
        dispatch({ type: "SET_PORTFOLIO", portfolio_payload: payload });
        localStorage.setItem("portfolio", JSON.stringify(payload));
    }

    const setCurrencies = (payload: PortfolioCurrency[]) => {
        dispatch({type: "SET_CURRENCIES", currencies_payload: payload});
        localStorage.setItem("currencies", JSON.stringify(payload));
    }


    return (
        <PortfolioContext.Provider
            value={{
                portfolio: state.portfolio,
                currencies: state.currencies,
                setPortfolio: setPortfolio,
                setCurrencies: setCurrencies,
                dispatch
            }}
        >
            {children}
        </PortfolioContext.Provider>
    );

}
