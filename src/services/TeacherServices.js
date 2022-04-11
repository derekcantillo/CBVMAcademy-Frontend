import http from '../http-common'

const getAllTeachers=()=>{
    return http.get("teachers/")
}

export default {getAllTeachers};