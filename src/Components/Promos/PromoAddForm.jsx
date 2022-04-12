import React from 'react'

export const PromoAddForm = () => {
  return (
    <div className="card">
    <div className="card-header text-center">
        Agregar Promo
    </div>
    <div className="card-body">
        <form>
            <div className="mb-3">
                <label className="form-label">Periodo Del Curso</label>
                <input type="text" className="form-control" />
            </div>
            <select className="form-select mb-3" aria-label="Default select example">
                <option selected>Seleccionar un grupo</option>
                <option value="1">Grupo 1</option>
                <option value="2">Grupo 2</option>
                <option value="3">Grupo 3</option>
            </select>
            <select className="form-select mb-3" aria-label="Default select example">
                <option selected>Seleccionar un docente</option>
                <option value="1">Docente 1</option>
                <option value="2">Docente 2</option>
                <option value="3">Docente 3</option>
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
