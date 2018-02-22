import React from 'react';
import PropTypes from 'prop-types';
import MetaField from './../MetaField';

const EventTeaser = (props) => {
  const { event } = props;

  const termMap = item => ({
    id: item.uuid,
    name: item.name,
  });

  const eventTypeValues = event['field_event_type'].map(termMap);
  const eventTypes =
    eventTypeValues.length > 0
      ? (<MetaField label="Event type" values={eventTypeValues} />)
      : (<div />);

  const audienceValues = event['field_event_audience'].map(termMap);
  const audiences =
    audienceValues.length > 0
      ? (<MetaField label="Audience" values={audienceValues} />)
      : (<div />);

  return (
    <article>
      <div className="teaser__aside">
        <div className="teaser__image">Image</div>
        <div className="teaser__date">{event['field_date_time'].value}</div>
      </div>
      <div className="teaser__main">
        <header className="teaser__header">
          <p className="teaser__location">{event['field_location'].title}</p>
          <h3 className="teaser__title">
            <a href={event.path.alias} className="teaser__title-link">
              {event.title}
            </a>
          </h3>
        </header>
        <p>{event['field_text_teaser']}</p>
        <footer className="teaser__footer">
          {eventTypes}
          {audiences}
        </footer>
        <div className="teaser__actions">
          <span>Register</span>
          <span>Favorite</span>
        </div>
      </div>
    </article>
  );
};

EventTeaser.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventTeaser;
