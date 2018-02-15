import React, { Component } from 'react';
import { withData } from 'react-orbitjs';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

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

class LocationsList extends Component {
  state = {};

  componentDidMount() {
    interceptClient.store.query(q => q.findRecords('node--location'));
  }

  render() {
    const locations = this.props.locations
      ? this.props.locations.map(location => <p key={location.id}>{location.attributes.title}</p>)
      : <p>No locations have been loaded.</p>;

    return (
      <div className="locationsList">
        {locations}
      </div>
    );
  }
}

const mapRecordsToProps = (ownProps) => {
  return {
    locations: q => q.findRecords("node--location").sort('title')
  }
}

LocationsList.propTypes = {
  locations: PropTypes.array.isRequired,
};

export default LocationsList = withData(mapRecordsToProps)(withStyles(styles)(LocationsList));
