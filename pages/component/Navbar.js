import styles from '../../styles/Navbar.module.css';
import Link from 'next/link';

const Navbar = () => (
    <nav className={styles.navbar}>
        <Link href="/" passHref>
             <p className={styles.linkText}>Home</p>
        </Link>
        <Link href="/about" passHref>
             <p className={styles.linkText}>About</p>
        </Link>
        <Link href="/contact" passHref>
             <p className={styles.linkText}>Contact</p>
        </Link>
    </nav>
);

export default Navbar;