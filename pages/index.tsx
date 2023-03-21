import Head from "next/head";
import Link from "next/link";
import styles from "./Home.module.css";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Football App</title>
      </Head>
      <div className={styles.container}>
        <img
          src="/football.jpg"
          alt="Picture of a football"
          className={styles.image}
        />
        <h1 className={styles.title}>Welcome to the Football App</h1>
        <p className={styles.description}>
          We provide information on the latest football news, champions league
          winners, and famous players.
        </p>
        <nav>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/champions">Champions League Winners
              </Link>
            </li>
            <li>
              <Link href="/players">Famous Players
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HomePage;
