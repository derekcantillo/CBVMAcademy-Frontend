import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {
    
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Academy App
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        
                        className={({isActive}) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                      
                        to="/courses"
                    >
                        Courses
                    </NavLink>

                    <NavLink 
                        
                        className={({isActive}) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        
                        to="/groups"
                    >
                        Groups
                    </NavLink>
                    <NavLink 
                        
                        className={({isActive}) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        
                        to="/promos"
                    >
                       Promos
                    </NavLink>
                    <NavLink 
                        
                        className={({isActive}) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        
                        to="/teachers"
                    >
                       Teachers
                    </NavLink>
                    <NavLink 
                        
                        className={({isActive}) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        
                        to="/students"
                    >
                       Students
                    </NavLink>
                    
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end">
                <ul className="navbar-nav ml-auto ">
                    <span className='nav-item nav-link text-info'>Derek</span>

                    <button className='nav-item nav-link btn'>Logout</button>
                </ul>
            </div>
        </nav>
  )
}
