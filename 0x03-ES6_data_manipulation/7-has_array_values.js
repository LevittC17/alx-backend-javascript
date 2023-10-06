export default function hasValuesFromArray(set, arr) {
  // Use the every() method to check if all elements in the array are in the set
  return arr.every((element) => set.has(element));
}
