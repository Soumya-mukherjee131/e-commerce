import React from 'react'
import Topbar from './Topbar/Topbar'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import FirstSection from './section1/FirstSection'
import SecondSection from './section2/SecondSection'
import ThirdSection from './section3/ThirdSection'
import FourthSection from './section4/FourthSection'
import FifthSection from './section5/FifthSection'
import NewsLetterSection from './NewsLettersection/NewsLetterSection'

const Header = () => {
  return (
    <>
    <Topbar/>
      <Navbar/>
      <Hero/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <NewsLetterSection/>
    </>
  )
}

export default Header
