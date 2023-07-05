export const weakMap = new WeakMap();
export default function queryAPI(endpoint) {
  const endpointKey = JSON.stringify(endpoint);
  let count = weakMap.get(endpointKey);

  if (count === undefined) {
    count = 0;
  }

  count += 1;

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpointKey, count);

  // Perform API query
  console.log(`API query for ${endpointKey}`);
}
