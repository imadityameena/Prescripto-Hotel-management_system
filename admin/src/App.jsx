// FILE: admin/src/App.jsx

import React, { useContext } from 'react'
import { DoctorContext } from './context/DoctorContext';
import { AdminContext } from './context/AdminContext';
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorsList from './pages/Admin/DoctorsList';
import Login from './pages/Login';
import DoctorAppointments from './pages/Doctor/DoctorAppointments';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import DoctorProfile from './pages/Doctor/DoctorProfile';

const App = () => {

    const { dToken } = useContext(DoctorContext)
    const { aToken } = useContext(AdminContext)

    // (51.1) Manage admin access with token storage ✅
    // This is the core logic for route protection. It checks if an admin or doctor token exists.
    return dToken || aToken ? (
        // (51.2) If logged in, it renders the main panel layout with Navbar and Sidebar.
        <div className='bg-[#F8F9FD]'>
            {/* // (53.2) Import and use react-toastify package for error messages handling ✅ */}
            <ToastContainer />
            <Navbar />
            <div className='flex items-start'>
                <Sidebar />
                {/* // (52.1) Setting up admin dashboard routes and sidebar navigation ✅ */}
                {/* All the protected routes for the admin and doctor panels are defined here. */}
                <Routes>
                    <Route path='/' element={<></>} />
                    <Route path='/admin-dashboard' element={<Dashboard />} />
                    <Route path='/all-appointments' element={<AllAppointments />} />
                    <Route path='/add-doctor' element={<AddDoctor />} />
                    <Route path='/doctor-list' element={<DoctorsList />} />
                    <Route path='/doctor-dashboard' element={<DoctorDashboard />} />
                    <Route path='/doctor-appointments' element={<DoctorAppointments />} />
                    <Route path='/doctor-profile' element={<DoctorProfile />} />
                </Routes>
            </div>
        </div>
    ) : (
        // (51.3) If not logged in, it renders only the Login page.
        <>
            <ToastContainer />
            <Login />
        </>
    )
}

export default App