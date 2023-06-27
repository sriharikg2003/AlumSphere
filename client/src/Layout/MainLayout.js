import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
function MainLayout({children}) {
  return (
    <div>
    <Header />
       <div>  {children} </div>
    <Footer />

    </div>
  )
}

export default MainLayout