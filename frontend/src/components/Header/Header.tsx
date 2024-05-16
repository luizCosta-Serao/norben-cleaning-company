import styles from './Header.module.css'
import Clock from '../../assets/clock.svg'
import Telephone from '../../assets/telephone.svg'
import NorbenLogo from '../../assets/norben-logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  function scrollLink(top: number) {
    window.scrollTo({
      top: top,
      behavior: 'smooth'
    })
  }

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
        <Link target='_blank' to="https://w.app/D9moOk">Get appointment now</Link>
      </div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={NorbenLogo} alt="Norben Logo" />
        </div>
        <nav className={styles.menu}>
          <ul>
            <li onClick={() => scrollLink(0)}><Link to='/ '>Home</Link></li>
            <li onClick={() => scrollLink(1100)}><Link to='#cleaningServices'>About</Link></li>
            <li onClick={() => scrollLink(2050)}><Link to='/'>Cleaning Services</Link></li>
            <li onClick={() => scrollLink(4370)}><Link to='/'>Contact Us</Link></li>
          </ul>
        </nav>
      </header>
    </section>
  )
}

export default Header