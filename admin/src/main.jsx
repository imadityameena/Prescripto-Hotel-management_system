// FILE: admin/src/main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AdminContextProvider from './context/AdminContext.jsx'
import DoctorContextProvider from './context/DoctorContext.jsx'
import AppContextProvider from './context/AppContext.jsx'

// (47.1) Setting up admin assets and context for the project. ✅
// (47.2) Creating context providers for different roles ✅
// The application is wrapped in multiple context providers to manage state for Admins, Doctors, and general app utilities separately.
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AdminContextProvider>
            <DoctorContextProvider>
                <AppContextProvider>
                    <App />
                </AppContextProvider>
            </DoctorContextProvider>
        </AdminContextProvider>
    </BrowserRouter>,
)