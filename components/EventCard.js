import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';

const EventCard = ({
  description,
  date,
  time,
}) => (
  <Card className="text-center">
    <Card.Header>{description}</Card.Header>
    <Card.Body>
      <Card.Text>{date}</Card.Text>
      <Card.Text>{time}</Card.Text>
    </Card.Body>
  </Card>
);

EventCard.propTypes = {
  description: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  time: PropTypes.instanceOf(Date).isRequired,
};

export default EventCard;
