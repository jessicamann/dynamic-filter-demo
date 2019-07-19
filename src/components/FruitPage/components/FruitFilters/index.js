import React, { useState } from "react";
import { Select, MenuItem } from "@material-ui/core";
import styled from "styled-components";

const StyledSelect = styled(Select)`
  margin-right: 10px;
`;

export default function FruitFilters({
  colorOptions = [],
  countryOptions = [],
  filterApplied = () => {}
}) {
  const [selectedColors, setSelectedColors] = useState([]); // keep as states
  const [selectedCountries, setSelectedCountries] = useState([]); // keep as states

  const colorOnChange = (event, _) => {
    const selection = event.target.value;
    setSelectedColors(selection);
  };

  const countryOnChange = (event, _) => {
    const selection = event.target.value;
    setSelectedCountries(selection);
  };

  const applyFilter = () => {
    filterApplied({
      selectedCountries: selectedCountries,
      selectedColors: selectedColors
    });
  };

  return (
    <React.Fragment>
      <StyledSelect
        multiple
        value={selectedColors}
        onChange={colorOnChange}
        onClose={applyFilter}
      >
        {colorOptions.map(color => (
          <MenuItem value={color} key={color}>
            {color}
          </MenuItem>
        ))}
      </StyledSelect>

      <StyledSelect
        multiple
        value={selectedCountries}
        onChange={countryOnChange}
        onClose={applyFilter}
      >
        {countryOptions.map(country => (
          <MenuItem value={country} key={country}>
            {country}
          </MenuItem>
        ))}
      </StyledSelect>
    </React.Fragment>
  );
}
