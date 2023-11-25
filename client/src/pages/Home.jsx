import React, { useEffect } from 'react'
import AllBlogs from '../components/AllBlogs';
import Cookies from 'js-cookie'
import Button from '../components/Button';
const blogs = [
  {
    title: "The Power of Discipline in Sports",
    author: "Athlete123",
    date: "2023-11-14",
    image: "images/blog1.png",
    authorImg: "images/user1.png",
    description: "Discover how discipline plays a crucial role in achieving success in sports. Learn from real-life examples of top athletes who have mastered the art of discipline.",
  },
  {
    title: "Motivation Monday: Overcoming Challenges",
    author: "MotivateMe",
    date: "2023-11-15",
    image: "images/blog2.png",
    authorImg: "images/user2.png",
    description: "Start your week with a dose of motivation! Explore strategies to overcome challenges and stay focused on your goals, no matter what obstacles you face.",
  },
  {
    title: "Navigating the Stock Market Rollercoaster",
    author: "StockGuru",
    date: "2023-11-16",
    image: "images/blog3.png",
    authorImg: "images/user3.png",
    description: "Dive into the world of stocks and learn how to navigate market fluctuations. Gain insights into making informed investment decisions and building a robust portfolio.",
  },
  {
    title: "Wanderlust Chronicles: Exploring Hidden Gems",
    author: "TravelExplorer",
    date: "2023-11-17",
    image: "https://images.unsplash.com/photo-1682687220211-c471118c9e92?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorImg: "images/user1.png",
    description: "Embark on a virtual journey to discover hidden travel gems around the world. Uncover off-the-beaten-path destinations and get inspired to plan your next adventure.",
  },
  {
    title: "Study Smarter, Not Harder",
    author: "StudyPro",
    date: "2023-11-18",
    image: "images/blog2.png",
    authorImg: "images/user2.png",
    description: "Explore effective study techniques and strategies to boost productivity and retention. Whether you're a student or a lifelong learner, these tips will enhance your learning experience.",
  },
  {
    title: "The Art of Coding: Mastering Programming Languages",
    author: "CodeMaster",
    date: "2023-11-19",
    image: "images/blog3.png",
    authorImg: "images/user3.png",
    description: "Dive into the fascinating world of programming. Discover the nuances of different programming languages and gain insights into mastering the art of coding for various applications.",
  },
];
const Home = () => {
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