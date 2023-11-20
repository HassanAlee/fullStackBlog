import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
    return (
        <section className='h-screen w-full  flex justify-between flex-col sm:flex-row'>
            {/* form side */}
            <article className='flex-1 h-full'>
                <div className='h-full w-full flex items-center justify-center'>
                    <form className='text-sm w-full sm:w-auto px-4 sm:px-0'>
                        <div className='flex flex-col mb-4'>
                            <label htmlFor="name" className='mb-1'>Name</label>
                            <input type="text" id='name' name='name' className='rounded-lg py-1 px-3 outline-none border' />
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label htmlFor="name" className='mb-1'>Email</label>
                            <input type="email" id='email' name='email' className='rounded-lg py-1 px-3 outline-none border' />
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label htmlFor="password" className='mb-1'>Password</label>
                            <input type="text" id='password' name='password' className='rounded-lg py-1 px-3 outline-none border' />
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label htmlFor="password" className='mb-1'>Country</label>
                            <input type="text" id='country' name='country' className='rounded-lg py-1 px-3 outline-none border' />
                        </div>
                        <button className='w-full rounded-xl mt-3 bg-[#4b6bfb] capitalize'>signup</button>
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