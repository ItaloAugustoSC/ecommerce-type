import axios, { AxiosPromise, AxiosResponse } from "axios"
import { ProductsData } from "../interface/ProductsData";
import { useQuery } from "@tanstack/react-query";
import { ContractResponse } from "../interface/ContractResponse";

const API_URL = "http://localhost:8081/ecommerce";

const fetchData =async (): AxiosPromise<ContractResponse> => {
    const response = axios.get(API_URL+ "/v1/products")
    return response;
}

export function useProductData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['product-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data.response
    }

}

