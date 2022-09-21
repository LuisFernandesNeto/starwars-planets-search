import React from 'react';
import './App.css';
import PlanetsSearchProvider from './context/PlanetsSearchProvider';
import Table from './components/Table';
import Filters from './components/Filters';
import FilteredByNumbers from './components/FilteredByNumbers';

function App() {
  return (
    <PlanetsSearchProvider>
      <div>
        <Filters />
        <FilteredByNumbers />
        <Table />
      </div>
    </PlanetsSearchProvider>
  );
}

export default App;
