import React from 'react';
import PropTypes from 'prop-types';
import MetaField from './../MetaField';
import Teaser from './../Teaser';
import moment from 'moment';

const EventTeaser = (props) => {
  const { event } = props;

  const termMap = item => ({
    id: item.uuid,
    name: item.name,
  });

  const date = moment(`${event['field_date_time'].value}Z`, moment.ISO_8601);

  const eventTypeValues = event['field_event_type'].map(termMap);
  const eventTypes =
    eventTypeValues.length > 0 ? (
      <MetaField label="Event type" key="eventType" values={eventTypeValues} />
    ) : (
      <div />
    );

  const audienceValues = event['field_event_audience'].map(termMap);
  const audiences =
    audienceValues.length > 0 ? <MetaField label="Audience" key="audience" values={audienceValues} /> : <div />;

  return (
    <Teaser
      modifiers={['has-image']}
      supertitle={event['field_location'].title}
      title={event.title}
      titleUrl={event.path.alias}
      date={{
        month: date.format('MMM'),
        date: date.format('D'),
        time: date.format('h:mm a').replace('m', '.m.'),
      }}
      description={event['field_text_teaser']}
      tags={[eventTypes, audiences]}
    />
  );
};

EventTeaser.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventTeaser;
