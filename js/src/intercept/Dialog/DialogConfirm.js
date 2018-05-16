import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

class DialogConfirm extends React.PureComponent {
  render() {
    const {
      fullScreen,
      open,
      children,
      confirmText,
      cancelText,
      heading,
      onConfirm,
      onCancel,
      text,
    } = this.props;

    return (
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{heading}</DialogTitle>
          <DialogContent>
            {text && (
              <DialogContentText>
                {text}
              </DialogContentText>
            )}
            {children}
          </DialogContent>
          <DialogActions>
            <Button onClick={onConfirm} color="primary">
              {confirmText}
            </Button>
            <Button onClick={onCancel} color="primary" autoFocus>
              {cancelText}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

DialogConfirm.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

DialogConfirm.defaultProps = {
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  heading: null,
  text: null,
  onConfirm: null,
  onCancel: null,
  onClose: null,
  open: false,
};

export default withMobileDialog()(DialogConfirm);
