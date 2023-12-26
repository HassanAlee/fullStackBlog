import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import { logout } from '../redux-toolkit/features/userSlice';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../redux-toolkit/features/userSlice';
import { deleteUserBlogs } from '../redux-toolkit/features/blogsSlice';
export const ProfileTop = ({ currentUser }) => {
    const dispatch = useDispatch()
    const socialList = [
        {
            icon: <FaFacebookSquare />,
            url: currentUser.facebook || ""
        },
        {
            icon: <FaInstagramSquare />,
            url: currentUser.instagram || ""
        },
        {
            icon: <FaTwitterSquare />,
            url: currentUser.twitter || ""
        },
        {
            icon: <FaLinkedin />,
            url: currentUser.linkedin || ""
        },
        {
            icon: <FaYoutubeSquare />,
            url: currentUser.youtube || ""
        }
    ]
    const navigate = useNavigate();
    // load blogs
    const loadBlogs = () => {
        console.log("this will load the blogs");
    }
    const path = window.location.pathname;
    // delete user account handler
    const deleteAccount = (id) => {
        dispatch(deleteUser(id)).then((res) => {
            dispatch(deleteUserBlogs(res.payload._id))
        })
    }
    return (
        <div className='bg-[#f6f6f7] px-10 sm:px-40 py-10 rounded-lg'>
            {/* img and name */}
            <article className='flex justify-center items-center gap-x-4 '>
                <img src={currentUser.profile ? currentUser.profile : "user.png" ? "user.png" : "/public/images/user.png"} className='h-12 w-12 rounded-full' alt={currentUser.name} />
                <div>
                    <h1 className='text-[#181A2A]'>{currentUser.name}</h1>
                    <h4 className='text-sm text-[#696A75]'>{currentUser.country}</h4>
                    <div className='flex justify-between gap-3 mt-2'>
                        <button className='bg-[#4B6BFB] px-2 capitalize text-white rounded-md hover:opacity-50' onClick={() => dispatch(logout())}>logout</button>
                        <button className='bg-[#c0392b] px-2 capitalize text-white rounded-md hover:opacity-50' onClick={() => deleteAccount(currentUser._id)}>delete account</button>
                    </div>
                </div>
            </article>
            <p className='text-[#3B3C4A] text-lg text-center my-8'>
                {currentUser.info || !currentUser.info == "" ? currentUser.info : `Meet ${currentUser.name}, a passionate writer and blogger with a love for technology and travel. ${currentUser.name} holds a degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of the impact technology has on our lives.`}
            </p>
            {/* socials */}
            <div className='flex justify-center gap-x-2 text-3xl text-[#696A75]'>
                {
                    socialList.map((link, i) => (link.url || link.url != "") && <Link key={i} to={link.url} target='_blank'>{link.icon}</Link>)
                }
            </div>
            {/* buttons */}
            {
                window.location.pathname == "/profile" && <>
                    <div className='flex flex-row mt-10 justify-center gap-4 flex-wrap'>
                        <Button text={"update profile"} click={() => navigate('/update-profile')} />
                        <Button text={"view blogs"} click={loadBlogs} />
                        <Button text={"write blog"} click={() => navigate('/write-blog')} />
                    </div>
                </>
            }
        </div>
    )
}
