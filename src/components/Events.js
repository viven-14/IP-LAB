import React, { useState } from 'react';
import EventCard from './EventCard';

const Events = () => {
  const [events, setEvents] = useState([
    { id: 1, name: 'Spruthi', date: '2024-10-05' },
    { id: 2, name: 'Annual Meet', date: '2024-11-15' },
    { id: 3, name: 'Christmas Eve Party', date: '2024-25-10' }
  ]);

  const handleEventClick = (event) => {
    alert(`Event: ${event.name}\nDate: ${event.date}`);
  };

  return (
    <div className="events">
      <h2>Upcoming Events</h2>
      <div className="event-list">
        {events.map(event => (
          <EventCard key={event.id} event={event} onClick={handleEventClick} />
        ))}
      </div>
    </div>
  );
};

export default Events;
