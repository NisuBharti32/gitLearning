function findMissing(arr1, arr2) {
  let sum1 = arr1.reduce((a, b) => a + b, 0);
  let sum2 = arr2.reduce((a, b) => a + b, 0);
  return sum1 - sum2;
}

// Example
console.log(findMissing([4, 8, 1, 3, 7], [7, 4, 3, 1])); // Output: 8
