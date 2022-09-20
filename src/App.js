import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PlanetsSearchProvider from './context/PlanetsSearchProvider';
import Table from './components/Table';

function App() {
  return (
    <PlanetsSearchProvider>
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Table } />
          </Switch>
        </BrowserRouter>
      </div>

    </PlanetsSearchProvider>
  );
}

export default App;
