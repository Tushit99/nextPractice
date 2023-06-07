import { useEffect, useState } from "react";
import styles from "../styles/home.module.css";

export default function Home() {
  const [data, setData] = useState();

  const fun = async () => {
    await fetch("https://movies-database-gold.vercel.app/movies").then((e) => {
      setData(e);
    });
    console.log(data);
  };

  useEffect(() => {
    fun();
  }, []);

  return (
    <main className={styles.headbox}>
      <h1 className={styles.box1}>This is Nextjs Home Page</h1>
      <div>
        Next.js is an open-source web development framework created by the
        private company Vercel providing React-based web applications with
        server-side rendering and static website generation.
      </div>
    </main>
  );
}
