import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={styles.header_container}>
        <div>
          <Link href='/'>UNPLUGGED</Link>
        </div>
        <nav className={styles.header_navigation}>
          <Link href='#'>BAR</Link>
          <Link href='#'>RESTO</Link>
          <Link href='#'>MENU</Link>
          <div className={styles.header_aButton}>
            <Link href='#'>LOGIN</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
