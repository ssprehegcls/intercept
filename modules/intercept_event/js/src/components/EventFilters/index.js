import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import map from 'lodash/map';
import { withStyles } from 'material-ui/styles';
import interceptClient from 'interceptClient';
// Components
import SelectEventType from 'intercept/SelectEventType';
import SelectLocation from 'intercept/SelectLocation';

const { select, api } = interceptClient;

const styles = theme => ({

});

class EventFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        type: [],
        location: [],
        startDate: [],
        endDate: [],
      },
    };

    this.onFilterChange = this.onFilterChange.bind(this);
    this.onEventTypeChange = this.onFilterChange('type').bind(this);
    this.onLocationChange = this.onFilterChange('location').bind(this);
  }

  onFilterChange(key) {
    return (event) => {
      const newFilters = { ...this.state.filters, [key]: event.target.value };
      this.setState({ filters: newFilters });
      this.props.onChange(newFilters);
    };
  }

  render() {
    return (
      <div>
        <div>Filters</div>
        <SelectEventType handleChange={this.onEventTypeChange} />
        <SelectLocation handleChange={this.onLocationChange} />
      </div>
    );
  }
}

EventFilters.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(EventFilters);
