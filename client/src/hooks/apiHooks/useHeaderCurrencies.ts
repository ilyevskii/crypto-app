import {useQuery} from "react-query";
import {CoincapService, HeaderCurrency, ResultType} from "services";


export const useHeaderCurrencies = () => {

    const {data, isLoading, isError, error} = useQuery<HeaderCurrency[] | undefined, Error>(["header_currencies"],

        async () => {
            const result: ResultType = await CoincapService.getHeaderCurrencies();

            if (result.type === "success") {
                return result.data;
            }
            else {
                throw new Error(JSON.stringify(result.data));
            }
        },
        {
            refetchInterval: 15000
        });


    return {
        header_currencies: data!,
        is_header_currencies_loading: isLoading,
        is_header_currencies_error: isError,
        header_currencies_error: error
    };

};