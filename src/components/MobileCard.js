import React, { Fragment } from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { ButtonBase } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mobileCard: {
    marginTop: '20px',
    padding: '10px',
    borderLeft: `5px solid ${theme.palette.primary.main}`,
  },
  cardContainer: {
    display: 'block',
  },
}));

const MobileCard = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <ButtonBase
        className={classes.cardContainer}
        component={Link}
        to={'/mobile-details'}
      >
        <Paper className={classes.mobileCard}>
          <Typography variant="h4">Mobile Name</Typography>
          <Typography variant="subtitle2">Samsung</Typography>
        </Paper>
      </ButtonBase>
    </Fragment>
  );
};

export default MobileCard;
