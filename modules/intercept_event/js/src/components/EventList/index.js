import React, { Component } from 'react';
import { withData } from 'react-orbitjs';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ButtonRegister from 'intercept/ButtonRegister';

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});

class EventList extends Component {
  state = {};

  componentDidMount() {
    interceptClient.store.query(q => q.findRecords('node--event'));
  }

  render() {
    const events = this.props.events
      ? this.props.events.map(event => <p key={event.id}>{event.attributes.title}</p>)
      : <p>No events have been loaded.</p>;

    return (
      <div className="eventsList">
        <ButtonRegister/>
        {events}
      </div>
    );
  }
}

const mapRecordsToProps = (ownProps) => {
  return {
    events: q => q.findRecords("node--event").sort('title')
  }
}

EventList.propTypes = {
  events: PropTypes.array.isRequired,
};

export default EventList = withData(mapRecordsToProps)(withStyles(styles)(EventList));
