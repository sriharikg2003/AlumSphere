import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
function MainLayout() {

  // change state to true here
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const img = "https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Indian_Institute_of_Technology_Dharwad_Logo.svg/640px-Indian_Institute_of_Technology_Dharwad_Logo.svg.png";

  if (isLoading) {
    return (

      <div className="App" >
        <img className="loader-img" src={img} />
        <h3 className="loader-text " >
            IIT ALUMNI
        </h3>
        
      </div>
      
      )

  }
  else
    return (
      <div>
        <Header />

        <Outlet />

        <Footer />

      </div>
    )
}

export default MainLayout