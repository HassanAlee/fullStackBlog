import React, { useState } from 'react'
import Button from '../components/Button'
import { FaImage } from "react-icons/fa6";
import { useSelector } from 'react-redux'
const catList = ["Technology", "Motivation", "Entertainment", "Sports", "Traveling"]
const NewBlog = () => {
    const { currentUser } = useSelector((state) => state.userSlice)
    const [blogData, setBlogData] = useState(() => {
        return {
            title: "",
            description: "",
            authorRef: "",
            image: "",
            category: ""
        }
    })
    // change handler to update the state
    const handleChange = (e) => {
        setBlogData({ ...blogData, [e.target.name]: e.target.value, authorRef: currentUser._id })
    }
    // submit handler to create the blog
    const handleSubmit = () => {
        console.log(blogData);
    }
    return (
        <section className=' flex justify-between flex-col sm:flex-row p-4 sm:p-0'>
            <article className=' w-full sm:w-3/5'>
                <input type="text" placeholder='Add Title' name='title' id='title' className='bg-[#f6f6f7] w-full px-5 py-3 text-2xl outline-0 mb-4 rounded-md' value={blogData.title} onChange={handleChange} /> <br />
                <textarea name="description" id="description" placeholder='Start writing your blog here'
                    className='bg-[#f6f6f7] w-full px-5 py-3 text-base outline-0 mb-4 rounded-md resize-none' rows={15}
                    value={blogData.description}
                    onChange={handleChange}
                >
                </textarea>
            </article>
            <article className=' w-full sm:w-2/6 py-8 px-3 rounded-md bg-[#f6f6f7]'>
                <p className='text-center text-[#8395a7] text-sm'>Click the icon below to upload an image</p>
                <div className='text-center'>
                    <label htmlFor="image" className=' text-center'>
                        <FaImage className='w-3/4 text-[#8395a7] h-1/4 mx-auto cursor-pointer' />
                    </label>
                    <input type="file" id='image' name='image' accept='image/*' className='invisible' />
                </div>
                <select name="category" id="category" defaultValue={"technology"} className='mb-10 w-full outline-0 p-2'>
                    {
                        catList.map((item, i) => <option value={item.toLocaleUpperCase()} key={i}>{item}</option>)
                    }
                </select>
                <div className='flex gap-x-4 justify-center'>
                    <Button text={"publish"} click={handleSubmit} />
                    <Button text={"cancel"} />
                </div>
            </article>
        </section>
    )
}

export default NewBlog