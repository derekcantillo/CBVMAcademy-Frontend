import http from '../http-common'

const getAllStudents=()=>{
    return http.get("students/")
}

export default {getAllStudents};