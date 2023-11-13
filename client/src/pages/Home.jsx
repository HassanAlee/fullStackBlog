import React from 'react'

const Home = () => {
  return (
    <>
      {/* top section */}
      <section className='h-[670px] w-full relative '>
        <img src="images/Image.png" alt="main" className='h-full w-full object-cover rounded-2xl' />
        {/* blog info */}
        <div className='absolute bottom-[-10%] left-[4%] rounded-md bg-white w-[600px] flex flex-col gap-y-4 p-8 shadow-md'>
          <div><span className='bg-[#4b6bfb] p-2 text-white capitalize rounded-md'>technology</span></div>
          <h1 className='text-4xl font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus ducimus arc!</h1>
          <div className='flex items-center justify-between w-1/2'>
            <img src="images/user1.png" alt="user1" />
            <p className='capitalize text-[#97989F]'>john doe</p>
            <p className='capitalize text-[#97989F]'>august20,2022</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home