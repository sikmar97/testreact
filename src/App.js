import React from 'react';
import {Routing} from './routes/Routing';
import {NavigationBar} from './components/Navigationbar/NavigationBar'
import  {UserProvider} from './shared/global/provider/UserProvider'
import './shared/global/Global.css'

function App() {
  return (
  <UserProvider>
    <Routing>
      <NavigationBar />
    </Routing>
  </UserProvider>
  );
}

export default App;
