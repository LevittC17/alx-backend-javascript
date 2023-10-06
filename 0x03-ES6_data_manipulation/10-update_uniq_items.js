export default function updateUniqueItems(map) {
  // Check if the input is a Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over the entries of the Map
  for (const [key, value] of map.entries()) {
    if (value === 1) {
      // Update the quantity to 100 for items with an initial quanity of 1
      map.set(key, 100);
    }
  }
}
