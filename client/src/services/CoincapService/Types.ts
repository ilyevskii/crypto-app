export interface ResultType {
    type: string;
    data: any;
}

export interface Currency {
    id: string;
    rank?: string;
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

export interface HistoryItem {
    priceUsd: string;
    time: string;
}

export interface ModifiedHistory {
    min: number;
    max: number;
    hours: string[];
    prices: number[][];
}