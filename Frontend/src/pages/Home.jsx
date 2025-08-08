// FILE: frontend/src/pages/Home.jsx

import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'

const Home = () => {
    return (
        <div>
            {/* // (12.1) Mounting components and adding data ✅ */}
            {/* The homepage is constructed by assembling these four main components in sequence. */}
            <Header />
            <SpecialityMenu />
            <TopDoctors />
            <Banner />
        </div>
    )
}

export default Home