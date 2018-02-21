import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SelectEventType from 'intercept/SelectEventType';
import { connect } from 'react-redux';
import map from 'lodash/map';
import interceptClient from 'interceptClient';
import EventFilters from './../EventFilters';
import EventList from './../EventList';

const { select, api } = interceptClient;

const styles = theme => ({});

function generateFilters(values) {
  const filter = {
    published: {
      path: 'status',
      value: '1',
    },
  };

  if (!values) {
    return filter;
  }

  const types = [
    { id: 'type', path: 'field_event_type.uuid', conjunction: 'OR' },
    { id: 'location', path: 'field_location.uuid', conjunction: 'OR' },
  ];

  types.forEach((type) => {
    if (values[type.id] && values[type.id].length > 0) {
      const group = `${type.id}-group`;
      filter[group] = {
        type: 'group',
        conjunction: type.conjunction,
      };

      values[type.id].forEach((element, key) => {
        const id = `${type.id}-${key}`;
        filter[id] = {
          path: type.path,
          value: element,
          memberOf: group,
        };
      });
    }
  });

  return filter;
}

class BrowseEventsApp extends Component {
  state = {
    view: 'list',
  };

  componentDidMount() {
    this.props.fetchEvents({ filters: generateFilters() });
  }

  render() {
    const { events, fetchEvents, purge } = this.props;

    function onFilterChange(values) {
      purge();
      fetchEvents({
        filters: generateFilters(values),
      });
    }

    return (
      <div>
        <EventFilters onChange={onFilterChange} />
        <EventList events={events} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  events: select.events(state),
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: (options) => {
    dispatch(api['node--event'].fetchAll(options));
  },
  purge: () => {
    dispatch(api['node--event'].purge());
  },
});

BrowseEventsApp.propTypes = {
  events: PropTypes.object.isRequired,
  fetchEvents: PropTypes.func.isRequired,
  purge: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles, { withTheme: true })(BrowseEventsApp),
);
