// FILE: frontend/src/context/AppContext.jsx

import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'

// (12.1) Creating context for common logics ✅
// AppContext is created to provide a centralized state management solution.
export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currencySymbol = '₹'
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    // (42.1) Saving user token in context for authentication ✅
    // State variables to hold the global doctor list, user auth token, and user profile data.
    const [doctors, setDoctors] = useState([])
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')
    const [userData, setUserData] = useState(false)

    // (43.1) Setting up user authentication and profile retrieval API ✅
    // Function to fetch the list of all doctors from the backend.
    const getDoctosData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/doctor/list')
            if (data.success) {
                setDoctors(data.doctors)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    // (43.2) Setting up user authentication and profile retrieval API ✅
    // Function to load the profile data for the currently logged-in user.
    const loadUserProfileData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/get-profile', { headers: { token } })
            if (data.success) {
                setUserData(data.userData)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    // (43.3) Setting up user authentication and profile retrieval API ✅
    // This effect runs once on app load to fetch the global list of doctors.
    useEffect(() => {
        getDoctosData()
    }, [])

    // (43.4) Setting up user authentication and profile retrieval API ✅
    // This effect runs whenever the token changes (i.e., on login/logout) to load or clear user data.
    useEffect(() => {
        if (token) {
            loadUserProfileData()
        }
    }, [token])

    const value = {
        doctors, getDoctosData,
        currencySymbol,
        backendUrl,
        token, setToken,
        userData, setUserData, loadUserProfileData
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider