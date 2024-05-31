import styles from './BoxCleaning.module.css'

type BoxCleaningType = {
  img: string;
  title: string;
  description: string;
}

const BoxCleaning = ({
  img,
  title,
  description
}: BoxCleaningType) => {

  return (
    <li className={styles.boxCleaning}>
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  )
}

export default BoxCleaning