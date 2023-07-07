import React from 'react'
import PhotoBox from './PhotoBox'
import { useState } from 'react'
import "./Gallery.css"



const arr = [

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIlJAt0YOEBZyEC-NUDhpnjPHCa30y6nm7oRPE0XKXMj834eofL_rI6fHtc2HaIjRC6I8&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdNxlWuIh0JcjzMJiqn5rLTZ2PuNOzhjHES_MIjQXaEaAvzDtQYYYvR1GPnLb1Pp1T-5I&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp_862qifYFAbcwPQUQlJQ0U5iVMraqH0aWQjUnaGhYnAUXD50itWLhtancI0-tDz3NDo&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj7mVaAhJXIQPWiQjUv75wA1ZOANrbj43zE9mTgQKA5J1KcEwTp5hsIExgCGsCsh0lcVo&usqp=CAU",
"https://www.iitdh.ac.in/image/banner-1.jpg",
"https://qph.cf2.quoracdn.net/main-qimg-5a0d95ad98738b108c37ff46e90d4b74",
"https://qph.cf2.quoracdn.net/main-qimg-6e8fb88c6a8486b5bd0d0d08c1dc6b32",
"https://qph.cf2.quoracdn.net/main-qimg-1417261f92ba047a0112846bef7721c6"



];

function Gallery() {


  return (
    <div className='gallery-parent'>
      <p className='gallery-title'>
       Gallery
      </p>

      <div className='photos-gallery-container'>

        <PhotoBox img={arr[(Math.floor(Math.random() * (arr.length)))]} />
        <PhotoBox img={arr[(Math.floor(Math.random() * (arr.length)))]} />
        <PhotoBox img={arr[(Math.floor(Math.random() * (arr.length)))]} />
        <PhotoBox img={arr[(Math.floor(Math.random() * (arr.length)))]} />
        <PhotoBox img={arr[(Math.floor(Math.random() * (arr.length)))]} />
        <PhotoBox img={arr[(Math.floor(Math.random() * (arr.length)))]} />
        <PhotoBox img={arr[(Math.floor(Math.random() * (arr.length)))]} />
        <PhotoBox img={arr[(Math.floor(Math.random() * (arr.length)))]} />
        <PhotoBox img={arr[(Math.floor(Math.random() * (arr.length)))]} />
        <PhotoBox img={arr[(Math.floor(Math.random() * (arr.length)))]} />
        <PhotoBox img={arr[(Math.floor(Math.random() * (arr.length)))]} />
        <PhotoBox img={arr[(Math.floor(Math.random() * (arr.length)))]} />
        <PhotoBox img={arr[(Math.floor(Math.random() * (arr.length)))]} />

      </div>
    </div>
  )
}

export default Gallery