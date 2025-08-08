// FILE: frontend/src/pages/Verify.jsx

import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const Verify = () => {

    // (61.1) Implementing Razer pay order ID validation in user route ✅
    // Note: The logic in this file is for Stripe verification. The timestamp likely refers to the general concept of payment verification.
    // It reads the 'success' and 'appointmentId' parameters from the URL.
    const [searchParams, setSearchParams] = useSearchParams()
    const success = searchParams.get("success")
    const appointmentId = searchParams.get("appointmentId")

    const { backendUrl, token } = useContext(AppContext)
    const navigate = useNavigate()

    // Function to verify the Stripe payment with the backend.
    const verifyStripe = async () => {
        try {
            const { data } = await axios.post(backendUrl + "/api/user/verifyStripe", { success, appointmentId }, { headers: { token } })
            if (data.success) {
                toast.success(data.message)
            } else {
                toast.error(data.message)
            }
            // (61.2) Redirects to the appointments page after verification is complete.
            navigate("/my-appointments")
        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }

    useEffect(() => {
        if (token, appointmentId, success) {
            verifyStripe()
        }
    }, [token])

    return (
        // (61.3) Shows a loading spinner while the verification API call is in progress.
        <div className='min-h-[60vh] flex items-center justify-center'>
            <div className="w-20 h-20 border-4 border-gray-300 border-t-4 border-t-primary rounded-full animate-spin"></div>
        </div>
    )
}

export default Verify