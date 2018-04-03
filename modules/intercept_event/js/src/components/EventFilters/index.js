import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import interceptClient from 'interceptClient';

// Components
import CurrentFilters from 'intercept/CurrentFilters';
import DateFilter from 'intercept/DateFilter';
import KeywordFilter from 'intercept/KeywordFilter';
import SelectResource from 'intercept/SelectResource';

const { constants, select, api } = interceptClient;
const c = constants;
const DATE = 'date';
const KEYWORD = 'keyword';

const labels = {
  [c.TYPE_EVENT_TYPE]: 'Event Type',
  [c.TYPE_LOCATION]: 'Location',
  [c.TYPE_AUDIENCE]: 'Audience',
  [c.TYPE_TAG]: 'Tag',
  [DATE]: 'Date',
  [KEYWORD]: 'Keyword',
};

const currentFiltersConfig = filters =>
  map(filters, (value, key) => ({
    key,
    value,
    label: labels[key],
    type: key,
  }));

class EventFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        [KEYWORD]: '',
        [c.TYPE_LOCATION]: [],
        [c.TYPE_EVENT_TYPE]: [],
        [c.TYPE_AUDIENCE]: [],
        [c.TYPE_TAG]: [],
        [DATE]: null,
      },
    };

    this.onFiltersChange = this.onFiltersChange.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onFiltersChange(filters) {
    this.setState({ filters });
  }

  onFilterChange(key, value) {
    const newFilters = { ...this.state.filters, [key]: value };
    this.onFiltersChange(newFilters);
    this.props.onChange(newFilters);
  }

  onInputChange(key) {
    return (event) => {
      this.onFilterChange(key, event.target.value);
    };
  }

  onDateChange(value) {
    this.onFilterChange(DATE, value);
  }

  render() {
    const { showDate } = this.props;
    const { filters } = this.state;

    return (
      <div className="filters">
        <h3 className="visually-hidden filters__heading">Filters</h3>
        <div className="filters__inputs">
          <KeywordFilter
            handleChange={this.onInputChange(KEYWORD)}
            value={filters[KEYWORD]}
            label={labels[KEYWORD]}
          />
          <SelectResource
            type={c.TYPE_LOCATION}
            handleChange={this.onInputChange(c.TYPE_LOCATION)}
            value={filters[c.TYPE_LOCATION]}
            label={labels[c.TYPE_LOCATION]}
          />
          <SelectResource
            type={c.TYPE_EVENT_TYPE}
            handleChange={this.onInputChange(c.TYPE_EVENT_TYPE)}
            value={filters[c.TYPE_EVENT_TYPE]}
            label={labels[c.TYPE_EVENT_TYPE]}
          />
          <SelectResource
            type={c.TYPE_AUDIENCE}
            handleChange={this.onInputChange(c.TYPE_AUDIENCE)}
            value={filters[c.TYPE_AUDIENCE]}
            label={labels[c.TYPE_AUDIENCE]}
          />
          <SelectResource
            type={c.TYPE_TAG}
            handleChange={this.onInputChange(c.TYPE_TAG)}
            value={filters[c.TYPE_TAG]}
            label={labels[c.TYPE_TAG]}
          />
          {showDate && (
            <DateFilter handleChange={this.onDateChange} defaultValue={null} value={filters.date} />
          )}
        </div>
        <div className="filters__current">
          <CurrentFilters filters={currentFiltersConfig(filters)} onChange={this.onFilterChange} />
        </div>
      </div>
    );
  }
}

EventFilters.propTypes = {
  onChange: PropTypes.func.isRequired,
  showDate: PropTypes.bool,
};

EventFilters.defaultProps = {
  showDate: true,
};

export default EventFilters;
