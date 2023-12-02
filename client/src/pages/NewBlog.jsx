import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { FaImage } from "react-icons/fa6";
import { useSelector, useDispatch } from 'react-redux'
import { app } from '../firebase';
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from 'firebase/storage';
import { addBlog } from '../redux-toolkit/features/blogsSlice';
const catList = ["Technology", "Motivation", "Entertainment", "Sports", "Traveling"]
const NewBlog = () => {
    const { currentUser } = useSelector((state) => state.userSlice)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [blogData, setBlogData] = useState(() => {
        return {
            title: "",
            description: "",
            authorRef: "",
            image: "",
            category: ""
        }
    })
    // firebase related
    const [file, setFile] = useState(undefined);
    const [filePerc, setFilePerc] = useState(0);
    const [fileUploadError, setFileUploadError] = useState(false);
    // image upload function
    const handleFileUpload = (file) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setFilePerc(Math.round(progress));
            },
            (error) => {
                setFileUploadError(true);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setBlogData({ ...blogData, image: downloadURL })
                    setFile('')
                }
                );
            }
        );
    };
    // useEffect to upload image
    useEffect(() => {
        if (file) {
            handleFileUpload(file)
        }
    }, [file])
    // change handler to update the state
    const handleChange = (e) => {
        setBlogData({ ...blogData, [e.target.name]: e.target.value, authorRef: currentUser._id })
    }
    // submit handler to create the blog
    const handleSubmit = () => {
        dispatch(addBlog(blogData)).then((res) => {
            if (res.payload.hasOwnProperty("description")) {
                setTimeout(() => {
                    navigate('/profile');
                }, 3000)
            }

        })
    };
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
                        {
                            !blogData.image ? !file ? <FaImage className='w-3/4 text-[#8395a7] h-1/4 mx-auto cursor-pointer' /> : <p className='mt-4 text-sm text-green-500'>Please wait till image is uploaded</p> : !fileUploadError ? <img src={blogData.image} alt='image' className='mt-4' /> : <p className='mt-4 text-sm text-red-500'>Something went wrong while uploading</p>
                        }
                    </label>
                    <input type="file" id='image' name='image' accept='image/*' className='invisible' onChange={(e) => {
                        setFile(e.target.files[0])
                    }} />
                </div>
                <select name="category" id="category" defaultValue={"technology"} className='mb-10 w-full outline-0 p-2' onChange={(e) => setBlogData({ ...blogData, category: e.target.value })}>
                    {
                        catList.map((item, i) => <option value={item} key={i}>{item}</option>)
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