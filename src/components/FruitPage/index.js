import React, { useState, useEffect } from 'react';
import FruitsTable from './components/FruitsTable';
import FruitFilters from './components/FruitFilters';
import FilterMasterMind from './components/FilterMasterMind';
import CircularProgress from '@material-ui/core/CircularProgress';
import data from './data.json';

export default function() {
  const [allFruits, setAllFruits] = useState([]);
  const [fruits, setFruits] = useState();

  useEffect(() => {
    const allFruits = data;
    setTimeout(() => {
      setAllFruits(allFruits);
      setFruits(allFruits);
    }, 500);
  }, []);

  const checkAgainstFilter = (selectedFilters, attribute) =>
    selectedFilters.length > 0 ? selectedFilters.includes(attribute) : true;
  const findMatchingFruits = ({ selectedModels, selectedMake }) => {
    const fruitsMatchingFilters = allFruits.filter(
      car =>
        checkAgainstFilter(selectedMake, car.make) &&
        checkAgainstFilter(selectedModels, car.model)
    );
    setFruits(fruitsMatchingFilters);
  };
  return (
    <React.Fragment>
      {fruits ? (
        <React.Fragment>
          <FilterMasterMind fruits={fruits}>
            {({ makeOptions, modelOptions }) => (
              <FruitFilters
                makeOptions={makeOptions}
                modelOptions={modelOptions}
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
