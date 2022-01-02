import React from 'react'
import ImageSlider from './ImageSlider';
import HomePageProductContainer from './../HomePageProduct/HomePageProductContainer'
import Footer from './Footer'

function LandingPage() {
  return (
    <React.Fragment>
      <div className="container-fluid px-0">
        <ImageSlider />
        <HomePageProductContainer />
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default LandingPage;
