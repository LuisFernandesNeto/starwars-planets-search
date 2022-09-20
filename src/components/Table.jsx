import React, { useContext } from 'react';
import PlanetsSearchContext from '../context/PlanetsSearchContext';

function Table() {
  const { state } = useContext(PlanetsSearchContext);
  console.log(state);
  return (

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
        {state.map((stat, index) => (
          <tr key={ index }>
            <td>{stat.name}</td>
            <td>{stat.rotation_period}</td>
            <td>{stat.orbital_period}</td>
            <td>{stat.diameter}</td>
            <td>{stat.climate}</td>
            <td>{stat.gravity}</td>
            <td>{stat.terrain}</td>
            <td>{stat.surface_water}</td>
            <td>{stat.population}</td>
            <td>{stat.films}</td>
            <td>{stat.created}</td>
            <td>{stat.edited}</td>
            <td>{stat.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
