import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
export const ProfileTop = ({ currentUser }) => {
    return (
        <div className='bg-[#f6f6f7] px-10 sm:px-40 py-10'>
            {/* img and name */}
            <article className='flex justify-center items-center gap-x-4 '>
                <img src="/images/user1.png" alt={currentUser.name} />
                <div>
                    <h1 className='text-[#181A2A]'>{currentUser.name}</h1>
                    <h4 className='text-sm text-[#696A75]'>{currentUser.country}</h4>
                </div>
            </article>
            <p className='text-[#3B3C4A] text-lg text-center my-8'>Meet {currentUser.name}, a passionate writer and blogger with a love for technology and travel. {currentUser.name} holds a degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of the impact technology has on our lives.</p>
            {/* socials */}
            <div className='flex justify-center gap-x-2 text-3xl text-[#696A75]'>
                <Link to={"https://instagram.com/me.hassanali"} target='_blank'><FaFacebookSquare /></Link>
                <Link to={"https://instagram.com/me.hassanali"} target='_blank'><FaInstagramSquare /></Link>
                <Link to={"https://instagram.com/me.hassanali"} target='_blank'><FaTwitterSquare /></Link>
                <Link to={"https://instagram.com/me.hassanali"} target='_blank'><FaLinkedin /></Link>
                <Link to={"https://instagram.com/me.hassanali"} target='_blank'><FaYoutubeSquare /></Link>
            </div>
        </div>
    )
}
