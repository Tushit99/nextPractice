import style from "../styles/home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className={style.headbox}
    >
      <div className={style.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
      <div>
        <h1 className={style.box1}>This is Nextjs Home Page</h1>
      </div>
    </main>
  );
}
