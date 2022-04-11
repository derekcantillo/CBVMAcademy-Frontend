import React, { useEffect, useState } from 'react'
import PromoServices from '../../services/PromoServices'



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
        <table className='table mt-5 table-striped'>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Periodo</th>
                    <th scope="col">Id. Curso</th>
                    <th scope="col">Id. Docente</th>
                </tr>
                

            </thead>
            <tbody>
                {
                promos.length>0 ? 
                (
                    promos.map(promo=>(
                        <tr key={promo.id}>
                            <th scope='row'>{promo.id}</th>
                            <th>{promo.name}</th>
                            <th>{promo.id_course_id}</th>
                            <th>{promo.id_teacher_id}</th>
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
