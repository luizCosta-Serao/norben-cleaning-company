import styles from './CleaningServices.module.css'
import CommercialServices from '../../assets/commercial-services.png'
import JanitorialServices from '../../assets/janitorial-services.png'
import FloorCleaning from '../../assets/floor-cleaning.png'
import DisinfectionServices from '../../assets/disinfection-services.png'

const CleaningServices = () => {

  return (
    <section className={styles.cleaningServices}>
      <ul className={styles.listServices}>
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
    </section>
  )
}

export default CleaningServices