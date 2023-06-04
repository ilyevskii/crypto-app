import axios from "axios";
import {UtilitiesService} from "./UtilitiesService";
import {IResultType} from "./Types";


export class CoincapService {

    private static readonly url: string = "https://api.coincap.io/v2";


    public static async getAllCurrencies(): Promise<IResultType> {

        try {
            const response = await axios.get(`${this.url}/assets?limit=750`, {headers: {"Content-Type": "application/json"}});
            return {
                type: "success",
                data: response.data.data.map((currency: any) => {
                    return UtilitiesService.transformCurrency(currency)
                })
            }
        } catch (err: any) {
            return {
                type: "error",
                data: {
                    status_code: err.response?.status,
                    error: err.response?.data.error,
                    message: err.response?.data.message
                }
            }
        }
    }

    public static async getCurrencyInfo(id: string): Promise<IResultType> {

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
        } catch (err: any) {
            return {
                type: "error",
                data: {
                    status_code: err.response?.status,
                    error: err.response?.data.error,
                    message: err.response?.data.message
                }
            }
        }
    }

}