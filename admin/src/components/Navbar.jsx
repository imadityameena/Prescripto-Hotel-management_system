// FILE: admin/src/components/Navbar.jsx

import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const { dToken, setDToken } = useContext(DoctorContext)
    const { aToken, setAToken } = useContext(AdminContext)

    const navigate = useNavigate()

    // (52.2) Implementing login and logout functionality for the admin panel. ✅
    // This function clears all potential tokens from state and local storage to log the user out.
    const logout = () => {
        navigate('/')
        dToken && setDToken('')
        dToken && localStorage.removeItem('dToken')
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
    }

    return (
        // (52.1) Adding CSS properties for admin text, logo, and logout button ✅
        <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
            <div className='flex items-center gap-2 text-xs'>
                <img onClick={() => navigate('/')} className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo} alt="" />
                {/* Dynamically displays whether an Admin or Doctor is logged in. */}
                <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{aToken ? 'Admin' : 'Doctor'}</p>
            </div>
            <button onClick={() => logout()} className='bg-primary text-white text-sm px-10 py-2 rounded-full'>Logout</button>
        </div>
    )
}

export default Navbar