import React from 'react';
import Multiplier from './components/Multiplier'
import EvenClicks from './components/EvenClicks'

const App = () => (
  <>
    <Multiplier x={ 5 } y={ 7 } />
    <EvenClicks />
  </>
  );

export default App;
