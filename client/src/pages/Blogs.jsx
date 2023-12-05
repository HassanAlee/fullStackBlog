import React, { useEffect } from 'react'
import { FaUserAlt } from "react-icons/fa";
import AllBlogs from '../components/AllBlogs';
import { useSelector, useDispatch } from 'react-redux'
import { getAllBlogs } from '../redux-toolkit/features/blogsSlice';
const Blogs = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogsSlice)
  useEffect(() => {
    if (blogs.length == 0) {
      dispatch(getAllBlogs())
    }
  }, [])
  return (
    <section className='h-full'>
      <h1 className='capitalize text-center mb-4 text-2xl font-semibold'>all blogs</h1>
      {/* top head section */}
      <div className='h-[60vh] relative'>
        <img src="images/Image.png" alt="image" className='h-full w-full object-cover bg-center rounded-xl' />
        <div className='absolute top-1/2 sm:top-2/3 left-2 sm:left-8 h-full w-full'>
          <h1 className='bg-[#4b6bfb] text-white p-1 rounded-md inline-block capitalize '>technology</h1>
          <h1 className='my-1 text-white first-letter:capitalize text-2xl font-bold'>the impact of technology on th workplace: How technology is changing</h1>
          <div className='flex items-center gap-x-2 text-white text-sm'>
            <FaUserAlt className='text-2xl' />
            <p>tracey wilson</p>
            <p>august 22,2022</p>
          </div>
        </div>
      </div>
      {/* all blogs */}
      <div>
        {
          blogs && <AllBlogs blogs={blogs} />
        }
      </div>
    </section>
  )
}

export default Blogs