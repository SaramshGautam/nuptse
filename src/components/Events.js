import React from 'react';
import './Events.css';

const events = [
  {
    day: '21',
    month: 'Jun',
    name: 'Solstice Session',
    detail: 'Live folk music · Open garden · From 4pm',
    tag: 'Live Music',
  },
  {
    day: '05',
    month: 'Jul',
    name: 'New Batch Launch — Monsoon Wit',
    detail: 'First pour of our summer seasonal · Free tasting 6–8pm',
    tag: 'Tap Launch',
  },
  {
    day: '19',
    month: 'Jul',
    name: 'Brewing Open Day',
    detail: 'Tour the brewhouse · Meet the brewer · Guided tasting',
    tag: 'Tour',
  },
  {
    day: '02',
    month: 'Aug',
    name: 'Kathmandu Beer & Food Pairing',
    detail: 'Local chefs · 5 courses · 5 beers · Limited seats',
    tag: 'Dining',
  },
];

export default function Events() {
  return (
    <section className="events" id="events">
      <div className="events__inner">
        <p className="section-label">What's On</p>
        <h2 className="section-title">Events at the garden</h2>
        <div className="divider-line" />

        <div className="events__list">
          {events.map((e) => (
            <div className="event-row" key={e.name}>
              <div className="event-row__date">
                <div className="event-row__day">{e.day}</div>
                <div className="event-row__month">{e.month}</div>
              </div>
              <div className="event-row__info">
                <div className="event-row__name">{e.name}</div>
                <div className="event-row__detail">{e.detail}</div>
              </div>
              <div className="event-row__tag">{e.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
