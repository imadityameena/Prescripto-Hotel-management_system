// FILE: frontend/src/App.jsx

import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'

const App = () => {
    return (
        <div className='mx-4 sm:mx-[10%]'>
            <ToastContainer />

            {/* // (7) Creating and Mounting Navbar component for navigation bar ✅ */}
            <Navbar />

            {/* // (5.2) Creating different pages in the Pages folder for doctor appointment booking system. ✅ */}
            {/* // (6) Create multiple routes for different pages in application ✅ */}
            {/* All routes are defined here, mapping URL paths to their corresponding page components. */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/doctors' element={<Doctors />} />
                <Route path='/doctors/:speciality' element={<Doctors />} />
                <Route path='/login' element={<Login />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/appointment/:docId' element={<Appointment />} />
                <Route path='/my-appointments' element={<MyAppointments />} />
                <Route path='/my-profile' element={<MyProfile />} />
                <Route path='/verify' element={<Verify />} />
            </Routes>

            {/* // (16.2) Adding structure and styling to footer section ✅ */}
            {/* The Footer component is mounted at the bottom of the layout. */}
            <Footer />
        </div>
    )
}

export default App