import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

const EventCard = ({
  game,
  description,
  date,
  time,
  organizer,
}) => (
  <Card className="text-center">
    <Card.Header>{game.title}</Card.Header>
    <Card.Body>
      <Card.Text>{description}</Card.Text>
      <Card.Text> On {date}</Card.Text>
      <Card.Text> At {time} PM</Card.Text>
      <Card.Footer className="text-muted">Organizer: {organizer.id}</Card.Footer>
    </Card.Body>
  </Card>
);

EventCard.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number,
    game_type: PropTypes.shape({
      label: propTypes.string,
    }),
    title: PropTypes.string,
    maker: PropTypes.string,
    gamer: PropTypes.shape({
      uid: PropTypes.string,
      bio: PropTypes.string,
    }),
    number_of_players: PropTypes.string,
    skill_level: PropTypes.string,
  }).isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  time: PropTypes.instanceOf(Date).isRequired,
  organizer: PropTypes.shape({
    id: PropTypes.number,
    uid: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
};

export default EventCard;
