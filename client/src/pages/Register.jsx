import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { registerUser } from '../redux-toolkit/features/userSlice'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
const Register = () => {
    const dispatch = useDispatch()
    const [userData, setUserData] = useState(() => {
        return { name: "", email: "", password: "", country: "" }
    })
    // change handler to update state
    const handleChange = ({ target: { name, value } }) => {
        setUserData((prev) => {
            return { ...prev, [name]: value }
        })
    }
    // submit handler
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(registerUser(userData)).then(res => {
            if (res.payload == true) {
                setUserData({ name: "", email: "", password: "", country: "" })
            }
        })
    }
    return (
        <section className='h-screen w-full  flex justify-between flex-col sm:flex-row'>
            {/* form side */}
            <article className='flex-1 h-full'>
                <div className='h-full w-full flex items-center justify-center'>
                    <form className='text-sm w-full sm:w-[60%] px-4 sm:px-0' onSubmit={handleSubmit}>
                        <h1 className='capitalize font-medium text-3xl mb-8'>get started now</h1>
                        <div className='flex flex-col mb-4'>
                            <label htmlFor="name" className='mb-1'>Name</label>
                            <input type="text" id='name' name='name' className='rounded-lg py-2 px-3 outline-none border' onChange={handleChange} value={userData.name} />
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label htmlFor="email" className='mb-1'>Email</label>
                            <input type="email" id='email' name='email' className='rounded-lg py-2 px-3 outline-none border' onChange={handleChange} value={userData.email} />
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label htmlFor="password" className='mb-1'>Password</label>
                            <input type="text" id='password' name='password' className='rounded-lg py-2 px-3 outline-none border' onChange={handleChange} value={userData.password} />
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label htmlFor="country" className='mb-1'>Country</label>
                            <input type="text" id='country' name='country' className='rounded-lg py-2 px-3 outline-none border' onChange={handleChange} value={userData.country} />
                        </div>
                        <button className='w-full rounded-2xl mt-3 bg-[#4b6bfb] capitalize text-white py-2 font-medium text-lg hover:opacity-70'>signup</button>
                        <p className='mt-3 text-sm text-center'>Have an account? <Link className='text-[#4b6bfb]' to={"/login"}>Sign in</Link></p>
                    </form>
                </div>
            </article >
            {/* image side */}
            <article className='flex-1 h-full hidden sm:block'>
                <img src="images/form.png" alt="flowers_img" className='h-full w-full' />
            </article>
        </section>
    )
}

export default Register