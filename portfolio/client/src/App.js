import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import './App.css';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' render={routeProps => <Main {...routeProps}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
