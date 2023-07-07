import React from 'react'
import { Link } from "react-router-dom";

const img = "https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=612x612&w=0&k=20&c=SQfmzF39HZJ_AqFGosVGKT9iGOdtS7ddhfj0EUl0Tkc="

const announcements = 'We are excited to announce the launch of our latest product! excited to announce the launch of our latest product!'
const link = "#"
function NewsBlock() {
    return (
        <div className='news-row'>
            <div className='news-pic'>
                <img src={img} alt='image' className='news-img' />
            </div>
            <div className='news-content'>
               <div className='announcement' >
               {announcements.slice(0,100)+"..."}  
               </div>   
               <div className='announcement-link' >
               <Link to={link} className='announcement' > View More </Link>
               </div>   

            </div>
        </div>
    )
}

export default NewsBlock