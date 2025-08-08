// FILE: admin/src/pages/Login.jsx

import axios from 'axios'
import React, { useContext, useState } from 'react'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { toast } from 'react-toastify'

const Login = () => {

    // (48.3) Implementing user login functionality and changing states ✅
    // State to toggle between 'Admin' and 'Doctor' login forms.
    const [state, setState] = useState('Admin')

    // (48.4) Adding email and password input fields with required attribute ✅
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const { setDToken } = useContext(DoctorContext)
    const { setAToken } = useContext(AdminContext)

    // (48.5) Creating form submission function and making API calls based on user's state ✅
    // Handles the login API call based on whether 'Admin' or 'Doctor' is selected.
    const onSubmitHandler = async (event) => {
        event.preventDefault();

        // (48.6) Setting up admin login logic and UI design ✅
        if (state === 'Admin') {
            const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })
            if (data.success) {
                // (48.7) Fetching token from backend and saving it ✅
                setAToken(data.token)
                localStorage.setItem('aToken', data.token)
            } else {
                toast.error(data.message)
            }
        } else { // Logic for Doctor login
            const { data } = await axios.post(backendUrl + '/api/doctor/login', { email, password })
            if (data.success) {
                setDToken(data.token)
                localStorage.setItem('dToken', data.token)
            } else {
                toast.error(data.message)
            }
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
            {/* (48.8) Implementing user login functionality and changing states ✅ */}
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
                <p className='text-2xl font-semibold m-auto'><span className='text-primary'>{state}</span> Login</p>
                <div className='w-full '>
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
                </div>
                <div className='w-full '>
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
                </div>
                <button className='bg-primary text-white w-full py-2 rounded-md text-base'>Login</button>
                {
                    // (48.9) Toggle link to switch between login forms.
                    state === 'Admin'
                        ? <p>Doctor Login? <span onClick={() => setState('Doctor')} className='text-primary underline cursor-pointer'>Click here</span></p>
                        : <p>Admin Login? <span onClick={() => setState('Admin')} className='text-primary underline cursor-pointer'>Click here</span></p>
                }
            </div>
        </form>
    )
}

export default Login