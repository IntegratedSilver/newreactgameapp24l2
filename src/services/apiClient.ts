import axios, { AxiosRequestConfig } from "axios";



export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
  }
  

const axiosInstance =  axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0dd22bac11254a89b269a52171c6c0d8'
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint
    }

    getAll(config: AxiosRequestConfig){
        return axiosInstance
            .get(this.endpoint,config)
            .then(res=>res.data)
    }
}

export default APIClient;
