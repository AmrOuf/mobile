import React, { Fragment, useState, useEffect, useLayoutEffect } from 'react';
import { Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import MobileCard from './MobileCard';

const useStyles = makeStyles((theme) => ({
  btn: {
    marginTop: '20px',
    margin: 'auto',
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

  useLayoutEffect(() => {
    if (loadingMode === 'auto') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  });

  const handleClick = () => {
    setContent([
      ...content,
      ...mobileList.slice(content.length, content.length + 10),
    ]);
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setContent([
        ...content,
        ...mobileList.slice(content.length, content.length + 10),
      ]);
    }
  };

  return (
    <Fragment>
      {content}
      {loadingMode === 'manual' && (
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
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
