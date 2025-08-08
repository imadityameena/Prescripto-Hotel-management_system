// FILE: admin/src/pages/Doctor/DoctorAppointments.jsx

import React from 'react'
import { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const DoctorAppointments = () => {

    const { dToken, appointments, getAppointments, cancelAppointment, completeAppointment } = useContext(DoctorContext)
    const { slotDateFormat, calculateAge, currency } = useContext(AppContext)

    // (70.3) Handling appointment data based on success status ✅
    useEffect(() => {
        if (dToken) {
            getAppointments()
        }
    }, [dToken])

    return (
        <div className='w-full max-w-6xl m-5 '>
            <p className='mb-3 text-lg font-medium'>All Appointments</p>
            {/* // (70.4) Display doctor appointment data in table format on web page ✅ */}
            <div className='bg-white border rounded text-sm max-h-[80vh] overflow-y-scroll'>
                {/* // (70.5) Design optimization for smaller screens ✅ */}
                <div className='max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-3 px-6 border-b'>
                    <p>#</p>
                    <p>Patient</p>
                    <p>Payment</p>
                    <p>Age</p>
                    <p>Date & Time</p>
                    <p>Fees</p>
                    <p>Action</p>
                </div>
                {appointments.map((item, index) => (
                    <div className='flex flex-wrap justify-between max-sm:gap-5 max-sm:text-base sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50' key={index}>
                        <p className='max-sm:hidden'>{index}</p>
                        <div className='flex items-center gap-2'>
                            <img src={item.userData.image} className='w-8 rounded-full' alt="" /> <p>{item.userData.name}</p>
                        </div>
                        <div>
                            <p className='text-xs inline border border-primary px-2 rounded-full'>
                                {item.payment ? 'Online' : 'CASH'}
                            </p>
                        </div>
                        {/* // (70.6) Using user data to calculate age and display it in the appointment ✅ */}
                        <p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
                        <p>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>
                        {/* // (70.7) Adding currency symbol and amount in the appointment booking system. ✅ */}
                        <p>{currency}{item.amount}</p>
                        {/* // (71.5) Handle appointment status with detailed messages and CSS styling ✅ */}
                        {/* // (113.2) Using nested ternary operator to display different messages based on appointment status ✅ */}
                        {item.cancelled
                            ? <p className='text-red-400 text-xs font-medium'>Cancelled</p>
                            : item.isCompleted
                                ? <p className='text-green-500 text-xs font-medium'>Completed</p>
                                : <div className='flex'>
                                    {/* // (72.4) The doctor can cancel or complete their appointments. */}
                                    <img onClick={() => cancelAppointment(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" />
                                    <img onClick={() => completeAppointment(item._id)} className='w-10 cursor-pointer' src={assets.tick_icon} alt="" />
                                </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DoctorAppointments