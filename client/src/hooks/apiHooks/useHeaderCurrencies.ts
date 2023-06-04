import {useQuery} from "react-query";
import {CoincapService, ICurrency, IResultType} from "services";


export const useHeaderCurrencies = () => {

    const {data, isLoading} = useQuery<Array<ICurrency> | undefined, Error>(["header_currencies"],

        async () => {
            const result: IResultType = await CoincapService.getHeaderCurrencies();

            if (result.type === "success") {
                return result.data;
            } else {
                throw new Error(JSON.stringify(result.data));
            }
        });


    return {
        header_currencies: data!,
        is_header_currencies_loading: isLoading
    };

};