// FILE: admin/src/components/Sidebar.jsx

import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'

const Sidebar = () => {

    const { dToken } = useContext(DoctorContext)
    const { aToken } = useContext(AdminContext)

    return (
        <div className='min-h-screen bg-white border-r'>
            {/* // (52.2) Setting up admin dashboard routes and sidebar navigation ✅ */}
            {/* Conditionally renders the Admin navigation links if an admin token is present. */}
            {aToken && <ul className='text-[#515151] mt-5'>

                {/* // (52.3) Adding menu items to sidebar with icons and text ✅ */}
                {/* // (52.4) Creating dynamic class names for active navigation links ✅ */}
                {/* NavLink's `isActive` property is used to apply special styling to the currently active route. */}
                <NavLink to={'/admin-dashboard'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
                    <img className='min-w-5' src={assets.home_icon} alt='' />
                    <p className='hidden md:block'>Dashboard</p>
                </NavLink>
                <NavLink to={'/all-appointments'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
                    <img className='min-w-5' src={assets.appointment_icon} alt='' />
                    <p className='hidden md:block'>Appointments</p>
                </NavLink>
                <NavLink to={'/add-doctor'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
                    <img className='min-w-5' src={assets.add_icon} alt='' />
                    <p className='hidden md:block'>Add Doctor</p>
                </NavLink>
                <NavLink to={'/doctor-list'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
                    <img className='min-w-5' src={assets.people_icon} alt='' />
                    <p className='hidden md:block'>Doctors List</p>
                </NavLink>
            </ul>}

            {/* // (68.2) Creating multiple pages for doctor appointment booking system ✅ */}
            {/* Conditionally renders the Doctor navigation links if a doctor token is present. */}
            {dToken && <ul className='text-[#515151] mt-5'>
                <NavLink to={'/doctor-dashboard'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
                    <img className='min-w-5' src={assets.home_icon} alt='' />
                    <p className='hidden md:block'>Dashboard</p>
                </NavLink>
                <NavLink to={'/doctor-appointments'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
                    <img className='min-w-5' src={assets.appointment_icon} alt='' />
                    <p className='hidden md:block'>Appointments</p>
                </NavLink>
                <NavLink to={'/doctor-profile'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
                    <img className='min-w-5' src={assets.people_icon} alt='' />
                    <p className='hidden md:block'>Profile</p>
                </NavLink>
            </ul>}
        </div>
    )
}

export default Sidebar