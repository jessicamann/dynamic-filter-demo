import React, { useState, useEffect } from 'react';
import CarsTable from './components/CarsTable';
import CarFilters from './components/CarFilters';
import FilterMasterMind from './components/FilterMasterMind';
import CircularProgress from '@material-ui/core/CircularProgress';
import data from './data.json';

export default function CarPage() {
  const [allCars, setAllCars] = useState([]);
  const [cars, setCars] = useState();

  useEffect(() => {
    const allCars = data;
    setTimeout(() => {
      setAllCars(allCars);
      setCars(allCars);
    }, 500);
  }, []);

  const checkAgainstFilter = (selectedFilters, attribute) =>
    selectedFilters.length > 0 ? selectedFilters.includes(attribute) : true;
  const findMatchingCars = ({ selectedModels, selectedMake }) => {
    const carsMatchingFilters = allCars.filter(
      car =>
        checkAgainstFilter(selectedMake, car.make) &&
        checkAgainstFilter(selectedModels, car.model)
    );
    setCars(carsMatchingFilters);
  };
  return (
    <React.Fragment>
      {cars ? (
        <React.Fragment>
          <FilterMasterMind cars={cars}>
            {({ makeOptions, modelOptions }) => (
              <CarFilters
                makeOptions={makeOptions}
                modelOptions={modelOptions}
                filterApplied={findMatchingCars}
              />
            )}
          </FilterMasterMind>
          <CarsTable cars={cars} />
        </React.Fragment>
      ) : (
        <CircularProgress />
      )}
    </React.Fragment>
  );
}
