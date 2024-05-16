import React from 'react'
import Hero from '../components/Hero/Hero'
import CleaningServices from '../components/CleaningServices/CleaningServices'
import About from '../components/About/About'
import CCCleaning from '../components/CCCleaning/CCCleaning'
import QuoteEasy from '../components/QuoteEasy/QuoteEasy'
import ImpressiveClean from '../components/ImpressiveClean/ImpressiveClean'
import Contact from '../components/Contact/Contact'

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <CleaningServices />
      <About />
      <CCCleaning />
      <QuoteEasy />
      <ImpressiveClean />
      <Contact />
    </React.Fragment>
  )
}

export default Home