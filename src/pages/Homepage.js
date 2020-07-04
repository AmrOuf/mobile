import React, { Fragment, useState, useEffect } from 'react';

import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

import CompareTab from '../components/CompareTab';
import ExploreTab from '../components/ExploreTab';
import SettingsTab from '../components/SettingsTab';

const Homepage = ({
  mobiles,
  loadingMode,
  setCurrentMobile,
  setComparedMobiles,
  setLoadingMode,
}) => {
  const [value, setValue] = useState(0);
  const [content, setContent] = useState(null);

  useEffect(() => {
    setContent(
      <ExploreTab
        mobiles={mobiles}
        loadingMode={loadingMode}
        setCurrentMobile={setCurrentMobile}
      ></ExploreTab>
    );
  }, [mobiles]);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    switch (newValue) {
      case 0:
        setContent(
          <ExploreTab
            mobiles={mobiles}
            loadingMode={loadingMode}
            setCurrentMobile={setCurrentMobile}
          ></ExploreTab>
        );
        break;
      case 1:
        setContent(
          <CompareTab
            mobiles={mobiles}
            setComparedMobiles={setComparedMobiles}
          ></CompareTab>
        );
        break;
      case 2:
        setContent(
          <SettingsTab
            loadingMode={loadingMode}
            setLoadingMode={setLoadingMode}
          ></SettingsTab>
        );
        break;

      default:
        setContent(
          <ExploreTab
            mobiles={mobiles}
            loadingMode={loadingMode}
            setCurrentMobile={setCurrentMobile}
          ></ExploreTab>
        );
    }
  };

  return (
    <Fragment>
      <Container>
        <Paper>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Explore" />
            <Tab label="Compare" />
            <Tab label="Settings" />
          </Tabs>
        </Paper>
        {content}
      </Container>
    </Fragment>
  );
};

export default Homepage;
