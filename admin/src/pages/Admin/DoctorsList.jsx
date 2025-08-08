// FILE: admin/src/pages/Admin/DoctorsList.jsx

import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {

    const { doctors, changeAvailability, aToken, getAllDoctors } = useContext(AdminContext)

    // (48.3) Calling the API to get all doctors data and handling the response ✅
    useEffect(() => {
        if (aToken) {
            getAllDoctors()
        }
    }, [aToken])

    return (
        <div className='m-5 max-h-[90vh] overflow-y-scroll'>
            <h1 className='text-lg font-medium'>All Doctors</h1>
            {/* // (48.4) Creating doctor appointment booking system UI elements ✅ */}
            {/* // (48.5) Adding CSS styles to doctor appointment booking webpage ✅ */}
            <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
                {doctors.map((item, index) => (
                    <div className='border border-[#C9D8FF] rounded-xl max-w-56 overflow-hidden cursor-pointer group' key={index}>
                        <img className='bg-[#EAEFFF] group-hover:bg-primary transition-all duration-500' src={item.image} alt="" />
                        <div className='p-4'>
                            <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
                            <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
                            {/* // (49.1) Implement functionality to change doctor's availability by updating database ✅ */}
                            {/* // (49.4) Implementing update functionality for doctor's availability ✅ */}
                            {/* This checkbox directly triggers the API call to toggle the doctor's 'available' status. */}
                            <div className='mt-2 flex items-center gap-1 text-sm'>
                                <input onChange={() => changeAvailability(item._id)} type="checkbox" checked={item.available} />
                                <p>Available</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DoctorsList