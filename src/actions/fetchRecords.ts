import axios, {AxiosRequestConfig, AxiosRequestHeaders} from "axios";

const { GATSBY_API_HOST } = process.env;

export const fetchRecords = async (resource:string) => {

    const authToken = localStorage.getItem('access_token');

    const headers:AxiosRequestHeaders = {
        "Content-Type": "application/json",
        "x-token": ""
    };

    if(authToken) {
        headers["x-token"] = `Bearer ${ authToken }`;
    }

    const options:AxiosRequestConfig<any> = {
        url:`${ GATSBY_API_HOST }${resource}`,
        method: 'GET',
        headers: headers,
    };

    try {
        const response = await axios(options);

        if(response) {
            return response.data;
        }

    }catch (error) {
        return {
            success: false,
            error
        }
    }

};