import http from '../http-common'

const getAllGroup=()=>{
    return http.get("groups/")
}

export default {getAllGroup};