import BoxCleaning from './BoxCleaning'
import styles from './CCCleaning.module.css'
import WindowCleaning from '../../assets/window-cleaning.png'
import Vacuuming from '../../assets/vacuuming.png'
import BathroomCleaning from '../../assets/bathroom-cleaning.png'
import CarpetCleaning from '../../assets/carpet-cleaning.png'
import React from 'react'

const CCCleaning = () => {
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
    const condition = media.matches ? position > 250 : position > 300
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
    <section id='cleaning-services' className={styles.ccCleaning}>
      <h1 className={styles.ccTitle}>CC Cleaning Services</h1>
      <p className={styles.ccDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet feugiat interdum nunc.</p>
      <span onClick={sliderPrev} className={styles.prev}>{'<'}</span>
      <ul ref={ulRef} style={{
        transform:`translate3d(${-position}px, 0, 0)`,
        transition: '.3s'
      }} className={styles.ccList}>
        <BoxCleaning img={WindowCleaning} title='Window Cleaning' description="No matter which residential cleaning services fit your budget and cleaning needs, you have much to gain and nothing to lose. That's be..."/>
        <BoxCleaning img={Vacuuming} title='Vacuuming' description="No matter which residential cleaning services fit your budget and cleaning needs, you have much to gain and nothing to lose. That's be..."/>
        <BoxCleaning img={BathroomCleaning} title='Bathroom Cleaning' description="No matter which residential cleaning services fit your budget and cleaning needs, you have much to gain and nothing to lose. That's be..."/>
        <BoxCleaning img={CarpetCleaning} title='Carpet Cleaning' description="No matter which residential cleaning services fit your budget and cleaning needs, you have much to gain and nothing to lose. That's be..."/>
      </ul>
      <span onClick={sliderNext} className={styles.next}>{'>'}</span>
    </section>
  )
}

export default CCCleaning