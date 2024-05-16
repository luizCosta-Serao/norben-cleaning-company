import styles from './QuoteEasy.module.css'

const QuoteEasy = () => {
  return (
    <section className={styles.quoteEasy}>
      <h1 className={styles.quoteTitle}>Get a Quote is easy</h1>
      <div className={styles.quoteSteps}>
        <div className={styles.boxQuoteSteps}>
          <span>01</span>
          <p>Submit a few details</p>
        </div>
        <div className={styles.boxQuoteSteps}>
          <span>02</span>
          <p>We will schedule a walk-through.</p>
        </div>
        <div className={styles.boxQuoteSteps}>
          <span>03</span>
          <p>Get a quote!</p>
        </div>
      </div>
    </section>
  )
}

export default QuoteEasy