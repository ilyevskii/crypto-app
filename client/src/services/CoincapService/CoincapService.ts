import axios from "axios";
import {UtilitiesService} from "./UtilitiesService";
import {ResultType} from "./Types";


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

}