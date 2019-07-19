import React, { useState, useEffect } from "react";
import FruitsTable from "./components/FruitsTable";
import FruitFilters from "./components/FruitFilters";
import FilterMasterMind from "./components/FilterMasterMind";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function() {
  useEffect(() => {
    const allFruits = [
      { name: "Apple", color: "red", country: "USA" },
      { name: "Banana", color: "yellow", country: "Mexico" },
      { name: "Kiwi", color: "green", country: "Australia" },
      { name: "Apple", color: "green", country: "Mexico" },
      { name: "Pineapple", color: "yellow", country: "Brazil" },
      { name: "Avocado", color: "green", country: "Brazil" }
    ];
    setTimeout(() => {
      setAllFruits(allFruits);
      setFruits(allFruits);
    }, 500);
  }, []);

  const [allFruits, setAllFruits] = useState([]);
  const [fruits, setFruits] = useState([]);

  const findMatchingFruits = ({ selectedColors, selectedCountries }) => {
    const fruitsMatchingFilters = allFruits.filter(
      fruit =>
        fruit.color.includes(selectedColors) &&
        fruit.country.includes(selectedCountries)
    );
    setFruits(fruitsMatchingFilters);
  };
  return (
    <React.Fragment>
      {fruits.length < 1 ? (
        <CircularProgress />
      ) : (
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
      )}
    </React.Fragment>
  );
}
