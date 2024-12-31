/**
 * Returns the cumulative sum of the elements of given array
 */
const cumulativeSum = (arr: number[]) => {
  let sum = 0;
  return arr.map((item) => {
    return (sum = item + sum);
  });
};

/**
 * Finds the index of the array element where the element falls in given cumulative sum array
 */
const findCSumIndex = (arr: number[], num: number) => {
  const length = arr.length;
  const start = num >> 5; // perfomance hax bitshift
  for (let i = start; i < length; i++) {
    if (num < arr[i]!) return i;
  }
  return -1;
};

export { cumulativeSum, findCSumIndex };
