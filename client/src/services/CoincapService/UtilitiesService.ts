import {ICurrency, IHistoryItem} from "./Types";


export class UtilitiesService {

    public static transformCurrency(currency: any, is_single: boolean = false, timestamp?: number): ICurrency {

        const transformed: ICurrency = {
            id: currency.id,
            rank: currency.rank,
            symbol: currency.symbol,
            name: currency.name,
            supply: UtilitiesService.sliceNum(currency.supply),
            volumeUsd24Hr: UtilitiesService.sliceNum(currency.volumeUsd24Hr),
            priceUsd: UtilitiesService.sliceNum(currency.priceUsd),
            profit: !currency.changePercent24Hr?.startsWith("-"),
            changePercent24Hr: UtilitiesService.sliceNum(currency.changePercent24Hr),
            vwap24Hr: UtilitiesService.sliceNum(currency.vwap24Hr)
        }

        if (is_single) {
            const date = new Date(timestamp!);
            transformed.date = date.toLocaleDateString("en-GB", {day: "numeric", month: "long", year: "numeric"});
            transformed.time = date.toLocaleTimeString("en-US", {
                hour12: false,
                hourCycle: "h23",
                hour: "2-digit",
                minute: "2-digit"
            });
            transformed.marketCapUsd = UtilitiesService.sliceNum(currency.marketCapUsd);
        }

        return transformed;
    }

    public static transformHistory(history: IHistoryItem[]): any {

        const prices: number[] = [];
        const hours: string[] = [];

        let min = 1 / 0;
        let max = 0;

        for (let item of history) {
            const date = new Date(item.time);
            const item_hour = date.toLocaleDateString("en-US", {hour: "numeric", hourCycle: "h12"}).slice(-5);
            const item_price = Number(item.priceUsd);

            if (!hours.includes(item_hour)) {
                prices.push(item_price);
                hours.push(item_hour);

                if (item_price < min) min = item_price;
                if (item_price > max) max = item_price;
            }
        }

        return {
            min: min * 0.99,
            max: max * 1.01,
            hours: hours,
            prices: prices
        }
    }

    private static sliceNum(num: string) {
        return Number(num) >= 1000000 ? (Number(num) / 1000000).toFixed(2) + "m" : Number(num).toFixed(3);
    }
}