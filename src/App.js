import React from 'react';
import Multiplier from './components/Multiplier'
import EvenClicks from './components/EvenClicks'
import CountBy from './components/CountBy'
import HideMe from './components/HideMe'
import MinimumLength from './components/MinimumLength'

const App = () => (
  <>
    <Multiplier x={ 5 } y={ 7 } />
    <EvenClicks />
    <CountBy step={ 5 }/>
    <HideMe>Highly sensitive state secrets</HideMe>
    <MinimumLength length={ 30 } />
  </>
  );

export default App;
