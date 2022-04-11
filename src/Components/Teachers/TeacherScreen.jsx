import React, { useEffect, useState } from 'react'

import TeacherServices from '../../services/TeacherServices'

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
                </tr>
                

            </thead>
            <tbody>
                {
                teachers.length>0 ? 
                (
                    teachers.map(teachers=>(
                        <tr key={teachers.id}>
                            <th scope='row'>{teachers.id}</th>
                            <th>{teachers.name}</th>
                            <th>{teachers.numdoc}</th>
                            <th>{teachers.phone}</th>
                            <th>{teachers.email}</th>
                            <th>{teachers.blood}</th>
                            <th>{teachers.id_group_id}</th>
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
  )
}