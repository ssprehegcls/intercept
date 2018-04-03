import React from 'react';
import PropTypes from 'prop-types';
import pull from 'lodash/pull';
import moment from 'moment';
import ResourceChip from '../ResourceChip';
import OptionChip from '../OptionChip';

class CurrentFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteMultiple = this.handleDeleteMultiple.bind(this)(props.filter.key);
    this.handleDeleteSingle = this.handleDeleteSingle
      .bind(this)(props.filter.key);
    this.handleDeleteDate = this.handleDeleteDate
      .bind(this)(props.filter.key);
  }

  shouldComponentUpdate(nextProps) {
    if (!nextProps.filter.value || !this.props.filter.value) {
      return nextProps.filter.value !== !this.props.filter.value;
    }

    return nextProps.filter.value.length !== this.props.filter.value.length;
  }

  handleDeleteMultiple = key => (data) => {
    const chipData = [...this.props.filter.value];
    pull(chipData, data);
    this.props.onChange(key, chipData);
  };

  handleDeleteSingle = key => () => {
    this.props.onChange(key, '');
  };

  handleDeleteDate = key => () => {
    this.props.onChange(key, null);
  };

  render() {
    const { filter } = this.props;

    // Skip if Empty.
    if (!filter.value || filter.value.length <= 0) {
      return null;
    }

    const multiChip = filters =>
      filters.value.map(id => (
        <ResourceChip
          identifier={{ id, type: filters.type }}
          key={id}
          onDelete={this.handleDeleteMultiple}
        />
      ));

    const dateChip = filters => (
      <OptionChip
        key={filters.id}
        label={moment(filters.value).format('MMMM D, YYYY')}
        onDelete={this.handleDeleteDate}
      />
    );

    const singleChip = filters => (
      <OptionChip key={filters.id} label={filters.value} onDelete={this.handleDeleteSingle} />
    );

    const getChips = (filters) => {
      if (Array.isArray(filters.value)) {
        return multiChip(filters);
      }

      if (filters.value instanceof Date) {
        return dateChip(filters);
      }

      return singleChip(filters);
    };

    return (
      <div className="current-filter">
        <span className="current-filter__label">{filter.label}:</span>
        {getChips(filter)}
      </div>
    );
  }
}

CurrentFilter.propTypes = {
  filter: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CurrentFilter;
