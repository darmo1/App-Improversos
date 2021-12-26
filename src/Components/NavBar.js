import React from 'react'
import { NavLink } from 'react-router-dom'
import Menu from '../Img/menu.png'

const overLine = 'underline text-orange-600 font-semibold'
const NavBar = () => {
    const [isOpen , setIsOpen ] = React.useState(false)

    return (
        <>
            <nav className='w-full sticky z-50 top-0 relative'>
                <div onClick={() => setIsOpen(!isOpen)} className='flex justify-end mr-4 my-2'> 
                {isOpen 
                ? `X` 
                : <div className='w-8  '> 
                <img src={Menu} alt="Menu-hambuguesa" /></div>} </div>
                {
                  isOpen ?   
                  
                <ul className=' absolute top-8  w-full bg-white   rounded-b-2xl   '>
                  <li>
                      <NavLink
                          to="/"
                          className={({ isActive }) => isActive ? overLine : ''}>Home</NavLink>
                  </li>
                  <li>
                      <NavLink
                          to="/improvisacion"
                          className={({ isActive }) => isActive ? overLine : 'lg:bg-white'}>Improvisacion</NavLink>
                  </li>
                  <li>
                      <NavLink
                          to="/informacion"
                          className={({ isActive }) => isActive ? overLine : ''}>Información</NavLink>
                  </li>
              
                </ul>
                : null

              }


            </nav>
            <style jsx>{`
            li{
                margin: 1rem 2rem;
                text-align: center;
            }
        `}</style>
        </>
    )
}

export default NavBar
