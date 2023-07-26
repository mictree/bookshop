import orderService from "../services/orderService"
import { useQuery } from "./useQuery"


export const useOrder = () => {
    const {data, loading, error} = useQuery(orderService.getAllOrder, [])
    return {data, isLoading: loading, error}   
}