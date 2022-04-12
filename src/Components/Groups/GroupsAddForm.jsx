import React from 'react'

export const GroupsAddForm = () => {
  return (
    <div className="card">
        <div className="card-header text-center">
            Agregar Curso
        </div>
        <div className="card-body">
            <form>
                <div className="mb-3">
                    <label className="form-label">Nombre del Grupo</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Dirección del Grupo</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre del Líder</label>
                    <input type="text" className="form-control" />
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
