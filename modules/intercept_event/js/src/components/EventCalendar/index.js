import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

const dateAccessor = prop => item =>
  moment(`${item.data.attributes.field_date_time[prop]}Z`, moment.ISO_8601).toDate();
const startAccessor = dateAccessor('value');
const endAccessor = dateAccessor('end_value');
const titleAccessor = item => (
  <p className="calendar-event-title--tiny">{item.data.attributes.title}</p>
);

const EventCalendar = props => (
  <BigCalendar
    events={props.events}
    titleAccessor={titleAccessor}
    startAccessor={startAccessor}
    endAccessor={endAccessor}
    defaultDate={new Date()}
    popup
    views={['month', 'week', 'day']}
    elementProps={{
      style: {
        height: 'calc(100vh - 26rem)',
      },
      className: 'what',
    }}
  />
);

EventCalendar.propTypes = {
  events: PropTypes.arrayOf(Object).isRequired,
};

export default EventCalendar;
