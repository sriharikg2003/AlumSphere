import React from 'react'
import Logo from './Logo'

const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMabSckzXn5B-T5HOcLydcLuZu6arkxFR9elS0PbQv3pgXDv21UCmp28dVoo3owEVxSm0&usqp=CAU"
const facebook = "https://www.facebook.com/images/fb_icon_325x325.png"
const twitter = "https://abs.twimg.com/icons/apple-touch-icon-192x192.png"
const instagram = "https://www.instagram.com/static/images/ico/apple-touch-icon-76x76-precomposed.png/666282be8229.png"
const linkedin = "https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png"

const deleteMe = "https://www.linkedin.com/in/srihari-k-g-91931a1ab/";

function ProfileCard(props) {
  return (
    <div className="profile-card" >
      
             
                  <img src={img} className="profile-img" />
           <div className='profile-right'>
              <div class="profile-name profile-text" >
              {props.name}
              </div>
              <div class="profile-year profile-text" >
              {props.yearOfJoin}
              </div>
              <div class="profile-location profile-text" >
              {props.location}
              </div>
        
      <div className="urls" >
        <Logo url={facebook} href={props.facebook} />
        <Logo url={twitter} href={props.twitter} />
        <Logo url={instagram} href={props.instagram} />
        <Logo url={linkedin} href={props.linkedIn} />
      </div>
</div>
    </div>
  )
}

export default ProfileCard;