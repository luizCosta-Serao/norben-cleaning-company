import styles from './CleaningServices.module.css'
import CommercialServices from '../../assets/commercial-services.png'
import JanitorialServices from '../../assets/janitorial-services.png'
import FloorCleaning from '../../assets/floor-cleaning.png'
import DisinfectionServices from '../../assets/disinfection-services.png'
import React from 'react'

const CleaningServices = () => {
  const [position, setPosition] = React.useState(0)
  const [active, setActive] = React.useState(1)
  const ulRef = React.useRef<HTMLUListElement>(null)
  const media = window.matchMedia('(min-width: 800px)')

  function sliderNext() {
    if (ulRef.current && position < ulRef.current?.clientWidth) {
      setActive(active + 1)
    }
  }

  function sliderPrev() {
    const condition = media.matches ? position > 150 : position > 270
    if (condition) {
      setActive(active - 1)
    }
  }

  React.useEffect(() => {
    if (ulRef && ulRef.current) {
      const ulWidth = ulRef.current.clientWidth
      const ulChildrens = ulRef.current.children.length
      const moveSlide = ulWidth / ulChildrens
      setPosition(moveSlide * active)
    }
  }, [active])

  React.useEffect(() => {
    function reset() {
      if (ulRef && ulRef.current && window.innerWidth < 1000) {
        const ulWidth = ulRef.current.clientWidth
        const ulChildrens = ulRef.current.children.length
        const moveSlide = ulWidth / ulChildrens
        setActive(1)
        setPosition(moveSlide * active)
      } else {
        setPosition(0)
      }
    }
    
    window.addEventListener('resize', reset)
    return () => {
      window.removeEventListener('resize', reset)
    }
  }, [active])

  React.useEffect(() => {
    if (window.innerWidth >= 1000) {
      setPosition(0)
    }
  }, [])

  return (
    <section className={styles.cleaningServices}>
    <span onClick={sliderPrev} className={styles.prev}>{'<'}</span>
  <ul ref={ulRef} style={{
    transform:`translate3d(${-position}px, 0, 0)`,
    transition: '.3s'
  }} className={styles.listServices}>
    <li className={styles.itemService}>
      <img src={CommercialServices} alt="" />
      <h2>Commercial Services</h2>
    </li>
    <li className={styles.itemService}>
      <img src={JanitorialServices} alt="" />
      <h2>Janitorial Services</h2>
    </li>
    <li className={styles.itemService}>
      <img src={FloorCleaning} alt="" />
      <h2>Floor Cleaning</h2>
    </li>
    <li className={styles.itemService}>
      <img src={DisinfectionServices} alt="" />
      <h2>Disinfection Services</h2>
    </li>
  </ul>
    <span onClick={sliderNext} className={styles.next}>{'>'}</span>
  </section>
  )
}

export default CleaningServices