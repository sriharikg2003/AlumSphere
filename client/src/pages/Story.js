import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import Events from '../components/Events/Events';
import NewsAndStoriesEvents from '../components/News/NewsAndStories';
import IITMap from '../components/IITMap';


function Story() {
  return (
   <div>
   <ImageCarousel />
   <div className='Events-and-News'>
   <Events />
   <NewsAndStoriesEvents />
   </div>
   <IITMap />
      </div>
  )
}

export default Story;