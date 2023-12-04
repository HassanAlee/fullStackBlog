import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ProfileTop } from '../components/ProfileTop'
import AllBlogs from '../components/AllBlogs'
import { getAllBlogs } from '../redux-toolkit/features/blogsSlice';
const Profile = () => {
  const dispatch = useDispatch()
  const { currentUser } = useSelector((state) => state.userSlice)
  const { blogs } = useSelector((state) => state.blogsSlice)
  useEffect(() => {
    if (blogs.length == 0) {
      dispatch(getAllBlogs(currentUser._id))
    }
  }, [])
  return (
    <>
      <ProfileTop currentUser={currentUser} />
      <AllBlogs blogs={blogs} />
    </>
  )
}

export default Profile