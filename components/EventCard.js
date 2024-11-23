import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';

const EventCard = ({
  game, //
  description,
  date,
  time,
  organizer,
}) => (
  <Card className="text-center">
    <Card.Header>{game}</Card.Header>
    <Card.Body>
      <Card.Title>{description}</Card.Title>
      <Card.Text>{date}</Card.Text>
      <Card.Text>{time}</Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted">Organizer: {organizer}</Card.Footer>
  </Card>
);

EventCard.propTypes = {
  game: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  time: PropTypes.instanceOf(Date).isRequired,
  organizer: PropTypes.string.isRequired,
};

export default EventCard;
