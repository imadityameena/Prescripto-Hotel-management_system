import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const MyAppointments = () => {
    
    const navigate = useNavigate()
    
    // State for appointments data and payment selection
    const [appointments, setAppointments] = useState([])
    const [payment, setPayment] = useState('')

    // Month names for date formatting
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    // Function to format the date from underscore format to readable format
    // Example: 20_01_2000 becomes 20 Jan 2000
    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split('_')
        return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    }

    // Mock function to simulate getting user appointments
    // In a real app, this would fetch from your backend
    const getUserAppointments = async () => {
        try {
            // Mock data for demonstration
            const mockAppointments = [
                {
                    _id: '1',
                    docData: {
                        name: 'Dr. John Smith',
                        speciality: 'Cardiology',
                        image: 'doctor1.jpg',
                        address: {
                            line1: '123 Medical Center Dr',
                            line2: 'Suite 456, City, State 12345'
                        }
                    },
                    slotDate: '25_08_2025',
                    slotTime: '10:30 AM',
                    cancelled: false,
                    payment: false,
                    isCompleted: false
                }
            ]
            
            setAppointments(mockAppointments.reverse())
            
        } catch (error) {
            console.log(error)
            // Handle error appropriately in your app
        }
    }

    // Function to handle appointment cancellation
    const cancelAppointment = async (appointmentId) => {
        try {
            // Update the appointment status locally
            setAppointments(prevAppointments => 
                prevAppointments.map(appointment => 
                    appointment._id === appointmentId 
                        ? { ...appointment, cancelled: true }
                        : appointment
                )
            )
            
            console.log('Appointment cancelled:', appointmentId)
            
        } catch (error) {
            console.log(error)
        }
    }

    // Function to handle Razorpay payment initialization
    const initPay = (order) => {
        // This would normally integrate with Razorpay
        console.log('Initializing payment with order:', order)
        
        // Mock payment success for demonstration
        setTimeout(() => {
            console.log('Payment completed successfully')
            navigate('/my-appointments')
            getUserAppointments()
        }, 2000)
    }

    // Function to handle Razorpay payment
    const appointmentRazorpay = async (appointmentId) => {
        try {
            // Mock order data
            const mockOrder = {
                id: 'order_123',
                amount: 50000, // Amount in paise
                currency: 'INR',
                receipt: 'receipt_123'
            }
            
            initPay(mockOrder)
            
        } catch (error) {
            console.log(error)
        }
    }

    // Function to handle Stripe payment
    const appointmentStripe = async (appointmentId) => {
        try {
            // Mock Stripe session URL
            const mockSessionUrl = 'https://checkout.stripe.com/pay/mock-session'
            
            console.log('Redirecting to Stripe payment:', mockSessionUrl)
            // In a real app: window.location.replace(mockSessionUrl)
            
        } catch (error) {
            console.log(error)
        }
    }

    // Load appointments when component mounts
    useEffect(() => {
        getUserAppointments()
    }, [])

    return (
        <div>
            <p className='pb-3 mt-12 text-lg font-medium text-gray-600 border-b'>
                My appointments
            </p>
            
            <div className=''>
                {appointments.map((item, index) => (
                    <div key={index} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b'>
                        
                        {/* Doctor Image */}
                        <div>
                            <img 
                                className='w-36 bg-[#EAEFFF]' 
                                src={item.docData.image} 
                                alt="Doctor" 
                            />
                        </div>
                        
                        {/* Appointment Details */}
                        <div className='flex-1 text-sm text-[#5E5E5E]'>
                            <p className='text-[#262626] text-base font-semibold'>
                                {item.docData.name}
                            </p>
                            <p>{item.docData.speciality}</p>
                            
                            <p className='text-[#464646] font-medium mt-1'>Address:</p>
                            <p className=''>{item.docData.address.line1}</p>
                            <p className=''>{item.docData.address.line2}</p>
                            
                            <p className=' mt-1'>
                                <span className='text-sm text-[#3C3C3C] font-medium'>Date & Time:</span> 
                                {slotDateFormat(item.slotDate)} | {item.slotTime}
                            </p>
                        </div>
                        
                        <div></div>
                        
                        {/* Action Buttons */}
                        <div className='flex flex-col gap-2 justify-end text-sm text-center'>
                            
                            {/* Pay Online Button - shows when not cancelled, not paid, not completed, and no payment method selected */}
                            {!item.cancelled && !item.payment && !item.isCompleted && payment !== item._id && (
                                <button 
                                    onClick={() => setPayment(item._id)} 
                                    className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'
                                >
                                    Pay Online
                                </button>
                            )}
                            
                            {/* Stripe Payment Button - shows when payment method is selected */}
                            {!item.cancelled && !item.payment && !item.isCompleted && payment === item._id && (
                                <button 
                                    onClick={() => appointmentStripe(item._id)} 
                                    className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-gray-100 hover:text-white transition-all duration-300 flex items-center justify-center'
                                >
                                    <img 
                                        className='max-w-20 max-h-5' 
                                        src={assets.stripe_logo} 
                                        alt="Stripe" 
                                    />
                                </button>
                            )}
                            
                            {/* Razorpay Payment Button - shows when payment method is selected */}
                            {!item.cancelled && !item.payment && !item.isCompleted && payment === item._id && (
                                <button 
                                    onClick={() => appointmentRazorpay(item._id)} 
                                    className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-gray-100 hover:text-white transition-all duration-300 flex items-center justify-center'
                                >
                                    <img 
                                        className='max-w-20 max-h-5' 
                                        src={assets.razorpay_logo} 
                                        alt="Razorpay" 
                                    />
                                </button>
                            )}
                            
                            {/* Paid Status Button - shows when payment is completed */}
                            {!item.cancelled && item.payment && !item.isCompleted && (
                                <button className='sm:min-w-48 py-2 border rounded text-[#696969] bg-[#EAEFFF]'>
                                    Paid
                                </button>
                            )}

                            {/* Completed Status Button - shows when appointment is completed */}
                            {item.isCompleted && (
                                <button className='sm:min-w-48 py-2 border border-green-500 rounded text-green-500'>
                                    Completed
                                </button>
                            )}

                            {/* Cancel Appointment Button - shows when not cancelled and not completed */}
                            {!item.cancelled && !item.isCompleted && (
                                <button 
                                    onClick={() => cancelAppointment(item._id)} 
                                    className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'
                                >
                                    Cancel appointment
                                </button>
                            )}
                            
                            {/* Cancelled Status Button - shows when appointment is cancelled */}
                            {item.cancelled && !item.isCompleted && (
                                <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>
                                    Appointment cancelled
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyAppointments