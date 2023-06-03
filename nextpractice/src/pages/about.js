import style from "../styles/home.module.css";
import Link from "next/link"; 

const about = () => {
  return (
    <div className={style.headbox}>
      <div className={style.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
      <h1 className={style.box1}>This is about Page</h1>
    </div>
  );
};

export default about;
