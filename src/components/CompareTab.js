import React, { Fragment, useState, useEffect } from 'react';
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '300px',
  },
}));

const CompareTab = ({ mobiles, setComparedMobiles }) => {
  const [mobile1, setMobile1] = useState('');
  const [mobile2, setMobile2] = useState('');
  const [mobileList1, setMobileList1] = useState(null);
  const [mobileList2, setMobileList2] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const list = mobiles.map((mobile) => {
      return (
        <MenuItem key={`${mobile.DeviceName + mobile.price}`} value={mobile}>
          {mobile.DeviceName}
        </MenuItem>
      );
    });
    setMobileList1(list);
    setMobileList2(list);
  }, []);

  const handleChange1 = (event) => {
    setMobile1(event.target.value);
  };

  const handleChange2 = (event) => {
    setMobile2(event.target.value);
  };

  const handleClick = () => {
    setComparedMobiles([mobile1, mobile2]);
  };

  return (
    <Fragment>
      <Typography variant="h4">Choose two mobiles</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>First choice</InputLabel>
        <Select value={mobile1} onChange={handleChange1}>
          {mobileList1}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel>Second choice</InputLabel>
        <Select value={mobile2} onChange={handleChange2}>
          {mobileList2}
        </Select>
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleClick}
        component={Link}
        to={'/comparison'}
      >
        Compare Now!
      </Button>
    </Fragment>
  );
};

export default CompareTab;
