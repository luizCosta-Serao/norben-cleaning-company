import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import React from 'react'

function App() {

  React.useEffect(() => {
    const idAnchor = document.querySelectorAll('header nav a')
    idAnchor.forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault()
        const id = anchor.getAttribute('href')
        const item = id && document.querySelector(id)
        const topDistance = item &&  item?.getBoundingClientRect().top        
        // Problema está no topDistance
        console.log(topDistance)
        if (topDistance) {
          window.scrollBy({
            top: Number(topDistance) - 200,
            behavior: 'smooth'
          })
        }
      })
    })
  }, [])

  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
