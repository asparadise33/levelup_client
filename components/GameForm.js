import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { createGame, getGameTypes } from '../utils/data/gameData';

const initialState = {
  skillLevel: 1,
  numberOfPlayers: 0,
  title: '',
  maker: '',
  gameType: 1,
};

const GameForm = ({ user }) => {
  const [gameTypes, setGameTypes] = useState([]);
  /*
  Since the input fields are bound to the values of
  the properties of this state variable, you need to
  provide some default values.
  */
  const [currentGame, setCurrentGame] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
  // TODO: Get the game types, then set the state
    getGameTypes().then(setGameTypes);
  }, []);

  const handleChange = (e) => {
    // TODO: Complete the onChange function
    const { name, value } = e.target;
    setCurrentGame((prevCurrentGame) => ({
      ...prevCurrentGame,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Prevent form from being submitted
    e.preventDefault();
    {
      const game = {
        maker: currentGame.maker,
        title: currentGame.title,
        numberOfPlayers: Number(currentGame.numberOfPlayers),
        skillLevel: Number(currentGame.skillLevel),
        gameType: Number(currentGame.gameType),
        userId: user.uid,
      };

      // Send POST request to your API
      createGame(game).then(() => router.push('/games'));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" required value={currentGame.title} onChange={handleChange} />
        </Form.Group>
        {/* TODO: create the rest of the input fields */}
        <Form.Group className="mb-3">
          <Form.Label>Maker</Form.Label>
          <Form.Control name="maker" required value={currentGame.maker} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Number of players</Form.Label>
          <Form.Control name="numberOfPlayers" required value={currentGame.numberOfPlayers} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Skill Level</Form.Label>
          <Form.Control name="skillLevel" required value={currentGame.skillLevel} onChange={handleChange} />
        </Form.Group>
        <Form.Select className="mb-3">
          <Form.Label>Game Type</Form.Label>
          <Form.Control name="gameType" value={currentGame.gameType} onChange={handleChange} />
          <option value="0">Select a Game Type</option>
          {
           gameTypes.map((type) => (
             // eslint-disable-next-line react/jsx-key
             <option key={type.id} value={type.id}>{type.label}
             </option>
           ))
            }
        </Form.Select>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

GameForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
  game: PropTypes.shape({
    id: PropTypes.number,
    maker: PropTypes.string,
    title: PropTypes.string,
    numberOfPlayers: PropTypes.number,
    skillLevel: PropTypes.number,
    gameType: PropTypes.number,
  }).isRequired,
};

export default GameForm;
