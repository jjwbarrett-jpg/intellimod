import Link from 'next/link';
import styles from './page.module.css'; // Import our new styles

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Modular Prompt Intelligence
      </h1>
      <p className={styles.subtitle}>
        An advanced system for designing, building, and refining powerful AI prompts with precision and control. Welcome to IntelliMod.
      </p>
      <div className={styles.buttonContainer}>
        <Link href="/steps" className={styles.button}>
          Get Started with the Steps
        </Link>
        <Link href="/about" className={`${styles.button} ${styles.buttonSecondary}`}>
          Learn More
        </Link>
      </div>
    </div>
  );
}