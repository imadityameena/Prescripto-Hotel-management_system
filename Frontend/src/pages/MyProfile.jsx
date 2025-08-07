import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  
  // State to toggle between edit and view mode
  const [isEdit, setIsEdit] = useState(false)
  
  // State for selected image file
  const [image, setImage] = useState(null)
  
  // Mock user data - in a real app this would come from props or context
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    image: 'https://via.placeholder.com/150',
    address: {
      line1: '123 Main Street',
      line2: 'Apartment 4B, New York, NY 10001'
    },
    gender: 'Male',
    dob: '1990-05-15'
  })

  // Function to handle profile update
  const updateUserProfileData = () => {
    // In a real application, this would make an API call
    // For now, we'll just simulate saving and exit edit mode
    console.log('Profile updated:', userData)
    setIsEdit(false)
    setImage(null)
  }

  // Function to handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
    }
  }

  // Function to handle form input changes
  const handleInputChange = (field, value) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  // Function to handle nested address changes
  const handleAddressChange = (addressField, value) => {
    setUserData(prev => ({
      ...prev,
      address: {
        ...prev.address,
        [addressField]: value
      }
    }))
  }

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm pt-5'>
      
      {/* Profile Image Section */}
      {isEdit ? (
        <label htmlFor='image'>
          <div className='inline-block relative cursor-pointer'>
            <img 
              className='w-36 rounded opacity-75' 
              src={image ? URL.createObjectURL(image) : userData.image} 
              alt="Profile" 
            />
            <div className='w-10 h-10 absolute bottom-12 right-12 bg-gray-200 rounded-full flex items-center justify-center'>
              <span className='text-xs'>📷</span>
            </div>
          </div>
          <input 
            onChange={handleImageChange} 
            type="file" 
            id="image" 
            accept="image/*"
            hidden 
          />
        </label>
      ) : (
        <img 
          className='w-36 rounded' 
          src={userData.image} 
          alt="Profile" 
        />
      )}

      {/* Name Section */}
      {isEdit ? (
        <input 
          className='bg-gray-50 text-3xl font-medium max-w-60 p-2 rounded border' 
          type="text" 
          onChange={(e) => handleInputChange('name', e.target.value)} 
          value={userData.name}
          placeholder="Enter your name"
        />
      ) : (
        <p className='font-medium text-3xl text-[#262626] mt-4'>
          {userData.name}
        </p>
      )}

      <hr className='bg-[#ADADAD] h-[1px] border-none' />

      {/* Contact Information Section */}
      <div>
        <p className='text-gray-600 underline mt-3 font-semibold'>
          CONTACT INFORMATION
        </p>
        
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-[#363636]'>
          
          {/* Email - Read Only */}
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          
          {/* Phone */}
          <p className='font-medium'>Phone:</p>
          {isEdit ? (
            <input 
              className='bg-gray-50 max-w-52 p-1 rounded border' 
              type="text" 
              onChange={(e) => handleInputChange('phone', e.target.value)} 
              value={userData.phone}
              placeholder="Enter phone number"
            />
          ) : (
            <p className='text-blue-500'>{userData.phone}</p>
          )}
          
          {/* Address */}
          <p className='font-medium'>Address:</p>
          {isEdit ? (
            <div>
              <input 
                className='bg-gray-50 w-full p-1 mb-1 rounded border' 
                type="text" 
                onChange={(e) => handleAddressChange('line1', e.target.value)} 
                value={userData.address.line1}
                placeholder="Address line 1"
              />
              <input 
                className='bg-gray-50 w-full p-1 rounded border' 
                type="text" 
                onChange={(e) => handleAddressChange('line2', e.target.value)} 
                value={userData.address.line2}
                placeholder="Address line 2"
              />
            </div>
          ) : (
            <p className='text-gray-500'>
              {userData.address.line1} 
              <br /> 
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      {/* Basic Information Section */}
      <div>
        <p className='text-[#797979] underline mt-3 font-semibold'>
          BASIC INFORMATION
        </p>
        
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-gray-600'>
          
          {/* Gender */}
          <p className='font-medium'>Gender:</p>
          {isEdit ? (
            <select 
              className='max-w-32 bg-gray-50 p-1 rounded border' 
              onChange={(e) => handleInputChange('gender', e.target.value)} 
              value={userData.gender}
            >
              <option value="Not Selected">Not Selected</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          ) : (
            <p className='text-gray-500'>{userData.gender}</p>
          )}
          
          {/* Date of Birth */}
          <p className='font-medium'>Birthday:</p>
          {isEdit ? (
            <input 
              className='max-w-36 bg-gray-50 p-1 rounded border' 
              type='date' 
              onChange={(e) => handleInputChange('dob', e.target.value)} 
              value={userData.dob}
            />
          ) : (
            <p className='text-gray-500'>
              {new Date(userData.dob).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className='mt-10'>
        {isEdit ? (
          <div className='flex gap-3'>
            <button 
              onClick={updateUserProfileData} 
              className='border border-green-500 text-green-500 px-8 py-2 rounded-full hover:bg-green-500 hover:text-white transition-all duration-200'
            >
              Save information
            </button>
            <button 
              onClick={() => {setIsEdit(false); setImage(null);}} 
              className='border border-gray-500 text-gray-500 px-8 py-2 rounded-full hover:bg-gray-500 hover:text-white transition-all duration-200'
            >
              Cancel
            </button>
          </div>
        ) : (
          <button 
            onClick={() => setIsEdit(true)} 
            className='border border-blue-500 text-blue-500 px-8 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-200'
          >
            Edit Profile
          </button>
        )}
      </div>
      
    </div>
  )
}

export default MyProfile