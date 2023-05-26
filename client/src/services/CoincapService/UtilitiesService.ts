import {Currency} from "./Types";

export class UtilitiesService {
    public static transformCurrency(currency: any): Currency {

        return {
            id: currency.id,
            rank: currency.rank,
            symbol: currency.symbol,
            name: currency.name,
            supply: Number(currency.supply).toFixed(3),
            volumeUsd24Hr: Number(currency.volumeUsd24Hr).toFixed(3),
            priceUsd: Number(currency.priceUsd).toFixed(3),
            profit: !currency.changePercent24Hr?.startsWith("-"),
            changePercent24Hr: Number(currency.changePercent24Hr).toFixed(3),
            vwap24Hr: Number(currency.vwap24Hr).toFixed(3)
        }
    }
}