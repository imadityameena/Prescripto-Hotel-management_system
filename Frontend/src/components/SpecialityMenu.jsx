// FILE: frontend/src/components/SpecialityMenu.jsx

import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        // (12.1) Mounting components and adding data ✅
        // (13.1) Creating Specialty Menu to Display Doctors ✅
        // This component is given an 'id' to act as an anchor for the header's button.
        <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-[#262626]'>
            <h1 className='text-3xl font-medium'>Find by Speciality</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
            
            {/* // (13.3) Adding CSS properties to improve the appearance ✅ */}
            <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll '>
                {/* // (13.2) Creating Specialty Menu to Display Doctors ✅ */}
                {/* Data for the menu is mapped from the hardcoded `specialityData` array. */}
                {specialityData.map((item, index) => (
                    // (14.1) Adding CSS properties to display doctor's profile information ✅
                    // Each item links to a dynamically filtered doctor page.
                    <Link to={`/doctors/${item.speciality}`} onClick={() => scrollTo(0, 0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index}>
                        <img className='w-16 sm:w-24 mb-2 ' src={item.image} alt="" />
                        <p>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu