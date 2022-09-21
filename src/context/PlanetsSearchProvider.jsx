import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import PlanetsSearchContext from './PlanetsSearchContext';
import getPlanets from '../services/api';

const selectColumn = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
];

function PlanetsSearchProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filter, setFilter] = useState({ name: '' });
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [filterValues, setFilterValues] = useState(selectColumn);

  const contextType = {
    planets,
    setPlanets,
    filter,
    setFilter,
    filteredPlanets,
    filterByNumericValues,
    setFilterByNumericValues,
    filterValues,
    setFilterValues,
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

  useEffect(() => {
    setFilteredPlanets(planets);
  }, [planets]);

  useEffect(() => {
    filterByNumericValues.forEach((value) => {
      if (value.comparison === 'maior que') {
        const filtered = filteredPlanets.filter((planet) => (
          Number(planet[value.column]) > Number(value.value)
        ));
        setFilteredPlanets(filtered);
      } else if (value.comparison === 'menor que') {
        const filtered = filteredPlanets.filter((planet) => (
          Number(planet[value.column]) < Number(value.value)
        ));
        setFilteredPlanets(filtered);
      } else {
        const filtered = filteredPlanets.filter((planet) => (
          Number(planet[value.column]) === Number(value.value)
        ));
        setFilteredPlanets(filtered);
      }
    });
  }, [filterByNumericValues]);

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
