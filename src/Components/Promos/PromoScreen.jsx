import React, { useEffect, useState } from 'react'
import PromoServices from '../../services/PromoServices'
import { PromoAddForm } from './PromoAddForm'



export const PromoScreen = () => {

    const [promos, setPromos] = useState([])

    useEffect(() => {
        getGroups()
      }, [])

    const getGroups = ()=>{
        PromoServices.getAllPromos()
        .then(response=>{
            setPromos(response.data. promos)
           

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
                            <th scope="col">Periodo</th>
                            <th scope="col">Id. Curso</th>
                            <th scope="col">Id. Docente</th>
                            <th scope="col">Acciones</th>
                        </tr>
                        

                    </thead>
                    <tbody>
                        {
                        promos.length>0 ? 
                        (
                            promos.map(promo=>(
                                <tr key={promo.id}>
                                    <th scope='row'>{promo.id}</th>
                                    <td>{promo.name}</td>
                                    <td>{promo.id_course_id}</td>
                                    <td>{promo.id_teacher_id}</td>
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
                    <PromoAddForm/>
            </div>

        </div>

        

    </div>
  )
}
