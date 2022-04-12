import React from 'react'

export const StudentAddForm = () => {
  return (
    <div className="card">
        <div className="card-header text-center">
            Agregar Estudiante
        </div>
        <div className="card-body">
            <form>
                <div className="mb-3">
                    <label className="form-label">Nombre Completo</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">No. documento</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">No. Contacto</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" />
                </div>
                <select className="form-select mb-3" aria-label="Default select example">
                    <option selected>Seleccionar un tipo de sangre</option>
                    <option value="1">A+</option>
                    <option value="2">A-</option>
                    <option value="3">B+</option>
                </select>
                <select className="form-select mb-3" aria-label="Default select example">
                    <option selected>Seleccionar su grupo familiar</option>
                    <option value="1">Grupo 1</option>
                    <option value="2">Grupo 2</option>
                    <option value="3">Grupo 3</option>
                </select>
                <button type="submit" className="btn btn-primary">Agregar</button>
                
            </form>
        </div>
        <div className="card-footer text-muted">
            Academia Valle del Mar
        </div>
    </div>
  )
}
