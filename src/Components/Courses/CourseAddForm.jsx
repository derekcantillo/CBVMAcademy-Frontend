import React, { useState } from 'react'
import CourseServices from '../../services/CourseServices'

export const CourseAddForm = (props) => {
    const initialState=[{id: null, name:"", description:"", level:""}]


    const [coursess, setCoursess] = useState(initialState)

    const handleInputChange=(e)=>{
        console.log(e.target.name)
        console.log(e.target.value)
        const { name, value } = e.target;
        setCoursess({
          ...coursess,
          [name]: value
        });
    }

    const handleSubmit=(e)=>{
        e.preventDefault()

        if(
            !coursess.name || 
            !coursess.description ||
            !coursess.level
        )
        return;
        props.addCourse(coursess)
        setCoursess(initialState)

    }


  return (
    <div className="card">
        <div className="card-header text-center">
            Agregar Curso
        </div>
        <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nombre del Curso</label>
                    <input type="text" className="form-control" name='name' value={coursess.name} onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Descripción del curso</label>
                    <input className="form-control" type="text" name='description' value={coursess.description} onChange={handleInputChange} ></input>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Descripción del curso</label>
                    <input className="form-control" type="number" name='level' value={coursess.level} onChange={handleInputChange} ></input>
                </div>
              
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                    Agregar
                    </button>
                </div>
                
            </form>
        </div>
        <div className="card-footer text-muted">
            Academia Valle del Mar
        </div>
    </div>
  )
}
