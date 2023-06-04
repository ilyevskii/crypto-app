import {useQuery} from "react-query";
import {CoincapService, ICurrency, IResultType} from "services";
import {usePortfolio} from "contexts";


export const usePortfolioCurrencies = () => {

    const {portfolio} = usePortfolio();
    const {data} = useQuery<Array<ICurrency> | undefined, Error>(["portfolio_currencies"],

        async () => {
            const result: IResultType = await CoincapService.getPortfolioCurrencies(portfolio.currencies);

            if (result.type === "success") {
                return result.data;
            } else {
                throw new Error(JSON.stringify(result.data));
            }
        });


    return {
        portfolio_currencies: data!
    };

};