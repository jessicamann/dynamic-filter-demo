import { uniq } from "lodash-core";

export default function FilterMasterMind({ children, fruits = [] }) {
  const allColorOptions = uniq(fruits.map(({ color }) => color));
  const allCountryOptions = uniq(fruits.map(({ country }) => country));
  return children({
    colorOptions: allColorOptions,
    countryOptions: allCountryOptions
  });
}
