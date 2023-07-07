import React from 'react'
import "./NewsAndStories.css"
import NewsBlock from './NewsAndStoriesBlock'

function Events() {
  return (
    <div className='news-and-stories'>
      <div className='news-heading'>NEWS AND STORIES</div>
      <NewsBlock />
      <NewsBlock />
      <NewsBlock />
    </div>
  )
}

export default Events

