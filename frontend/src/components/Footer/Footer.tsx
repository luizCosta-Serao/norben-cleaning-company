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
            <li><a href='/'>About us</a></li>
            <li><a href='/'>Categories</a></li>
            <li><a href='/'>Services List</a></li>
          </ul>
        </div>
        <div className={styles.account}>
          <h2>Account</h2>
          <ul>
            <li><a href='/'>Login</a></li>
            <li><a href='/'>Register</a></li>
          </ul>
        </div>
        <div className={styles.legal}>
          <h2>Legal</h2>
          <ul>
            <li><a href='/'>Term and conditions</a></li>
            <li><a href='/'>privacy policy</a></li>
          </ul>
        </div>
        <div className={styles.socialLinks}>
          <h2>Social Links</h2>
          <ul>
            <li><a href='/'>
              <img src={Facebook} alt="Facebook" />
            </a></li>
            <li><a href='/'>
              <img src={Instagram} alt="Instagram" />
            </a></li>
            <li><a href='/'>
              <img src={Twitter} alt="Twitter" />
            </a></li>
            <li><a href='/'>
              <img src={Pinterest} alt="Pinterest" />
            </a></li>
          </ul>
        </div>
      </section>
      <p className={styles.rightsReserved}>Copyright © 2021. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer