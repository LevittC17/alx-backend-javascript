export default function cleanSet(Set, startString) {
  // If startString is empty, return an empty string
  if (startString === '') {
    return '';
  }

  // Initialize an empty array to store the filtered values
  const filteredValues = [];

  // Iterate over the Set's values and check if each value starts with the startString
  Set.forEach((value) => {
    if (value.startsWith(startString)) {
      // If it starts with the startString, append the rest of the string
      // to the filteredValues array
      filteredValues.push(value.substring(startString.length));
    }
  });

  // Join the filtered values with "-" separator and return the result as a string
  return filteredValues.join('-');
}
