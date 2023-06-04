import {useQuery} from "react-query";
import {CoincapService, ICurrency, IResultType} from "services";


export const useAllCurrencies = () => {


    const {data, isLoading, isError, error, refetch} = useQuery<Array<ICurrency> | undefined, Error>(["all_currencies"],

        async () => {
            const result: IResultType = await CoincapService.getAllCurrencies();

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