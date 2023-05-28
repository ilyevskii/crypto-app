import {useQuery} from "react-query";
import {CoincapService, Currency, ResultType, HistoryItem} from "services";
import {ModifiedHistory} from "../../services/CoincapService/Types";

export interface CurrencyInfoType {
    info: Currency,
    changes: ModifiedHistory
}

export const useCurrencyInfo = (id: string) => {

    const {data, isLoading, isError, error, refetch} = useQuery<CurrencyInfoType | undefined, Error>(["currency", id],

        async () => {
            const result: ResultType = await CoincapService.getCurrencyInfo(id);

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
        currency: data!,
        is_currency_loading: isLoading,
        is_currency_error: isError,
        currency_error: error,
        refresh_currency: refetch
    };

};