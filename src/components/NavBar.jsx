import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex flex-row gap-4 place-content-evenly text-[#c1c1c1]'>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'text-xs flex flex-col items-center text-[#1e1e1f]' : 'text-xs flex flex-col items-center')}>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l9-9 9 9M4 10v10h5V14h6v6h5V10"
        />
      </svg>
        Home
      </NavLink>
      <NavLink to="/pastes" className={({ isActive }) => (isActive ? 'text-xs flex flex-col items-center text-[#1e1e1f]' : 'text-xs flex flex-col items-center')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h2m0-14h8a2 2 0 012 2v10a2 2 0 01-2 2H9m0-14v14m3-10h4m-4 4h4"
          />
        </svg>
        Notes
      </NavLink> 
    </div>
  )
}

export default NavBar
