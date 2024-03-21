import styles from "./Content.module.css";
import asset from "../assets/5540021.jpg";
function Content() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.text}>
          <h1>St. Apolonia Dental Center</h1>
          <h2>Where excellence in dentistry and art meet.</h2>
          <button className={styles.button}>
            <span>
              <a href="#">Learn More</a>
            </span>
          </button>
        </div>
        <div className={styles.image}>
          <img src={asset} alt="dentist-vector" />
        </div>
      </section>
    </>
  );
}

export default Content;
