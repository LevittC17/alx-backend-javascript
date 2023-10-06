export default function cleanSet(set, startString) {
  // Create an array of values from the set
  const valuesArray = Array.from(set);

  // Use filter to keep only values that start with startString
  const filteredValues = valuesArray.filter((value) => value.startsWith(startString));

  // Use join to concatenate the filtered values with "-"
  const resultString = filteredValues.join('-');

  return resultString;
}
