import { NextApiHandler } from 'next';

type Winner = {
  year: number;
  team: string;
  country: string;
};

const champions: Winner[] = [
  { year: 2021, team: 'Chelsea', country: 'England' },
  { year: 2020, team: 'Bayern Munich', country: 'Germany' },
  { year: 2019, team: 'Liverpool', country: 'England' },
  { year: 2018, team: 'Real Madrid', country: 'Spain' },
  { year: 2017, team: 'Real Madrid', country: 'Spain' },
  { year: 2016, team: 'Real Madrid', country: 'Spain' },
  { year: 2015, team: 'Barcelona', country: 'Spain' },
  { year: 2014, team: 'Real Madrid', country: 'Spain' },
  { year: 2013, team: 'Bayern Munich', country: 'Germany' },
  { year: 2012, team: 'Chelsea', country: 'England' },
];

const championsHandler: NextApiHandler = (req, res) => {
  res.status(200).json(champions);
};

export default championsHandler;
