import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

        {/* -------left section--------- */}

        <div className="mb-5 min-w-[220px] max-w-sm">
          <img src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim totam fuga dolor quaerat quibusdam! Qui, eligendi quia. Rem, dolor minima maxime itaque iste quia possimus accusantium similique atque nobis! Delectus.</p>


        </div>

        {/* ---------Center Section----------- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>


        </div>

        {/* ---------Right section------------ */}

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-9549112233</li>
            <li>adityameena2233@gmail.com</li>

          </ul>
          


        </div>
      </div>
      {/*-------Copyright text  ---------  */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright © 2024 ElyséeDev - All Right Reserved</p>
      </div>

    </div>
  )
}

export default Footer