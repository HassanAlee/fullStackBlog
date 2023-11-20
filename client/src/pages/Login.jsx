import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
    return (
        <section className='h-screen w-full  flex justify-between flex-col sm:flex-row'>
            {/* form side */}
            <article className='flex-1 h-full'>
                <div className='h-full w-full flex items-center justify-center'>
                    <form className='text-sm w-full sm:w-[60%] px-4 sm:px-0'>
                        <h1 className='capitalize font-medium text-3xl'>Welcome back!</h1>
                        <h5 className='mb-8 mt-2'>Enter your credentials to access your account</h5>
                        <div className='flex flex-col mb-4'>
                            <label htmlFor="name" className='mb-1'>Email</label>
                            <input type="email" id='email' name='email' className='rounded-lg py-2 px-3 outline-none border' />
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label htmlFor="password" className='mb-1'>Password</label>
                            <input type="text" id='password' name='password' className='rounded-lg py-2 px-3 outline-none border' />
                        </div>
                        <button className='w-full rounded-2xl mt-3 bg-[#4b6bfb] capitalize text-white py-2 font-medium text-lg hover:opacity-70'>signup</button>
                        <p className='mt-3 text-sm text-center'>Don't have an account? <Link className='text-[#4b6bfb]' to={"/register"}>Sign up</Link></p>
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