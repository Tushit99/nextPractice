import Link from "next/link";
import style from "../styles/home.module.css";

const blog = () => {
  return (
    <div className={style.blog_top}>
      <h1>Blog</h1>
      <p>The latest news about Next.js from the Vercel team. </p>
      <div className={style.slug_link}>
        <Link href={"./blogpost/learn-Javascript"}>Learn-Javascript</Link>
      </div>
    </div>
  );
};

export default blog;
