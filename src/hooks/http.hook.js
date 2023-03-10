import {useCallback} from "react";

export const useHttp = () => {
    const request = useCallback(async (url, method = "GET", body = null, header = {'Content-type': 'application/json'}) => {
        try{
            const response = await fetch(url, (method, body, header));

            if(!response.ok){
                throw Error(`Couldn't fetch ${url}, status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        }catch (e){
            throw e;
        }
    })
    return {
        request
    };
}