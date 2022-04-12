import React, { useEffect, useState } from 'react'
import GroupServices from '../../services/GroupServices'
import { GroupsAddForm } from './GroupsAddForm'


export const GroupScreen = () => {
    const [groups, setGroups] = useState([])

    useEffect(() => {
        getGroups()
      }, [])

    const getGroups = ()=>{
        GroupServices.getAllGroup()
        .then(response=>{
            setGroups(response.data.groups)
            
            
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
                            <th scope="col">Dirección</th>
                            <th scope="col">Líder</th>
                            <th scope="col">Acciones</th>
                        </tr>
                        

                    </thead>
                    <tbody>
                        {
                        groups.length>0 ? 
                        (
                            groups.map(group=>(
                                <tr key={group.id}>
                                    <th scope='row'>{group.id}</th>
                                    <td>{group.name}</td>
                                    <td>{group.direction}</td>
                                    <td>{group.nameleader}</td>
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
                <GroupsAddForm/>
            </div>

        </div>
        

    </div>
  )
}
