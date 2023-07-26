import api from "../constants/api";

const authService = {
    login(data){
        return api.post('/auth/login', data)
    },

    register(data){
        return api.post('/auth/register', data)
    },

    changePassword(data){
        return api.post('/auth/change-password', data)
    }
}

export default authService