import { useState, useEffect } from 'react';
import styles from './Champions.module.css';

type Winner = {
  year: number;
  team: string;
  country: string;
};

const ChampionsPage = () => {
  const [winners, setWinners] = useState<Winner[]>([]);

  useEffect(() => {
    fetch('/api/champions')
      .then(res => res.json())
      .then(data => setWinners(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>UEFA Champions League Winners</h1>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>Year</th>
            <th className={styles.th}>Team</th>
            <th className={styles.th} >Country</th>
          </tr>
        </thead>
        <tbody>
          {winners.map((winner, index) => (
            <tr key={index}>
              <td>{winner.year}</td>
              <td>{winner.team}</td>
              <td>{winner.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChampionsPage;
