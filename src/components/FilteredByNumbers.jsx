import React, { useContext, useState } from 'react';
import PlanetsSearchContext from '../context/PlanetsSearchContext';

function FilteredByNumbers() {
  const { setFilterByNumericValues } = useContext(PlanetsSearchContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState(0);

  const handleChange = (value, callback) => {
    callback(value);
  };

  const handleClick = () => {
    setFilterByNumericValues((prevState) => (
      [...prevState, { column, comparison, value: number }]
    ));
  };

  return (
    <div>
      <select
        value={ column }
        data-testid="column-filter"
        onChange={ ({ target: { value } }) => { handleChange(value, setColumn); } }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        value={ comparison }
        data-testid="comparison-filter"
        onChange={ ({ target: { value } }) => { handleChange(value, setComparison); } }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        value={ number }
        type="number"
        data-testid="value-filter"
        onChange={ ({ target: { value } }) => { handleChange(value, setNumber); } }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar

      </button>
    </div>
  );
}

export default FilteredByNumbers;
