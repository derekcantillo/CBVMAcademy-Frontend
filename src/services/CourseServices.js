import http from '../http-common'

const getAllCoursess=()=>{
    return http.get("courses/")
}
const createCourse=(data)=>{
    return http.post("courses/", data)
}

export default {getAllCoursess ,  createCourse};