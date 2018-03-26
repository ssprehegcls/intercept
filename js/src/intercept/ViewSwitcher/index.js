import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  label: {
    textTransform: 'uppercase',
  },
  checked: {
    fontWeight: 'bold',
  },
  unChecked: {
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
  },
});

const buttonClasses = (props, checked) => ({
  label: props.classes[checked ? 'checked' : 'unChecked'],
  root: props.classes.label,
});

class ViewSwitcher extends React.Component {
  render() {
    const { classes, value, handleChange } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" required className={classes.formControl}>
          <FormLabel className="visually-hidden">View Switcher</FormLabel>
          <RadioGroup
            aria-label="view-selector"
            name="view-selector-1"
            className={classes.group}
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="list"
              classes={buttonClasses(this.props, value === 'list')}
              control={<Radio icon={null} checkedIcon={null} />}
              label="List"
              disabled={value === 'list'}
            />
            <FormControlLabel
              classes={buttonClasses(this.props, value === 'calendar')}
              value="calendar"
              control={<Radio icon={null} checkedIcon={null} />}
              label="Calendar"
              disabled={value === 'calendar'}
            />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

ViewSwitcher.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

ViewSwitcher.defaultProps = {
  value: 'list',
};

export default withStyles(styles)(ViewSwitcher);
