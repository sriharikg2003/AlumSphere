import React from 'react'
import Logo from './Logo'

const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMabSckzXn5B-T5HOcLydcLuZu6arkxFR9elS0PbQv3pgXDv21UCmp28dVoo3owEVxSm0&usqp=CAU"
const facebook = "https://www.facebook.com/images/fb_icon_325x325.png"
const twitter = "https://abs.twimg.com/icons/apple-touch-icon-192x192.png"
const instagram = "https://www.instagram.com/static/images/ico/apple-touch-icon-76x76-precomposed.png/666282be8229.png"
const linkedin = "https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png"

const deleteMe = "https://www.linkedin.com/in/srihari-k-g-91931a1ab/";

function ProfileCard() {
  return (
    <div className="profile-card" >

      <div className="profile-info">
        <div  >
          <img src={img} className="profile-img" />
        </div>
        <div class="profile-name" >
          Srihari K G
        </div>
      </div>

      <div className="urls" >
        <Logo url={facebook} href={deleteMe}/>
        <Logo url={twitter} href={deleteMe}/>
        <Logo url={instagram} href={deleteMe}/>
        <Logo url={linkedin} href={deleteMe}/>
      </div>

    </div>
  )
}

export default ProfileCard;