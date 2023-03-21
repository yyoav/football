import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Players.module.css';

type GoldenBallWinner = {
  name: string;
  age: number;
  birthdate: string;
  wins: number;
};

export default function Players() {
  const [goldenBallWinners, setGoldenBallWinners] = useState<GoldenBallWinner[]>([]);

  useEffect(() => {
    fetch('/api/goldenBallWinners')
      .then((res) => res.json())
      .then((data) => setGoldenBallWinners(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.playersContainer}>
      <h1 className={styles.playersTitle}>Golden Ball Winners</h1>
      {goldenBallWinners.map((player, index) => (
        <div key={index} className={styles.playerCard}>
          <div className={styles.playerInfo}>
            <div className={styles.playerName}>{player.name}</div>
            <div className={styles.playerDetails}>
              Age: <span className={styles.playerDetailValue}>{player.age}</span>
            </div>
            <div className={styles.playerDetails}>
              Birthdate: <span className={styles.playerDetailValue}>{player.birthdate}</span>
            </div>
            <div className={styles.playerDetails}>
              Wins: <span className={styles.playerDetailValue}>{player.wins}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
