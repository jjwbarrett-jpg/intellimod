import Link from 'next/link';
import styles from './Header.module.css'; // We'll create this CSS file next

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          IntelliMod
        </Link>
        <nav className={styles.nav}>
  <Link href="/">Home</Link>
  <Link href="/about">About</Link>
  <Link href="/steps">MPI Steps</Link>
  <Link href="/planner">Planner Tool</Link>
  <Link href="/auditor">Auditor</Link>
  <Link href="/cards">Card Library</Link> 
</nav>
      </div>
    </header>
  );
}
