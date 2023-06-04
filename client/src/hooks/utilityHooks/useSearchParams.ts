import {useSearchParams as useParams} from "react-router-dom";


export const useSearchParams = () => {

    const [currentSearchParams, setSearchParams] = useParams();


    const setPageSearchParam = (page: number): void => {
        currentSearchParams.set("page", page.toString());
        setSearchParams(currentSearchParams);
    }


    return {
        currentSearchParams,
        page: currentSearchParams.get("page"),
        setPageSearchParam
    };
}