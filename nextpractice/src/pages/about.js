import style from "../styles/home.module.css";
import Link from "next/link"; 

const about = () => {
  return (
    <div>
      <div className={style.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
      <div>This is about Page</div>
    </div>
  );
};

export default about;
