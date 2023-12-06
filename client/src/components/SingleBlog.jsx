import React from 'react'
import { getDateFormat } from '../utils/getDateFormat'
import { Link } from 'react-router-dom'
import { FiEdit, FiLogIn } from "react-icons/fi"
import { FaTrash } from "react-icons/fa";
const SingleBlog = ({ _id, title, authorImage, authorName, authorRef, image, category, createdAt, icons }) => {
    const formattedDate = getDateFormat(createdAt)
    return (
        <Link to={`/blog/${_id}`} className='sm:w-[32.5%]  w-full  p-4 border rounded-md mb-4 relative z-0'>
            {
                icons && <div className='absolute top-4 right-4 flex gap-x-1 text-xl text-[#4b6bfb] z-30 '>
                    <FiEdit className='hover:text-red-700' onClick={(e) => {
                        e.stopPropagation()
                        e.preventDefault()
                        console.log("editing")
                    }} />
                    <FaTrash className='hover:text-red-700' />
                </div>
            }
            <img src={image} alt={title} className='w-full object-cover h-[200px]' />
            <h1 className='text-[#4b6bfb] bg-[#f6f8ff] p-[5px] inline-block rounded-md my-6 capitalize'>{category}</h1>
            <h1 className='font-semibold text-2xl -mt-3'>{title}</h1>
            <div className='flex items-center gap-x-4 mt-4'>
                <img src={authorImage} alt={authorName} className='h-[40px] w-[40px] rounded-full' />
                <div className='flex gap-x-3 text-[#97989f] items-center'>
                    <h1 className='font-medium'>{authorName}</h1>
                    <p className='text-sm'>{formattedDate.toLocaleString('en-US', { month: 'long' })}{" "}{formattedDate.getDate()},{" "}{formattedDate.getFullYear()}</p>
                </div>
            </div>
        </Link>
    )
}

export default SingleBlog