import React from 'react'
import MainLayout from '../Layout/MainLayout'
import ProfileCard from '../components/ProfileCard';

function Connect() {
  return (
    <MainLayout>
    <div className="profile-container">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
    </div>
</MainLayout>
  )
}

export default Connect;