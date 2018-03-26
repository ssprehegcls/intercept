import React, { Component } from 'react';
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import interceptClient from 'interceptClient';
import ViewSwitcher from 'intercept/ViewSwitcher';
import EventFilters from './../EventFilters';
import EventList from './../EventList';
import EventCalendar from './../EventCalendar';

const { api, select, history } = interceptClient;
const eventIncludes = [
  'field_image_primary',
  'field_image_primary.field_media_image',
  'field_room',
];

const urlPropsQueryConfig = {
  view: { type: UrlQueryParamTypes.string },
  calView: { type: UrlQueryParamTypes.string },
  date: { type: UrlQueryParamTypes.date },
};

function getDateSpan(value, view = 'day') {
  const start = moment(value).startOf(view);
  const end = moment(value).endOf(view);

  // The calendar view may include date from the previous or next month
  // so we make sure to include the beginning of the first week and
  // end of the last week.
  if (view === 'month') {
    start.startOf('week');
    end.endOf('week');
  }
  return [start.toISOString(), end.toISOString()];
}

function getPublishedFilters(value = true) {
  return {
    published: {
      path: 'status',
      value: value ? '1' : '0',
    },
  };
}

function getDateFilters(values, view = 'list', calView = 'day', date = new Date()) {
  const path = 'field_date_time.value';
  let operator = '>';
  let value = moment(new Date())
    .subtract(1, 'day')
    .endOf('day')
    .toISOString();

  // Handler Calendar view.
  // The date should be determined by the date and calendar view type
  // rather than the selected date value.
  if (view === 'calendar') {
    value = getDateSpan(date, calView);
    operator = 'BETWEEN';
  }
  else if (values.date) {
    value = getDateSpan(values.date, 'day');
    operator = 'BETWEEN';
  }

  return {
    data: {
      path,
      value,
      operator,
    },
  };
}

function getFilters(values, view = 'list', calView = 'day', date = new Date()) {
  const filter = {
    ...getPublishedFilters(true),
    ...getDateFilters(values, view, calView, date),
  };

  if (!values) {
    return filter;
  }

  const types = [
    { id: 'type', path: 'field_event_type.uuid', conjunction: 'OR' },
    { id: 'location', path: 'field_location.uuid', conjunction: 'OR' },
    { id: 'audience', path: 'field_event_audience.uuid', conjunction: 'OR' },
    { id: 'tag', path: 'field_event_tags.uuid', conjunction: 'AND' },
  ];

  types.forEach((type) => {
    if (values[type.id] && values[type.id].length > 0) {
      if (type.conjunction === 'AND') {
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
      else {
        filter[type.id] = {
          path: type.path,
          value: values[type.id],
          operator: 'IN',
        };
      }
    }
  });

  return filter;
}

class BrowseEventsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calView: props.calView,
      date: props.date,
      filters: {},
      view: props.view,
    };
    this.handleCalendarNavigate = this.handleCalendarNavigate.bind(this);
    this.handleCalendarView = this.handleCalendarView.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleViewChange = this.handleViewChange.bind(this);
    this.doFetchEvents = this.doFetchEvents.bind(this);
  }

  componentDidMount() {
    // force an update if the URL changes
    history.listen(() => {
      this.forceUpdate();
    });

    this.doFetchEvents(this.state.filters, this.state.view, this.state.calView, this.state.date);
  }

  handleViewChange = (event, value) => {
    this.setState({ view: value });
    this.props.onChangeView(value);
    this.doFetchEvents(this.state.filters, value, this.state.calView, this.state.date);
  };

  handleCalendarNavigate = (date, calView) => {
    this.setState({ date, calView });
    this.props.onChangeDate(date);
    this.doFetchEvents(this.state.filters, 'calendar', calView, date);
  };

  handleCalendarView = (calView) => {
    this.setState({ calView });
    this.props.onChangeCalView(calView);
    this.doFetchEvents(this.state.filters, 'calendar', calView, this.state.date);
  };

  handleFilterChange(values) {
    this.setState({
      filters: values,
    });

    this.doFetchEvents(values);
  }

  doFetchEvents(
    values = this.state.filters,
    view = this.state.view,
    calView = this.state.calView,
    date,
  ) {
    const { fetchEvents } = this.props;

    fetchEvents({
      filters: getFilters(values, view, calView, date),
      include: eventIncludes,
      replace: true,
      headers: {
        'X-Consumer-ID': interceptClient.consumer,
      },
    });
  }

  render() {
    const {
      state,
      props,
      handleCalendarNavigate,
      handleViewChange,
      handleCalendarView,
      handleFilterChange,
    } = this;
    const { calendarEvents, events, eventsLoading } = props;
    const { view, date, calView } = state;

    // function onFilterChange(values) {
    //   fetchEvents({
    //     filters: getFilters(values, state, props),
    //     include: eventIncludes,
    //     replace: true,
    //     headers: {
    //       'X-Consumer-ID': interceptClient.consumer,
    //     },
    //   });
    // }

    const eventComponent =
      view === 'list' ? (
        <EventList events={events} />
      ) : (
        <EventCalendar
          events={calendarEvents}
          onNavigate={handleCalendarNavigate}
          onView={handleCalendarView}
          defaultView={calView}
          defaultDate={date}
        />
      );

    return (
      <div className="l--offset">
        <ViewSwitcher value={view} handleChange={handleViewChange} />
        <div className="l--sidebar-after clearfix">
          <div className="l__main">
            <div className="l__secondary">
              <p>{eventsLoading ? 'Loading' : ''}</p>
              <EventFilters onChange={handleFilterChange} showDate={view === 'list'} />
            </div>
            <div className="l__primary">{eventComponent}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: select.eventsByDateAscending(state),
  eventsLoading: select.recordsAreLoading('node--event')(state),
  calendarEvents: select.calendarEvents(state),
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: (options) => {
    dispatch(api['node--event'].fetchAll(options));
  },
});

BrowseEventsApp.propTypes = {
  calendarEvents: PropTypes.arrayOf(Object).isRequired,
  events: PropTypes.arrayOf(Object).isRequired,
  eventsLoading: PropTypes.bool.isRequired,
  fetchEvents: PropTypes.func.isRequired,
  calView: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  view: PropTypes.string,
  onChangeCalView: PropTypes.func.isRequired,
  onChangeView: PropTypes.func.isRequired,
  onChangeDate: PropTypes.func.isRequired,
};

BrowseEventsApp.defaultProps = {
  view: 'list',
  calView: 'month',
  date: new Date(),
};

export default addUrlProps({ urlPropsQueryConfig })(
  connect(mapStateToProps, mapDispatchToProps)(BrowseEventsApp),
);
