import styles from './Header.module.css'
import Clock from '../../assets/clock.svg'
import Telephone from '../../assets/telephone.svg'
import NorbenLogo from '../../assets/norben-logo.png'
import MenuMobile from '../../assets/menu-mobile.svg'
import React from 'react'

const Header = () => {
  const [menuActive, setMenuActive] = React.useState(false)

  /*
  React.useEffect(() => {
    const idAnchor = document.querySelectorAll('header nav a')
    idAnchor.forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault()
        const item = document.querySelector(`${anchor.getAttribute('href')}`)
        console.log(item)
        const topDistance = item?.getBoundingClientRect().top
        console.log(topDistance)
          window.scrollTo({
            top: topDistance,
            behavior: 'smooth'
        })
      })
    })
  }, [])
  */

  React.useEffect(() => {
    function disabledMenu() {
      setMenuActive(false)
    }
    
    window.addEventListener('scroll', disabledMenu)
    window.addEventListener('resize', disabledMenu)

    return () => {
      window.removeEventListener('scroll', disabledMenu)
      window.removeEventListener('resize', disabledMenu)
    }
  })

  return (
    <section className={styles.containerHeader}>
      <div className={styles.infoHeader}>
        <ul>
          <li>
            <img src={Clock} alt="" />
            Mon-Fri: 9AM - 5PM
          </li>
          <li>
            <img src={Telephone} alt="" />
            (205) 484-9624
          </li>
        </ul>
        <a target='_blank' href="https://api.whatsapp.com/send?phone=5544988099490&text=Em%20que%20posso%20te%20ajudar?">Get appointment now</a>
      </div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={NorbenLogo} alt="Norben Logo" />
        </div>
        <div onClick={() => setMenuActive(!menuActive)} className={styles.menuMobile}><img src={MenuMobile} alt="Menu" /></div>
        <nav className={`${styles.menu} ${menuActive ? styles.active : ''}`}>
          <ul>
            <li><a href='#hero '>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#cleaning-services'>Cleaning Services</a></li>
            <li><a href='#contact'>Contact Us</a></li>
          </ul>
        </nav>
      </header>
    </section>
  )
}

export default Header