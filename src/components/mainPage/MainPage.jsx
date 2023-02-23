import React from 'react'
import ContactUs from './contactUs/ContactUs'
import Directions from './directions/Directions'
import Insta from './insta/Insta'
import News from './news/News'
import Place from './ourPlace/Place'

const MainPage = () => {
  return (
    <>
        <ContactUs />
        <Directions />
        <News />
        <Insta />
        <Place />
    </>
  )
}

export default MainPage