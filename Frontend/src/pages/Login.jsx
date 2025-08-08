// FILE: frontend/src/pages/Login.jsx

import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    // (25.1) State initialization and form creation ✅
    // State to toggle between "Sign Up" and "Login" modes.
    const [state, setState] = useState('Sign Up')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const { backendUrl, token, setToken } = useContext(AppContext)

    // (26.1) Implementing logic for account creation and login state ✅
    // This function handles both form submissions.
    const onSubmitHandler = async (event) => {
        event.preventDefault();

        // (41.1) Integrating login and registration features with the front end. ✅
        // Logic for the "Sign Up" state.
        if (state === 'Sign Up') {
            const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })
            if (data.success) {
                // (41.2) Saving user token in context for authentication ✅
                localStorage.setItem('token', data.token)
                setToken(data.token)
            } else {
                toast.error(data.message)
            }
        } else {
            // (41.3) Integrating login and registration features with the front end. ✅
            // Logic for the "Login" state.
            const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })
            if (data.success) {
                // (41.4) Creating and logging in to user accounts through form inputs ✅
                localStorage.setItem('token', data.token)
                setToken(data.token)
            } else {
                toast.error(data.message)
            }
        }
    }

    // (41.5) Linking functions and setting token for user authentication ✅
    // Redirects the user to the homepage if they are already logged in.
    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token])

    return (
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
                
                {/* // (25.2) Implementing dynamic text based on state changes ✅ */}
                {/* The title and subtitle of the form change based on the current state. */}
                <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
                <p>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book appointment</p>
                
                {state === 'Sign Up'
                    ? <div className='w-full '>
                        <p>Full Name</p>
                        <input onChange={(e) => setName(e.target.value)} value={name} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="text" required />
                    </div>
                    : null
                }
                
                {/* // (25.3) Adding CSS properties and modifying input fields ✅ */}
                <div className='w-full '>
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
                </div>
                <div className='w-full '>
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
                </div>
                
                <button className='bg-primary text-white w-full py-2 my-2 rounded-md text-base'>{state === 'Sign Up' ? 'Create account' : 'Login'}</button>
                
                {/* // (26.2) Implementing logic for account creation and login state ✅ */}
                {/* Toggle link to switch between Sign Up and Login modes. */}
                {state === 'Sign Up'
                    ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
                    : <p>Create an new account? <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>Click here</span></p>
                }
            </div>
        </form>
    )
}

export default Login