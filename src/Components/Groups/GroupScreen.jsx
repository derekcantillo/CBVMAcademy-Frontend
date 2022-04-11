import React, { useEffect, useState } from 'react'
import GroupServices from '../../services/GroupServices'


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
        <table className='table mt-5 table-striped'>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Dirección</th>
                    <th scope="col">Líder</th>
                </tr>
                

            </thead>
            <tbody>
                {
                groups.length>0 ? 
                (
                    groups.map(group=>(
                        <tr key={group.id}>
                            <th scope='row'>{group.id}</th>
                            <th>{group.name}</th>
                            <th>{group.direction}</th>
                            <th>{group.nameleader}</th>
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
