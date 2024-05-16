import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import Facebook from '../../assets/facebook.svg'
import Instagram from '../../assets/instagram.svg'
import Twitter from '../../assets/twitter.svg'
import Pinterest from '../../assets/pinterest.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerActions}>
        <div className={styles.links}>
          <h2>Links</h2>
          <ul>
            <li><Link to='/'>About us</Link></li>
            <li><Link to='/'>Categories</Link></li>
            <li><Link to='/'>Services List</Link></li>
          </ul>
        </div>
        <div className={styles.account}>
          <h2>Account</h2>
          <ul>
            <li><Link to='/'>Login</Link></li>
            <li><Link to='/'>Register</Link></li>
          </ul>
        </div>
        <div className={styles.legal}>
          <h2>Legal</h2>
          <ul>
            <li><Link to='/'>Term and conditions</Link></li>
            <li><Link to='/'>privacy policy</Link></li>
          </ul>
        </div>
        <div className={styles.socialLinks}>
          <h2>Social Links</h2>
          <ul>
            <li><Link to='/'>
              <img src={Facebook} alt="Facebook" />
            </Link></li>
            <li><Link to='/'>
              <img src={Instagram} alt="Instagram" />
            </Link></li>
            <li><Link to='/'>
              <img src={Twitter} alt="Twitter" />
            </Link></li>
            <li><Link to='/'>
              <img src={Pinterest} alt="Pinterest" />
            </Link></li>
          </ul>
        </div>
      </section>
      <p className={styles.rightsReserved}>Copyright © 2021. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer