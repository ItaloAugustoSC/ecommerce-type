import { ProductsData } from "./ProductsData";

export interface ContractResponse {
    path: string,
    response: ProductsData[],
    timestamp: string
}