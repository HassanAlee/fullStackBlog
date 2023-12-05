import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ProfileTop } from '../components/ProfileTop'
import AllBlogs from '../components/AllBlogs'
import { getAllBlogs } from '../redux-toolkit/features/blogsSlice';
import { useParams } from 'react-router-dom';
const SingleAuthor = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { authors } = useSelector((state) => state.userSlice)
    const { blogs } = useSelector((state) => state.blogsSlice)
    useEffect(() => {
        if (blogs.length == 0) {
            dispatch(getAllBlogs(currentUser._id))
        }
    }, [])
    return (
        <>
            <ProfileTop currentUser={authors.find((author) => author._id == id)} />
            {
                window.location.pathname == "/profile" ? <AllBlogs blogs={blogs.filter((blog) => blog.authorRef == currentUser._id)} /> : <AllBlogs blogs={blogs} />
            }

        </>
    )
}

export default SingleAuthor