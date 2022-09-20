import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import PlanetsSearchContext from './PlanetsSearchContext';
import getPlanets from '../services/api';

function PlanetsSearchProvider({ children }) {
  const [state, setState] = useState([]);

  const contextType = {
    state,
    setState,
  };

  const fetchPlanetsSearch = async () => {
    const response = await getPlanets();
    setState(response);
  };

  useEffect(() => {
    fetchPlanetsSearch();
  }, []);

  return (
    <PlanetsSearchContext.Provider value={ contextType }>
      {children}
    </PlanetsSearchContext.Provider>
  );
}

PlanetsSearchProvider.propTypes = {
  children: propTypes.node.isRequired,
};
export default PlanetsSearchProvider;
