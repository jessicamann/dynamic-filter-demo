import { uniq } from 'lodash-core';

export default function FilterMasterMind({ children, cars = [] }) {
  const allMakeOptions = uniq(cars.map(({ make }) => make));
  const allModelOptions = uniq(cars.map(({ model }) => model));
  return children({
    makeOptions: allMakeOptions,
    modelOptions: allModelOptions,
  });
}
