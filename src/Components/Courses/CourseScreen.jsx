import React, { useEffect, useState } from 'react'
import CourseServices from '../../services/CourseServices'


export const CourseScreen = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        getTeachers()
      }, [])

    const getTeachers = ()=>{
        CourseServices.getAllCoursess()
        .then(response=>{
            setCourses(response.data.courses)
            
            
        })
        .catch(e=>{
            console.log(e)
        })
    }
   
    
    

  return (
    <div className='container'>
        <table className='table mt-5 table-striped'>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Nivel de estudio</th>
                   
                </tr>
                

            </thead>
            <tbody>
                {
                courses.length>0 ? 
                (
                    courses.map(course=>(
                        <tr key={course.id}>
                            <th scope='row'>{course.id}</th>
                            <th>{course.name}</th>
                            <th>{course.description}</th>
                            <th>{course.level}</th>
                           
                        </tr>
                        
                    ))

                ): 
                (
                    <tr>
                         <td>No hay Cursos</td>
                       </tr>
                )
                
                }
                
            </tbody>
        </table>

    </div>
  )
}
