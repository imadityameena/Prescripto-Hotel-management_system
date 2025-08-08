// FILE: frontend/src/pages/Contact.jsx

import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
    return (
        <div>
            {/* // (24.1) Creating Divs and adding text in uppercase with CSS properties ✅ */}
            <div className='text-center text-2xl pt-10 text-[#707070]'>
                <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
            </div>

            {/* // (24.2) Creating a section with image, text, and button ✅ */}
            <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
                <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
                {/* // (24.3) Applying CSS properties for different sections of the web page ✅ */}
                <div className='flex flex-col justify-center items-start gap-6'>
                    <p className=' font-semibold text-lg text-gray-600'>OUR OFFICE</p>
                    <p className=' text-gray-500'>54709 Willms Station <br /> Suite 350, Washington, USA</p>
                    <p className=' text-gray-500'>Tel: (415) 555-0132 <br /> Email: prescripto@gmail.com</p>
                    <p className=' font-semibold text-lg text-gray-600'>CAREERS AT PRESCRIPTO</p>
                    <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
                    {/* // (24.4) Creating a section with image, text, and button ⏳ */}
                    {/* This button is not a link and has no onClick handler, so it is non-functional. */}
                    <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
                </div>
            </div>

        </div>
    )
}

export default Contact