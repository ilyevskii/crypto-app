import axios from "axios";
import {UtilitiesService} from "./UtilitiesService";
import {ResultType} from "./Types";
import {PortfolioCurrency} from "contexts";


export class CoincapService {

    private static readonly url: string = "https://api.coincap.io/v2";


    public static async getAllCurrencies(): Promise<ResultType> {

        try {
            const response = await axios.get(`${this.url}/assets?limit=750`, {headers: {"Content-Type": "application/json"}});
            return {
                type: "success",
                data: response.data.data.map((currency: any) => {return UtilitiesService.transformCurrency(currency)})
            }
        }
        catch (err: any) {
            return {
                type: "error",
                data: ""
            }
        }
    }


    public static async getHeaderCurrencies(): Promise<ResultType> {

        try {
            const response = await axios.get(`${this.url}/assets?limit=3`, {headers: {"Content-Type": "application/json"}});
            return {
                type: "success",
                data: response.data.data.map((currency: any) => {return UtilitiesService.transformHeaderCurrency(currency)})
            }
        }
        catch (err: any) {
            return {
                type: "error",
                data: ""
            }
        }
    }

    public static async getCurrencyInfo(id: string): Promise<ResultType> {

        try {
            const info_response = await axios.get(`${this.url}/assets/${id}`, {headers: {"Content-Type": "application/json"}});
            const changes_response = await axios.get(`${this.url}/assets/${id}/history?interval=m1`,
                {headers: {"Content-Type": "application/json"}}
            );

            return {
                type: "success",
                data: {
                    info: UtilitiesService.transformCurrency(info_response.data.data, true, info_response.data.timestamp),
                    changes: UtilitiesService.transformHistory(changes_response.data.data)
                }
            }
        }
        catch (err: any) {
            return {
                type: "error",
                data: ""
            }
        }
    }

}