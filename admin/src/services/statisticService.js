import api from "../constants/api";
import { LOGIN_LS } from "../constants/localStorage";
import { getLocalStorage } from "../utils/localStorageHandle";

const token = getLocalStorage(LOGIN_LS)
const config = token
  ? {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    }
  : {};

const statisticService = {
    getInfo(){
        console.log(config)
        return api.get('/admin/statistic', config)
    },
    
    getSaleStatistic(){
        if(!config)
            return null
        return api.get(`/admin/statistic/sale-by-mouth`, config)
    },

    getBookStatistic(data){
        return api.get(`/admin/statistic/${data}`)
    },

    getUserStatistic(data){
        return api.get(`/admin/statistic/${data}`)
    },

    getPublisherStatistic(data){
        return api.get(`/admin/statistic/${data}`)
    },

}

export default statisticService