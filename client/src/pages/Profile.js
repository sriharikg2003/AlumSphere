import React from 'react'
import MainLayout from '../Layout/MainLayout'
import BioData from '../components/BioData'
const img = "https://media.licdn.com/dms/image/C4E03AQFvzgVmSOtn-Q/profile-displayphoto-shrink_800_800/0/1645170254004?e=1693440000&v=beta&t=DK097B3DFMagq1g77y1s8ngY25FnzBHPpof_aHToLiE"
function Profile() {
  return (
    <MainLayout>
           <BioData />
    </MainLayout>
  )
}

export default Profile;
