import React, { useState, useEffect } from 'react';
import FruitsTable from './components/FruitsTable';
import FruitFilters from './components/FruitFilters';
import FilterMasterMind from './components/FilterMasterMind';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function() {
  const [allFruits, setAllFruits] = useState([]);
  const [fruits, setFruits] = useState();

  useEffect(() => {
    const allFruits = [
      { name: 'Apple', color: 'red', country: 'USA' },
      { name: 'Banana', color: 'yellow', country: 'Mexico' },
      { name: 'Kiwi', color: 'green', country: 'Australia' },
      { name: 'Apple', color: 'green', country: 'Mexico' },
      { name: 'Pineapple', color: 'yellow', country: 'Brazil' },
      { name: 'Avocado', color: 'green', country: 'Brazil' },
    ];
    setTimeout(() => {
      setAllFruits(allFruits);
      setFruits(allFruits);
    }, 500);
  }, []);

  const checkAgainstFilter = (selectedFilters, attribute) =>
    selectedFilters.length > 0 ? selectedFilters.includes(attribute) : true;
  const findMatchingFruits = ({ selectedColors, selectedCountries }) => {
    const fruitsMatchingFilters = allFruits.filter(
      fruit =>
        checkAgainstFilter(selectedColors, fruit.color) &&
        checkAgainstFilter(selectedCountries, fruit.country)
    );
    setFruits(fruitsMatchingFilters);
  };
  return (
    <React.Fragment>
      {fruits ? (
        <React.Fragment>
          <FilterMasterMind fruits={fruits}>
            {({ colorOptions, countryOptions }) => (
              <FruitFilters
                colorOptions={colorOptions}
                countryOptions={countryOptions}
                filterApplied={findMatchingFruits}
              />
            )}
          </FilterMasterMind>
          <FruitsTable fruits={fruits} />
        </React.Fragment>
      ) : (
        <CircularProgress />
      )}
    </React.Fragment>
  );
}
