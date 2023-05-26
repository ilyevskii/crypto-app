import {PortfolioState, Action} from "./PortfolioTypes";


export const PortfolioReducer = (state: PortfolioState, action: Action): PortfolioState => {

    switch (action.type) {
        case "SET_PORTFOLIO":
            return {
                ...state,
                portfolio: action.portfolio_payload!
            }
        case "SET_CURRENCIES":
            return {
                ...state,
                currencies: action.currencies_payload!
            }
        default:
            return state;
    }
}