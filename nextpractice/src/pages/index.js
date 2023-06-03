import styles from "../styles/home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.headbox}>
      <div className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div>
        <h1 className={styles.box1}>This is Nextjs Home Page</h1>
      </div>
    </main>
  );
}
