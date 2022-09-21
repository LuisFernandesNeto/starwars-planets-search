import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import PlanetsSearchContext from './PlanetsSearchContext';
import getPlanets from '../services/api';

function PlanetsSearchProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filter, setFilter] = useState({ name: '' });
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  const contextType = {
    planets,
    setPlanets,
    filter,
    setFilter,
    filteredPlanets,
  };

  const fetchPlanetsSearch = async () => {
    const response = await getPlanets();
    setPlanets(response);
  };

  useEffect(() => {
    fetchPlanetsSearch();
  }, []);

  useEffect(() => {
    const filtered = planets.filter((planet) => (
      planet.name.toLowerCase().includes(filter.name.toLowerCase())
    ));
    setFilteredPlanets(filtered);
  }, [filter]);

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
