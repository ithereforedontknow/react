import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} St. Apolonia Dental Center</p>
      </div>
    </footer>
  );
}
export default Footer;
