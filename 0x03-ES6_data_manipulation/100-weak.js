// Create a WeakMap to track the number of queries for each endpoint
export const weakMap = new WeakMap();

// export the queryAPI function
export function queryAPI(endpoint) {
  // Initialize the query count for the endpoint to 0 if it doesn't exist in the weakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Increment the query count for the endpoint
  const queryCount = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, queryCount);

  // Check if the queryCount is >= 5 and throw an error if so
  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
