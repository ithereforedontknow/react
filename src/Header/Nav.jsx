import styles from "./Nav.module.css";

function Nav() {
  return (
    <header className={styles.header}>
      <nav className={styles.topnav}>
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">FAQ</a>
        <a href="#">About</a>
      </nav>
    </header>
  );
}

export default Nav;
