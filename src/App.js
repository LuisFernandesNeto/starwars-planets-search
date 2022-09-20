import React from 'react';
import './App.css';
import PlanetsSearchProvider from './context/PlanetsSearchProvider';

function App() {
  return (
    <PlanetsSearchProvider>
      <span>Hello, App!</span>
    </PlanetsSearchProvider>
  );
}

export default App;
