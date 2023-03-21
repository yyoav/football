import { NextApiHandler } from 'next';


const goldenBallWinners = [
    {
      name: 'Lionel Messi',
      age: 34,
      birthdate: 'June 24, 1987',
      wins: 7,
    },
    {
      name: 'Cristiano Ronaldo',
      age: 37,
      birthdate: 'February 5, 1985',
      wins: 5,
    },
    {
      name: 'Michel Platini',
      age: 66,
      birthdate: 'June 21, 1955',
      wins: 3,
    },
    {
      name: 'Johan Cruyff',
      age: 68,
      birthdate: 'April 25, 1947',
      wins: 3,
    },
    {
      name: 'Marco van Basten',
      age: 57,
      birthdate: 'October 31, 1964',
      wins: 3,
    },
  ];


  const goldenBallWinnersHandler: NextApiHandler = (req, res) => {
    res.status(200).json(goldenBallWinners);
  };

  export default goldenBallWinnersHandler;
