import React from 'react';

const EventCard = ({ event, onClick }) => {
  return (
    <div className="event-card" onClick={() => onClick(event)}>
      <h3>{event.name}</h3>
      <p>Date: {event.date}</p>
    </div>
  );
};

export default EventCard;
