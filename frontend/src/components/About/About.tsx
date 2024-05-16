import styles from './About.module.css'
import AboutImg from '../../assets/about.png'

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutImg}>
        <img src={AboutImg} alt="" />
      </div>
      <div className={styles.aboutContent}>
        <h1 className={styles.aboutTitle}>Know Something About Our Company</h1>
        <p className={styles.aboutDescription}>There's no greater feeling than coming back to work to an empty trash can after stuffing your receptacle with the previous day's food, paper, and other refuse. Tasks like trash removal and other janitorial services add up and leave your business in a radiant condition. With more than 30 years of experience, we have ensured customer satisfaction by taking to heart every customer's feedback. We strive to improve the way cleaning is done in Birmingham, Alabama. Make CCC your first choice for commercial cleaning.</p>
        <h2 className={styles.aboutSubtitle}>Mission Statement</h2>
        <p className={styles.aboutDescription}>he mission of Classic Commercial Cleaning is to give our clients outstanding customer service and quality services while remaining affordable.</p>
      </div>
    </section>
  )
}

export default About