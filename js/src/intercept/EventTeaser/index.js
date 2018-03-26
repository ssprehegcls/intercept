import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import interceptClient from 'interceptClient';
import FieldInline from './../FieldInline';
import Teaser from './../Teaser';

const { select } = interceptClient;
class EventTeaser extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.event;
  }

  render() {
    const { id, event, image } = this.props;

    const termMap = item => ({
      id: item.attributes.uuid,
      name: item.attributes.name,
    });

    const date = moment(`${event.attributes['field_date_time'].value}Z`, moment.ISO_8601);

    const eventTypeValues = event.relationships['field_event_type'].map(termMap);
    const eventTypes =
      eventTypeValues.length > 0 ? (
        <FieldInline label="Event type" key="eventType" values={eventTypeValues} />
      ) : (
        <div />
      );

    const audienceValues = event.relationships['field_event_audience'].map(termMap);
    const audiences =
      audienceValues.length > 0 ? (
        <FieldInline label="Audience" key="audience" values={audienceValues} />
      ) : (
        <div />
      );

    return (
      <Teaser
        key={id}
        modifiers={['has-image']}
        image={image}
        supertitle={event.relationships['field_location'].attributes.title}
        title={event.attributes.title}
        titleUrl={event.attributes.path ? event.attributes.path.alias : `/node/${event.attributes.nid}`}
        date={{
          month: date.format('MMM'),
          date: date.format('D'),
          time: date.format('h:mm a').replace('m', '.m.'),
        }}
        description={event.attributes['field_text_teaser']}
        tags={[eventTypes, audiences]}
      />
    );
  }
}

EventTeaser.propTypes = {
  id: PropTypes.string.isRequired,
  event: PropTypes.object.isRequired,
  image: PropTypes.string,
};

EventTeaser.defaultProps = {
  image: null,
};

const mapStateToProps = (state, ownProps) => ({
  event: select.bundle(select.getIdentifier('node--event', ownProps.id))(state),
  image: select.eventImageStyle(ownProps.id, '4to3_740x556')(state),
});

export default connect(mapStateToProps)(EventTeaser);
