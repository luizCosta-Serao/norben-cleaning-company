import styles from './ImpressiveClean.module.css'
import ImpressiveImg from '../../assets/impressive-clean.png'
import { Link } from 'react-router-dom'

const ImpressiveClean = () => {
  return (
    <section className={styles.impressive}>
      <div className={styles.impressiveContent}>
        <h2>Impressive & Clean Businesses with CC Commercial Cleaning</h2>
        <p>Your office should reflect the professionalism and esteem of your company. CCC can deliver the impressive results your customers, clients, and employees expect when they walk into your business. Based in Birmingham, Alabama, we set the bar when it comes to commercial janitorial services that are ideal for office buildings, warehouses, plants, and factories. Simply put: nothing is left out, and no dirt is kept in!</p>
        <div className={styles.callUs}>
          <h3>Call us today at:</h3>
          <Link target='_blank' to="https://w.app/D9moOk">(205) 484-9624</Link>
        </div>
      </div>
      <div className={styles.impressiveImg}>
        <img src={ImpressiveImg} alt="" />
      </div>
    </section>
  )
}

export default ImpressiveClean