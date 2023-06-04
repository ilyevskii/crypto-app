import {createContext, useReducer, useContext} from "react";
import React, {Context} from "react";
import {PortfolioReducer} from "./PortfolioReducer";
import {IPortfolio, IPortfolioContext, IPortfolioContextProviderProps, IPortfolioCurrency} from "./PortfolioTypes";


const INITIAL_STATE: IPortfolioContext = {
    portfolio: localStorage.getItem("portfolio") ? JSON.parse(localStorage.getItem("portfolio")!) :
        {
            balance: "0",
            is_profit: true,
            difference_percent: "0",
            difference_usd: "0",
            currencies: [] as IPortfolioCurrency[]
        } as IPortfolio,
    setPortfolio: () => {
    },
    dispatch: () => {
    },
};

export const PortfolioContext: Context<IPortfolioContext> = createContext<IPortfolioContext>(INITIAL_STATE);

export function usePortfolio() {
    const context: IPortfolioContext | undefined = useContext(PortfolioContext);
    if (context === undefined) {
        throw new Error('usePortfolio must be used within an PortfolioProvider');
    }
    return context;
}


export const PortfolioContextProvider = ({children}: IPortfolioContextProviderProps) => {
    const [state, dispatch] = useReducer(PortfolioReducer, INITIAL_STATE);

    console.log(state.portfolio)
    const setPortfolio = (payload: IPortfolio) => {
        dispatch({type: "SET_PORTFOLIO", portfolio_payload: payload});
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
