import {useQuery} from "react-query";
import {CoincapService, ICurrency, IResultType} from "services";
import {IModifiedHistory} from "../../services/CoincapService/Types";

export interface ICurrencyInfo {
    info: ICurrency,
    changes: IModifiedHistory
}

export const useCurrencyInfo = (id: string) => {

    const {data, isLoading, isError, error, refetch} = useQuery<ICurrencyInfo | undefined, Error>(["currency", id],

        async () => {
            const result: IResultType = await CoincapService.getCurrencyInfo(id);

            if (result.type === "success") {
                return result.data;
            } else {
                throw new Error(JSON.stringify(result.data));
            }
        });


    return {
        currency: data!,
        is_currency_loading: isLoading,
        is_currency_error: isError,
        currency_error: error,
        refresh_currency: refetch
    };

};