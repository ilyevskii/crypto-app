import {IPortfolioState, IPortfolioAction} from "./PortfolioTypes";


export const PortfolioReducer = (state: IPortfolioState, action: IPortfolioAction): IPortfolioState => {

    switch (action.type) {
        case "SET_PORTFOLIO":
            return {
                ...state,
                portfolio: action.portfolio_payload!
            }
        default:
            return state;
    }
}