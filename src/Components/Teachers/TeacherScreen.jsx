import React, { useEffect, useState } from 'react'

import TeacherServices from '../../services/TeacherServices'
import { TeacherAddForm } from './TeacherAddForm'

export const TeacherScreen = () => {

    const [teachers, setTeachers] = useState([])

    useEffect(() => {
        getTeachers()
      }, [])

    const getTeachers = ()=>{
        TeacherServices.getAllTeachers()
        .then(response=>{
            setTeachers(response.data.teachers)
            
            
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
                        teachers.length>0 ? 
                        (
                            teachers.map(teachers=>(
                                <tr key={teachers.id}>
                                    <th scope='row'>{teachers.id}</th>
                                    <td>{teachers.name}</td>
                                    <td>{teachers.numdoc}</td>
                                    <td>{teachers.phone}</td>
                                    <td>{teachers.email}</td>
                                    <td>{teachers.blood}</td>
                                    <td>{teachers.id_group_id}</td>
                                    <td>
                                        <button className='btn btn-warning'>Editar</button>
                                        <button className='btn btn-danger'>Eliminar</button>
                                    </td>
                                </tr>
                                
                            ))

                        ): 
                        (
                            <tr>
                                <td>No hay Docentes</td>
                            </tr>
                        )
                        
                        }
                        
                    </tbody>
                </table>
            </div>
            <div className='col-4 mt-5'>
                <TeacherAddForm/>

            </div>

        </div>
        

    </div>
  )
}