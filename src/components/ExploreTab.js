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
import MobileCard from './MobileCard';

const useStyles = makeStyles((theme) => ({
  btn: {
    marginTop: '20px',
  },
}));

const ExploreTab = ({ mobiles, loadingMode, setCurrentMobile }) => {
  const [mobileList, setMobileList] = useState(null);
  const [content, setContent] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const list = mobiles.map((mobile) => (
      <MobileCard
        key={`${mobile.DeviceName} ${mobile.dimensions}`}
        mobile={mobile}
        setCurrentMobile={setCurrentMobile}
      ></MobileCard>
    ));
    setMobileList(list);
    setContent(list.slice(0, 10));
  }, [mobiles]);

  const handleClick = () => {
    // const list = [...mobileList];
    setContent([
      ...content,
      ...mobileList.slice(content.length, content.length + 10),
    ]);
    console.log(loadingMode);
  };

  return (
    <Fragment>
      {content}
      {loadingMode === 'manual' && (
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleClick}
          className={classes.btn}
        >
          Load More
        </Button>
      )}
    </Fragment>
  );
};

export default ExploreTab;
