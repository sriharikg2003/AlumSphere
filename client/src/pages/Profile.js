import React from 'react'

import BioData from '../components/BioData/BioData'

const img = "https://media.licdn.com/dms/image/C4E03AQFvzgVmSOtn-Q/profile-displayphoto-shrink_800_800/0/1645170254004?e=1693440000&v=beta&t=DK097B3DFMagq1g77y1s8ngY25FnzBHPpof_aHToLiE"
function Profile(props) {
  return (
  
           <BioData sessionId={props.sessionId}/>

  )
}

export default Profile;
