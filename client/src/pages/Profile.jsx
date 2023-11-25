import React from 'react'
import { useSelector } from 'react-redux'
import { ProfileTop } from '../components/ProfileTop'
const Profile = () => {
  const { currentUser } = useSelector((state) => state.userSlice)
  return (
    <>
      <ProfileTop currentUser={currentUser} />
    </>
  )
}

export default Profile