import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Pancake</h1>

        <h6 className={styles.subtitle}>Een Fantasy Volleyball Manager</h6>
        <p className={styles.desc}>
          Beheer je eigen volleybalteam in dit fantasy spel, waar je strijdt met
          echte spelers en live statistieken uit de Belgische
          volleybalcompetitie om de top te bereiken.
        </p>
        <div className={styles.buttons}>
          <Link href="/about">
            <button className={styles.button}>Lees Meer</button>
          </Link>

          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
