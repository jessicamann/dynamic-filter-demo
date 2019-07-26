import { uniq } from 'lodash-core';

export default function FilterMasterMind({ children, fruits = [] }) {
  const allMakeOptions = uniq(fruits.map(({ make }) => make));
  const allModelOptions = uniq(fruits.map(({ model }) => model));
  return children({
    makeOptions: allMakeOptions,
    modelOptions: allModelOptions,
  });
}
