import React, { useEffect, useState } from 'react'

import StudentServices from '../../services/StudentServices'

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
                listaStudent.length>0 ? 
                (
                    listaStudent.map(students=>(
                        <tr key={students.id}>
                            <th scope='row'>{students.id}</th>
                            <th>{students.name}</th>
                            <th>{students.numdoc}</th>
                            <th>{students.phone}</th>
                            <th>{students.email}</th>
                            <th>{students.blood}</th>
                            <th>{students.id_group_id}</th>
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
  )
}
