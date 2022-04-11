import http from '../http-common'

const getAllCoursess=()=>{
    return http.get("courses/")
}

export default {getAllCoursess};