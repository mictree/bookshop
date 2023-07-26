import api from "../constants/api";

const publisherService = {
    getPublisher(){
        return api.get('/admin/publisher')
    },
    getPublisherById(data){
        return api.get(`/admin/publisher/${data}`)
    },
    searchPublisher(data){
        return api.get(`/admin/publisher/search?q=${data}`)
    },
    addPublisher(data){
        return api.post('admin/publisher/add', data)
    },
    updatePublisher(data){
        return api.post('admin/publisher/update', data)
    },
    deletePublisher(data){
        return api.delete('admin/publisher/delete', data)
    },
    activePublisher(id){
        return api.put('admin/publisher/active', id)
    },
    unActiveBook(id){
        return api.put('admin/publisher/unactive', id)
    },
}

export default bookService