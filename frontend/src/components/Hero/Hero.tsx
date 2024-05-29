import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section id='hero' className={styles.hero}>
      <h1>GET CLEANED</h1>
      <p>with CC Commercial Cleaners</p>
      <a target='_blank' href="https://api.whatsapp.com/send?phone=5544988099490&text=Em%20que%20posso%20te%20ajudar?">Get appointment now</a>
    </section>
  )
}

export default Hero 