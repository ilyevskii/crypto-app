export interface IResultType {
    type: string;
    data: any;
}

export interface ICurrency {
    id: string;
    rank: string;
    symbol: string;
    name: string;
    supply: string;
    volumeUsd24Hr: string;
    priceUsd: string;
    profit: boolean;
    changePercent24Hr: string;
    vwap24Hr: string;
    date?: string;
    time?: string;
    marketCapUsd?: string;
}

export interface IHistoryItem {
    priceUsd: string;
    time: string;
}

export interface IModifiedHistory {
    min: number;
    max: number;
    hours: Array<string>;
    prices: Array<Array<number>>;
}