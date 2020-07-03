import React, { Fragment } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Homepage from './pages/Homepage';
import MobileDetails from './pages/MobileDetails';
import Comparison from './pages/Comparison';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/mobile-details" exact component={MobileDetails} />
          <Route path="/comparison" exact component={Comparison} />
          <Route path="/" exact component={Homepage} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
