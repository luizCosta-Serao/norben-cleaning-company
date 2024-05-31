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
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.1745618548216!2d-49.28564795001526!3d-25.465845959326856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce49d65c87e57%3A0xeb8cd6c6e843d0d0!2sR.%20Amazonas%20-%20Fazendinha%2FPort%C3%A3o%2C%20Curitiba%20-%20PR%2C%2080610-030!5e0!3m2!1spt-BR!2sbr!4v1717155237528!5m2!1spt-BR!2sbr" width="100%" height="450" style={{border: '0',marginTop: '4rem'}} loading="lazy"></iframe>
    </div>
  )
}

export default Home