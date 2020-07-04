import React, { Fragment, useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import Homepage from './pages/Homepage';
import MobileDetails from './pages/MobileDetails';
import Comparison from './pages/Comparison';

function App() {
  const [mobiles, setMobiles] = useState([]);
  const [currentMobile, setCurrentMobile] = useState({});
  const [loadingMode, setLoadingMode] = useState('auto');
  const [comparedMobiles, setComparedMobiles] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get(
        'https://fonoapi.freshpixl.com/v1/getlatest',
        {
          params: {
            token: '09fd60d4619c13d508190787214e4aea7227aa04c076ad73',
            brand: 'samsung',
          },
        }
      );
      setMobiles(data);
    }

    getData();
  }, []);

  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route
            path="/mobile-details"
            exact
            render={() => <MobileDetails mobile={currentMobile} />}
          />
          <Route
            path="/comparison"
            exact
            render={() => (
              <Comparison
                comparedMobiles={comparedMobiles}
                setCurrentMobile={setCurrentMobile}
              />
            )}
          />
          <Route
            path="/"
            exact
            render={() => (
              <Homepage
                mobiles={mobiles}
                loadingMode={loadingMode}
                setCurrentMobile={setCurrentMobile}
                setComparedMobiles={setComparedMobiles}
                setLoadingMode={setLoadingMode}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
