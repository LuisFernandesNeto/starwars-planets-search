import React from 'react';
import './App.css';
import PlanetsSearchProvider from './context/PlanetsSearchProvider';
import Table from './components/Table';
import Filters from './components/Filters';

function App() {
  return (
    <PlanetsSearchProvider>
      <div>
        <Filters />
        <Table />
      </div>
    </PlanetsSearchProvider>
  );
}

export default App;
