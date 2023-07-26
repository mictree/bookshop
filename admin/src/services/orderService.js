import api from "../constants/api";
import { LOGIN_LS } from "../constants/localStorage";
import { getLocalStorage } from "../utils/localStorageHandle";

const token = getLocalStorage(LOGIN_LS)
const config = {
    headers:{
        Authorization: `Bearer ${token?.accessToken}`
    }
}

const orderService = {
    getOrder(page=1){
        return api.get('/admin/order?offset='+page, config)
    },
    getOrderById(data){
        return api.get(`/admin/order/${data}`, config)
    },
    searchOrder(data){
        return api.get(`/admin/order/search?q=${data}`)
    },
    addOrder(data){
        return api.post('admin/order/add', data)
    },
    updateOrder(data){
        return api.put('admin/order/update', data, config)
    },
    deleteOrder(data){
        return api.delete('admin/order/'+ data, config)
    }
}

export default orderService