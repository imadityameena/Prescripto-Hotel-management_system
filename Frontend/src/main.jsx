// FILE: frontend/src/main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx'

// (5.1) Creating folder structure and context for front-end project ✅
// The initial folder structure for the frontend is established (pages, components, context, assets).
// The main context provider is created to manage global state.

// (12.2) Integrating context support in front end project ✅
// The entire App is wrapped with BrowserRouter to enable client-side routing and
// AppContextProvider to provide global state to all nested components.
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AppContextProvider>
            <App />
        </AppContextProvider>
    </BrowserRouter>,
)