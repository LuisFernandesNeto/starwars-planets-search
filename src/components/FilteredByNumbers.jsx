import React, { useContext, useState, useEffect } from 'react';
import PlanetsSearchContext from '../context/PlanetsSearchContext';

function FilteredByNumbers() {
  const { setFilterByNumericValues,
    filterValues, setFilterValues } = useContext(PlanetsSearchContext);

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
    setFilterValues(filterValues.filter((value) => (
      value !== column
    )));
  };

  useEffect(() => {
    setColumn(filterValues[0]);
    setComparison('maior que');
    setNumber(0);
  }, [filterValues]);

  return (
    <div>
      <select
        value={ column }
        data-testid="column-filter"
        onChange={ ({ target: { value } }) => { handleChange(value, setColumn); } }
      >
        {filterValues.map((select, index) => (
          <option key={ index } value={ select }>{select}</option>
        ))}
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
