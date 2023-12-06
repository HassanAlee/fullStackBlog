import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllBlogs } from '../redux-toolkit/features/blogsSlice'
import { useParams } from 'react-router-dom'
const OpenBlog = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { blogs } = useSelector((state) => state.blogsSlice)
    useEffect(() => {
        if (blogs.length == 0) {
            dispatch(getAllBlogs())
        }
    }, [])
    const thisBlog = blogs.find((item => item._id == id))
    return (
        <div>
            <h1>{thisBlog.title}</h1>
            <h2>{thisBlog.authorName}</h2>
        </div>
    )
}

export default OpenBlog