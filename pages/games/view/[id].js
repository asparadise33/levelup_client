import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { getSingleGame } from '../../../utils/data/gameData';

export default function ViewGame() {
  const [gameDetails, setGameDetails] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleGame(id).then(setGameDetails);
  }, [id]);

  // const deleteThisJob = () => {
  //  if (window.confirm(`Delete ${jobDetails.job_name}?`)) {
  //  deleteJob(jobDetails.firebaseKey).then(() => router.push('/'));
  // }
  // };

  return (
    <Card style={{ width: '18rem', margin: '10px' }} className="text-black ms-5 details">
      <Card.Title>Game: {gameDetails.title}</Card.Title>
      <Card.Body>
        <p className="card-text bold">Maker: {gameDetails.maker}</p>
        <p className="card-text bold">Number of Players: {gameDetails.numberOfPlayers}</p>
        <p className="card-text bold">Skill Level: {gameDetails.skillLevel}</p>
        <Button variant="dark" className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}
