import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
const socialList = [
    {
        icon: "images/facebook.png",
        text: "Facebook"
    },
    {
        icon: "images/instagram.png",
        text: "Instagram"
    },
    {
        icon: "images/twitter.png",
        text: "X"
    },
    {
        icon: "images/linkedin.png",
        text: "Linkedin"
    },
    {
        icon: "images/youtube.png",
        text: "Youtube"
    }
]
const UpdateProfile = () => {
    const dispatch = useDispatch()
    const [userData, setUserData] = useState(() => {
        return { name: "", email: "", password: "", country: "", info: "" }
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
        <section className='w-full  flex justify-between flex-col sm:flex-row'>
            {/* form side */}
            <article className='flex-1 h-full overflow-y-auto'>
                <div className='h-full w-full flex items-center justify-center'>
                    <form className='text-sm w-full sm:w-[60%] px-4 sm:px-0'>
                        <h1 className='capitalize font-medium text-3xl mb-8'>update profile</h1>
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
                        <div className='flex flex-col mb-4'>
                            <label htmlFor="info" className='mb-1'>About</label>
                            <textarea className='border resize-none rounded-lg' />
                        </div>
                        {
                            socialList.map((item, i) => {
                                return <>
                                    <div className='flex items-center w-full justify-between mb-4'>
                                        <img src={item.icon} alt={item.text} />
                                        <input type="text" className='border-b w-[90%] ' placeholder={`${item.text} url here`} />
                                    </div>
                                </>
                            })
                        }
                        <button className='w-full rounded-2xl mt-3 bg-[#4b6bfb] capitalize text-white py-2 font-medium text-lg hover:opacity-70'>signup</button>
                        <p className='mt-3 text-sm text-center'>Have an account? <Link className='text-[#4b6bfb]' to={"/login"}>Login</Link></p>
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

export default UpdateProfile