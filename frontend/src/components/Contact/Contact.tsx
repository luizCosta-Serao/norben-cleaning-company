import styles from './Contact.module.css'
import Clock from '../../assets/clock-contact.png'
import Phone from '../../assets/phone-contact.png'
import Localization from '../../assets/localization-contact.png'
import React, { FormEvent } from 'react'
import { url } from '../../backend'

type ErrorType = {
  error: string
}

const Contact = () => {
  const [error, setError] = React.useState<string | boolean>(false)
  const [success, setSuccess] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [message, setMessage] = React.useState('')
  
  async function postContact(e: FormEvent) {
    e.preventDefault();
    try {
      setError(false);
      setLoading(true);
      const response = await fetch(`${url}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          message
        })
      })
      if (!response.ok) {
        const json = await response.json() as ErrorType
        throw new Error(json.error)
      }
      response.ok && setSuccess(true)
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={styles.contact}>
      <div className={styles.contactInfo}>
        <h2>Contact</h2>
        <p>Thank you for your interest. We look forward to hearing from you soon.</p>
        <ul className={styles.listInfos}>
          <li className={styles.boxInfo}>
            <div className={styles.infoImg}>
              <img src={Clock} alt="" />
            </div>
            <div className={styles.infoContent}>
              <h3>Hours Of Operation</h3>
              <p>Mon-Fri: 9AM - 5PM</p>
            </div>
          </li>
          <li className={styles.boxInfo}>
            <div className={styles.infoImg}>
              <img src={Phone} alt="" />
            </div>
            <div className={styles.infoContent}>
              <h3>24/7 Emergency Service</h3>
              <p>(205) 484-9624</p>
            </div>
          </li>
          <li className={styles.boxInfo}>
            <div className={styles.infoImg}>
              <img src={Localization} alt="" />
            </div>
            <div className={styles.infoContent}>
              <h3>Service Area</h3>
              <p>Birmingham, AL</p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.contactForm}>
        <form onSubmit={postContact} action="">
          <div className={styles.formName}>
            <input type="text" name='firstName' placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <input type="text" name='lastName' placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className={styles.emailPhone}>
            <input type="email" name='email' placeholder='Email address' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" name='phone' placeholder='Phone no' value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <textarea className={styles.message} name="message" id="message" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} />
          <button className={loading ? styles.sending : styles.send} name='send' type='submit'>{loading ? 'Sending...' : 'Send Message'}</button>
        </form>
        {success && <p className={styles.success}>Message sent successfully</p>}
        {error && <p className={styles.fail}>{error}</p>}
      </div>
    </section>
  )
}

export default Contact