import {useQuery} from "react-query";
import {CoincapService, ICurrency, IResultType} from "services";
import {useSearchParams} from "hooks";


export const usePageCurrencies = () => {

    const {page} = useSearchParams();
    const {data, isLoading, isError, error, refetch} = useQuery<Array<ICurrency> | undefined, Error>(["page_currencies", page],

        async () => {
            const result: IResultType = await CoincapService.getAllCurrencies(page!);

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