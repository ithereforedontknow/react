import styles from "./Content.module.css";
function Content() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.text}>
          <h1>St. Apolonia </h1>
          <h2>Dental Center</h2>
          <h3>Where excellence in dentistry and art meet.</h3>
          <button className={styles.button}>
            <span>
              <a href="#">Learn More</a>
            </span>
          </button>
        </div>
      </section>
    </>
  );
}

export default Content;
