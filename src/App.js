import React from 'react';
import './App.css';
import PlanetsSearchProvider from './context/PlanetsSearchProvider';
import Table from './components/Table';

function App() {
  return (
    <PlanetsSearchProvider>
      <div>
        <Table />
      </div>

    </PlanetsSearchProvider>
  );
}

export default App;
