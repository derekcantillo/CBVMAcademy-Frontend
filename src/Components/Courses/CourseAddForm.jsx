import React from 'react'

export const CourseAddForm = () => {
  return (
    <div className="card">
        <div className="card-header text-center">
            Agregar Curso
        </div>
        <div className="card-body">
            <form>
                <div className="mb-3">
                    <label className="form-label">Nombre del Curso</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Descripción del curso</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
              
                <button type="submit" className="btn btn-primary">Agregar</button>
                
            </form>
        </div>
        <div className="card-footer text-muted">
            Academia Valle del Mar
        </div>
    </div>
  )
}
