import React, { Fragment, useState } from 'react';
import { Typography, Switch, Paper } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '10px',
    marginTop: '20px',
    textAlign: 'center',
    height: '75vh',
    position: 'relative',
  },
  title: {
    marginBottom: '40px',
  },
  copyright: {
    position: 'absolute',
    bottom: '10px',
    left: 0,
    right: 0,
  },
  mode: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '20px',
  },
}));

const SettingsTab = ({ loadingMode, setLoadingMode }) => {
  const [state, setState] = useState({
    checked: loadingMode === 'auto',
  });
  const classes = useStyles();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    setLoadingMode(loadingMode === 'auto' ? 'manual' : 'auto');
  };

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Typography variant="h4" className={classes.title}>
          Choose your loading mode
        </Typography>
        <span className={classes.mode}>Manual</span>
        <Switch
          checked={state.checked}
          onChange={handleChange}
          color="primary"
          name="checked"
        />
        <span className={classes.mode}>Automatic</span>

        <Typography variant="body2" className={classes.copyright}>
          All of the data in this application is provided by{' '}
          <a href="https://fonoapi.freshpixl.com/" target="_blank">
            Fono API
          </a>
        </Typography>
      </Paper>
    </Fragment>
  );
};

export default SettingsTab;
