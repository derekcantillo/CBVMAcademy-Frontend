import React, { useEffect, useState } from 'react'

import StudentServices from '../../services/StudentServices'
import { StudentAddForm } from './StudentAddForm'

export const StudentScreen = () => {

    const [listaStudent, setlistaStudent] = useState([])

    useEffect(() => {
        getStudent()
      }, [])

    const getStudent = ()=>{
        StudentServices.getAllStudents()
        .then(response=>{
            setlistaStudent(response.data.students)
            
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
                            <th scope="col">Documento</th>
                            <th scope="col">Contacto</th>
                            <th scope="col">Email</th>
                            <th scope="col">Tipo de Sangre</th>
                            <th scope="col">Grupo Familiar</th>
                            <th scope="col">Acciones</th>
                        </tr>
                        

                    </thead>
                    <tbody>
                        {
                        listaStudent.length>0 ? 
                        (
                            listaStudent.map(students=>(
                                <tr key={students.id}>
                                    <th scope='row'>{students.id}</th>
                                    <td>{students.name}</td>
                                    <td>{students.numdoc}</td>
                                    <td>{students.phone}</td>
                                    <td>{students.email}</td>
                                    <td>{students.blood}</td>
                                    <td>{students.id_group_id}</td>
                                    <td>
                                        <button className='btn btn-warning'>Editar</button>
                                        <button className='btn btn-danger'>Eliminar</button>
                                    </td>

                                </tr>
                                
                            ))

                        ): 
                        (
                            <tr>
                                <td>No hay estudiantes</td>
                            </tr>
                        )
                        
                        }
                    
                    </tbody>
                </table>
            </div>
            <div className='col-4 mt-5'>
                <StudentAddForm/>
            </div>
        </div>
        
        

    </div>
  )
}
