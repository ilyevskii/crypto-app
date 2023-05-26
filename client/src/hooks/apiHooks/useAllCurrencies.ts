import {useQuery} from "react-query";
import {CoincapService, Currency, ResultType} from "services";
import {useSearchParams} from "hooks";


export const useAllCurrencies = () => {

    const {page} = useSearchParams();

    const {data, isLoading, isError, error, refetch} = useQuery<Currency[] | undefined, Error>(["all_currencies"],

        async () => {
            const result: ResultType = await CoincapService.getAllCurrencies();

            if (result.type === "success") {
                const curr_page = parseInt(page || "1") - 1;
                return result.data.slice(curr_page * 15, Math.min(curr_page * 15 + 15, result.data.length));
            }
            else {
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