import React from 'react';
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
  const [modal, setModal] = React.useState(false)
  
  function showModal() {
    setModal((modal) => !modal)
  }

  function clickOutsideModal(e: React.MouseEvent) {
    if (e.target === e.currentTarget) {
      setModal(false)
    }
  }

  if (modal) return (
    <div onClick={clickOutsideModal} className={styles.containerModal}>
      <li className={`${styles.boxCleaning} ${modal ? styles.showModal : ''}`}>
        <img src={img} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={showModal}>{'X'}</button>
      </li>
    </div>
  )
  return (
    <li className={`${styles.boxCleaning} ${modal ? styles.showModal : ''}`}>
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={showModal}>{'>'}</button>
    </li>
  )
}

export default BoxCleaning