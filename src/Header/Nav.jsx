import styles from "./Nav.module.css";

function Nav() {
  return (
    <header className={styles.header}>
      <nav className={styles.topnav}>
        <ul>
          <li>
            <a href="">Logo</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
