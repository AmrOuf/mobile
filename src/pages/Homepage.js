import React, { Fragment, useState } from 'react';

import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MobileCard from '../components/MobileCard';

const Homepage = () => {
  const [value, setValue] = useState(0);
  const [content, setContent] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setContent(newValue);
  };

  return (
    <Fragment>
      <Container>
        <Paper gutterBottom>
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
        <MobileCard></MobileCard>
        <MobileCard></MobileCard>
      </Container>
    </Fragment>
  );
};

export default Homepage;
