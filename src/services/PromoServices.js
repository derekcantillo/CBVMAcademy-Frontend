import http from '../http-common'

const getAllPromos=()=>{
    return http.get("promos/")
}

export default {getAllPromos};