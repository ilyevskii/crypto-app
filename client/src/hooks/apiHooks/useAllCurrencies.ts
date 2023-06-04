import {useQuery} from "react-query";
import {CoincapService, Currency, ResultType} from "services";


export const useAllCurrencies = () => {


    const {data, isLoading, isError, error, refetch} = useQuery<Currency[] | undefined, Error>(["all_currencies"],

        async () => {
            const result: ResultType = await CoincapService.getAllCurrencies();

            if (result.type === "success") {
                return result.data;
            } else {
                throw new Error(JSON.stringify(result.data));
            }
        });


    return {
        crypto_currencies: data!,
        is_crypto_currencies_loading: isLoading,
        is_crypto_currencies_error: isError,
        crypto_currencies_error: error,
        refresh_currencies: refetch
    };

};