import React, { useState } from 'react';
import { Select, MenuItem, Button } from '@material-ui/core';
import styled from 'styled-components';

const StyledSelect = styled(Select)`
  margin-right: 30px;
`;

export default function CarFilters({
  makeOptions = [],
  modelOptions = [],
  filterApplied = () => {},
}) {
  const [selectedMake, setSelectedMake] = useState([]); // keep as states
  const [selectedModels, setSelectedModels] = useState([]); // keep as states

  const makeOnChange = (event, _) => {
    const selection = event.target.value;
    setSelectedMake(selection);
  };

  const modelOnChange = (event, _) => {
    const selection = event.target.value;
    setSelectedModels(selection);
  };

  const applyFilter = () => {
    filterApplied({
      selectedModels: selectedModels,
      selectedMake: selectedMake,
    });
  };

  const clear = () => {
    setSelectedMake([]);
    setSelectedModels([]);
    filterApplied({
      selectedModels: [],
      selectedMake: [],
    });
  };

  return (
    <React.Fragment>
      <StyledSelect
        multiple
        value={selectedMake}
        onChange={makeOnChange}
        onClose={applyFilter}
      >
        {makeOptions.map(make => (
          <MenuItem value={make} key={make}>
            {make}
          </MenuItem>
        ))}
      </StyledSelect>

      <StyledSelect
        multiple
        value={selectedModels}
        onChange={modelOnChange}
        onClose={applyFilter}
      >
        {modelOptions.map(model => (
          <MenuItem value={model} key={model}>
            {model}
          </MenuItem>
        ))}
      </StyledSelect>
      <Button size="small" variant="outlined" onClick={clear}>
        Clear all
      </Button>
    </React.Fragment>
  );
}
