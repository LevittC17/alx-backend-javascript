export default function cleanSet(set, startString) {
  let result = '';

  for (const item of set) {
    if (item.startsWith(startString)) {
      result += `${item.slice(startString.length)}-`;
    }
  }

  // Remove the trailing '-' if it exists
  if (result.endsWith('-')) {
    result = result.slice(0, -1);
  }

  return result;
}
