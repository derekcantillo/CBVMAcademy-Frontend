import React, { useEffect, useState } from 'react'
import CourseServices from '../../services/CourseServices'
import { CourseAddForm } from './CourseAddForm'


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
    const addCourse=(course)=>{
        CourseServices.createCourse(course)
            .then(response=>{
                const newCourse={
                    id: course.id,
                    name: course.name,
                    description: course.description,
                    level: course.level
                }

                setCourses([...courses, newCourse])

                console.log(response.data)
            })

            .catch(e=>{
                console.log(e)
            })
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-8'>
                <table className='table mt-5 table-striped'>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Nivel de estudio</th>
                            <th scope="col">Acciones</th>
                        
                        </tr>
                        

                    </thead>
                    <tbody>
                        {
                        courses.length>0 ? 
                        (
                            courses.map(course=>(
                                <tr key={course.id}>
                                    <th scope='row'>{course.id}</th>
                                    <td>{course.name}</td>
                                    <td>{course.description}</td>
                                    <td>{course.level}</td>
                                    <td>
                                        <button className='btn btn-warning'>Editar</button>
                                        <button className='btn btn-danger'>Eliminar</button>
                                    </td>
                                    <th></th>
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
            
            <div className='col-4 mt-5'>
            <CourseAddForm addCourse={addCourse}/>

            </div>

        </div>
        
        

    </div>
  )
}
