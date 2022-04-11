const API_URL = "http://127.0.0.1:8000/api/students/";


export const getAllStudents = async () => {
    return await fetch(API_URL, {method: 'GET'});
};