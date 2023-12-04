import React from 'react'

const SingleBlog = ({ title, author, date, image, authorImg, description, category }) => {
    return (
        <article className='sm:w-[32.5%]  w-full mx-auto p-4 border rounded-md mb-4'>
            <img src={image} alt={title} className='w-full object-cover h-[200px]' />
            <h1 className='text-[#4b6bfb] bg-[#f6f8ff] p-[5px] inline-block rounded-md my-6 capitalize'>{category}</h1>
            <h1 className='text-red-600 -mt-3'>{title}</h1>
        </article>
    )
}

export default SingleBlog