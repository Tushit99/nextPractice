import Image from "next/image";
import Link from "next/link";
import styles from "../src/styles/home.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav_head}>
      <div className={styles.logo}>
        <Image
          src="/logo.png"
          alt="myimg"
          height={80}
          width={80}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className={styles.navlink}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
