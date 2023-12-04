import React, { useEffect } from 'react'
import AllBlogs from '../components/AllBlogs';
import Cookies from 'js-cookie'
import Button from '../components/Button';
import { getAllBlogs } from '../redux-toolkit/features/blogsSlice';
import { useSelector, useDispatch } from 'react-redux'
const Home = () => {
  const dispatch = useDispatch()
  const { blogs } = useSelector((state) => state.blogsSlice)
  useEffect(() => {
    if (blogs.length == 0) {
      dispatch(getAllBlogs())
    }
  }, [])
  return (
    <>
      {/* top section */}
      <section className='h-[670px] w-full relative mb-28 '>
        <img src="images/Image.png" alt="main" className='h-full w-full object-cover rounded-2xl' />
        {/* blog info */}
        <div className='absolute bottom-[-10%] left-[4%] rounded-md bg-white w-[96%] sm:w-[600px] flex flex-col gap-y-4 p-8 shadow-md'>
          <Button text={"technology"} />
          <h1 className='text-4xl font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus ducimus arc!</h1>
          <div className='flex items-center justify-between w-full sm:w-1/2'>
            <img src="images/user1.png" alt="user1" />
            <p className='capitalize text-[#97989F]'>john doe</p>
            <p className='capitalize text-[#97989F]'>august20,2022</p>
          </div>
        </div>
      </section>
      {/* all blogs section */}
      <AllBlogs blogs={blogs} />
    </>
  )
}

export default Home