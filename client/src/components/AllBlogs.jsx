import React from 'react'
import SingleBlog from './SingleBlog'

const AllBlogs = ({ blogs }) => {
    return (
        <section className='mt-28 mb-60'>
            <h1 className='text-2xl font-bold capitalize'>latest blogs</h1>
            <div className="container flex flex-wrap sm:flex-row px-3 sm:px-0 flex-col justify-between ">
                {
                    blogs.map((blog, i) => <SingleBlog {...blog} key={i} />)
                }
            </div>
        </section>
    )
}

export default AllBlogs