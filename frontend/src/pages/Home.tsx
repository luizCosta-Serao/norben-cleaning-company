import React from 'react'
import Hero from '../components/Hero/Hero'
import CleaningServices from '../components/CleaningServices/CleaningServices'
import About from '../components/About/About'
import CCCleaning from '../components/CCCleaning/CCCleaning'
import QuoteEasy from '../components/QuoteEasy/QuoteEasy'
import ImpressiveClean from '../components/ImpressiveClean/ImpressiveClean'
import Contact from '../components/Contact/Contact'

const Home = () => {
  const divRef = React.useRef<null | HTMLDivElement>(null)

  React.useEffect(() => {
    if (divRef && divRef.current) {
      const child = divRef.current
      console.log(child.children[2].getBoundingClientRect().top)
    }
  }, [])

  return (
    <div ref={divRef}>
      <Hero />
      <CleaningServices />
      <About />
      <CCCleaning />
      <QuoteEasy />
      <ImpressiveClean />
      <Contact />
    </div>
  )
}

export default Home