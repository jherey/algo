/*
Implement a function called countUniqueValues, which accepts a sorted array, and counts
the unique values in the array. There can be negative numbers in the array, but it will
always be sorted.
countUniqueValues([1,1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
*/

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let left = 0;
  let next = left + 1;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[left] !== arr[next]) {
      left += 1;
      arr[left] = arr[next];
    }
    next += 1;
  }
  return left + 1;
}

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }
  }
  return i + 1;
}

const a = countUniqueValues([-2,-1,-1,0,1])
console.log(a)
