import BoxCleaning from './BoxCleaning'
import styles from './CCCleaning.module.css'
import WindowCleaning from '../../assets/window-cleaning.png'
import Vacuuming from '../../assets/vacuuming.png'
import BathroomCleaning from '../../assets/bathroom-cleaning.png'
import CarpetCleaning from '../../assets/carpet-cleaning.png'

const CCCleaning = () => {
  return (
    <section id='cleaningServices' className={styles.ccCleaning}>
      <h1 className={styles.ccTitle}>CC Cleaning Services</h1>
      <p className={styles.ccDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet feugiat interdum nunc.</p>
      <ul className={styles.ccList}>
        <BoxCleaning img={WindowCleaning} title='Window Cleaning' description="No matter which residential cleaning services fit your budget and cleaning needs, you have much to gain and nothing to lose. That's be..."/>
        <BoxCleaning img={Vacuuming} title='Vacuuming' description="No matter which residential cleaning services fit your budget and cleaning needs, you have much to gain and nothing to lose. That's be..."/>
        <BoxCleaning img={BathroomCleaning} title='Bathroom Cleaning' description="No matter which residential cleaning services fit your budget and cleaning needs, you have much to gain and nothing to lose. That's be..."/>
        <BoxCleaning img={CarpetCleaning} title='Carpet Cleaning' description="No matter which residential cleaning services fit your budget and cleaning needs, you have much to gain and nothing to lose. That's be..."/>
      </ul>
    </section>
  )
}

export default CCCleaning