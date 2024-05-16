import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>GET CLEANED</h1>
      <p>with CC Commercial Cleaners</p>
      <Link target='_blank' to="https://w.app/D9moOk">Get appointment now</Link>
    </section>
  )
}

export default Hero