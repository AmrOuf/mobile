import React, { Fragment } from 'react';
import { Container, Paper, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '10px',
    marginTop: '20px',
    textAlign: 'center',
  },
}));

const MobileDetails = ({ mobile }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Container>
        <Paper className={classes.paper}>
          <Typography variant="h4">{mobile.DeviceName}</Typography>
          <Typography variant="subtitle1">
            Announced on {mobile.announced}
          </Typography>
          <Typography variant="subtitle1">
            Battery: {mobile.battery_c}
          </Typography>
          <Typography variant="subtitle1">CPU: {mobile.cpu}</Typography>
          <Typography variant="subtitle1">OS: {mobile.os}</Typography>
          <Typography variant="subtitle1">
            Resolution: {mobile.resolution}
          </Typography>
          <Typography variant="subtitle1">Size: {mobile.size}</Typography>
          <Typography variant="subtitle1">GPS: {mobile.gps}</Typography>
          <Typography variant="subtitle1">GPU: {mobile.gpu}</Typography>
          <Typography variant="subtitle1">Weight: {mobile.weight}</Typography>
          <Typography variant="subtitle1">Video: {mobile.video}</Typography>
        </Paper>
      </Container>
    </Fragment>
  );
};

export default MobileDetails;
