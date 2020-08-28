import React from 'react';
import Multiplier from './components/Multiplier';
import EvenClicks from './components/EvenClicks';
import CountBy from './components/CountBy';
import HideMe from './components/HideMe';
import MinimumLength from './components/MinimumLength';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <Nav />
    <Route exact path="/multiplier">
      <Multiplier x={ 5 } y={ 7 } />
    </Route>
    <Route path="/multiplier/:x/:y" render={ ({ match }) => (
      <Multiplier x={ + match.params.x } y={ + match.params.y } />
    )} />
    <Route exact path="/even-clicks">
      <EvenClicks />
    </Route>
    <Route exact path="/count-by">
      <CountBy step={ 5 }/>
    </Route>
    <Route path="/count-by/:step" render={ ({ match }) => (
      <CountBy step={ + match.params.step } />
    ) } />
    <Route exact path="/hide-me">
      <HideMe>Highly sensitive state secrets</HideMe>
    </Route>
    <Route exact path="/min-length">
      <MinimumLength length={ 30 } />
    </Route>
    <Route path="/min-length/:length" render={ ({ match }) => (
      <MinimumLength length={ + match.params.length } />
    ) } />
  </Router>
  );

export default App;
