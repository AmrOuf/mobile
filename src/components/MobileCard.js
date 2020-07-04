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

const MobileCard = ({ mobile, setCurrentMobile }) => {
  const classes = useStyles();

  const handleMobileClick = () => {
    setCurrentMobile(mobile);
  };

  return (
    <Fragment>
      <ButtonBase
        className={classes.cardContainer}
        onClick={handleMobileClick}
        component={Link}
        to={'/mobile-details'}
      >
        <Paper className={classes.mobileCard}>
          <Typography variant="h4">{mobile.DeviceName}</Typography>
          <Typography variant="subtitle2">{mobile.Brand}</Typography>
        </Paper>
      </ButtonBase>
    </Fragment>
  );
};

export default MobileCard;
