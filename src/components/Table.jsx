import React, { useContext } from 'react';
import PlanetsSearchContext from '../context/PlanetsSearchContext';
import { selectColumn } from '../context/PlanetsSearchProvider';

function Table() {
  const { filteredPlanets,
    filterByNumericValues,
    setFilterByNumericValues,
    setFilterValues,
    setFilteredPlanets,
    planets } = useContext(PlanetsSearchContext);

  const handleClick = (column) => {
    setFilterByNumericValues((prevState) => (
      prevState.filter((prev) => (
        prev.column !== column
      ))
    ));
    setFilterValues((prevState) => (
      [...prevState, column]
    ));
    setFilteredPlanets(planets);
  };

  const clearFilteredValues = () => {
    setFilterByNumericValues([]);
    setFilterValues(selectColumn);
  };

  return (
    <div>
      {filterByNumericValues.map((value, index) => (
        <div data-testid="filter" key={ index }>
          <p>
            {value.column}
            {' '}
            {value.comparison}
            {' '}
            {value.value}
          </p>
          <button
            type="button"
            onClick={ () => handleClick(value.column) }
          >
            Excluir

          </button>
        </div>
      ))}
      <button
        onClick={ clearFilteredValues }
        data-testid="button-remove-filters"
        type="button"
      >
        Remover todas filtragens

      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>

        <tbody>
          {filteredPlanets.map((planet, index) => (
            <tr key={ index }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
}

export default Table;
