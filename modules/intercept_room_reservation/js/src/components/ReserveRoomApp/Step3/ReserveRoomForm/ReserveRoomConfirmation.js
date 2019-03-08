import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import interceptClient from 'interceptClient';
import DialogConfirm from 'intercept/Dialog/DialogConfirm';
import get from 'lodash/get';

import RoomReservationStatus from './RoomReservationStatus';
import RoomReservationSummary from './RoomReservationSummary';
import withAvailability from './../../withAvailability';

const { api, constants, select, session } = interceptClient;
const c = constants;

// State constants
const IDLE = 'idle';
const CONFLICT = 'conflict';
const SAVED = 'saved';
const ERROR = 'error';
const LOADING = 'loading';

class ReserveRoomConfirmation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uuid: null,
      state: 'idle',
      saved: false,
      disableBackdropClick: true,
      disableEscapeKeyDown: true,
    };

    this.checkAvailability = this.checkAvailability.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  /**
   * Checks room availabilty.
   *
   * @memberof ReserveRoomConfirmation
   */
  checkAvailability() {
    const { fetchAvailability, availabilityQuery } = this.props;
    const uuid = availabilityQuery.rooms[0];

    this.setState({ state: LOADING });

    // Checks reservation for potential conflicts.
    return new Promise((resolve, reject) => {
      try {
        fetchAvailability(availabilityQuery, (r) => {
          const res = JSON.parse(r);
          if (res[uuid].has_reservation_conflict) {
            reject();
            this.setState({ state: CONFLICT });
          }
          else {
            resolve();
          }
        });
      }
      catch (error) {
        reject(error);
        this.setState({ state: ERROR });
      }
    });
  }

  handleConfirm() {
    const { onConfirm, save } = this.props;

    // Make one last availability check
    // then -> save
    // reject -> display error with link back to step 2
    this.checkAvailability()
      .then(() => {
        const uuid = onConfirm();
        save(uuid);
        this.setState({
          state: SAVED,
          uuid,
        });
      })
      .catch(() => {
        this.setState({ state: CONFLICT });
      });
  }

  render() {
    const { open, onCancel, values, eventNid } = this.props;
    const { uuid, state, disableBackdropClick, disableEscapeKeyDown} = this.state;

    let content = null;
    let dialogProps = {
      onCancel,
    };

    switch (state) {
      case IDLE:
        content = <RoomReservationSummary {...values} />;
        dialogProps = {
          ...dialogProps,
          confirmText: 'Submit',
          cancelText: 'Cancel',
          heading: 'Confirm reservation request?',
          onConfirm: this.handleConfirm,
        };
        break;
      case LOADING:
        content = <RoomReservationSummary {...values} />;
        dialogProps = {
          ...dialogProps,
          cancelText: 'Cancel',
          heading: 'Sending reservation request',
          onConfirm: null,
          onCancel: null,
        };
        break;
      case CONFLICT:
        dialogProps = {
          ...dialogProps,
          heading: 'This room is no longer available at this time.',
          cancelText: 'Close',
        };
        break;
      case ERROR:
        dialogProps = {
          ...dialogProps,
          heading: 'There was an unexpected error with your reservation.',
          cancelText: 'Close',
          confirmText: 'Try Again',
          onConfirm: this.handleConfirm,
        };
        break;
      case SAVED:
        content = <RoomReservationStatus uuid={uuid} />;
        dialogProps = {
          ...dialogProps,
          confirmText: 'View Your Reservations',
          cancelText: 'Close',
          heading: '',
          onConfirm: () => {
            window.location.href = '/account/room-reservations';
          },
        };

        // Handle event room reservations.
        if (eventNid) {
          dialogProps.confirmText = 'Back to Edit Event';
          dialogProps.onConfirm = () => {
            window.location.href = `/node/${eventNid}/edit`;
          };
        }
        break;
      default:
        break;
    }

    return (
      <DialogConfirm {...dialogProps} open={open} onBackdropClick={null} disableEscapeKeyDown={disableEscapeKeyDown} disableBackdropClick={disableBackdropClick}>
        {content}
      </DialogConfirm>
    );
  }
}

ReserveRoomConfirmation.propTypes = {
  availabilityQuery: PropTypes.object.isRequired,
  fetchAvailability: PropTypes.func.isRequired,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  open: PropTypes.bool,
  save: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  eventNid: PropTypes.number,
};

ReserveRoomConfirmation.defaultProps = {
  onConfirm: null,
  onCancel: null,
  open: false,
  eventNid: null,
  disableEscapeKeyDown: true,
  disableBackdropClick: true,
};

const mapStateToProps = (state, ownProps) => {
  const { values } = ownProps;
  const eventId = values[c.TYPE_EVENT];
  let eventNid = null;

  if (eventId) {
    eventNid = get(select.event(values[c.TYPE_EVENT])(state), 'data.attributes.nid');
  }

  return {
    eventNid,
  };
};

const mapDispatchToProps = dispatch => ({
  save: (uuid) => {
    // dispatch(actions.add(data, c.TYPE_ROOM_RESERVATION, data.id));
    session
      .getToken()
      .then((token) => {
        dispatch(
          api[c.TYPE_ROOM_RESERVATION].sync(uuid, {
            headers: { 'X-CSRF-Token': token },
          }),
        );
      })
      .catch((e) => {
        console.log('Unable to save Reservation', e);
      });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withAvailability(ReserveRoomConfirmation));
