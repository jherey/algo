// Write a function called same, which accepts two arrays. The function should return true
// if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.
// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

const same = (arr1, arr2) => {
  // check if length of array is the same
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let el of arr1) {
    // check if arr2 have the square of element
    if (arr2.includes(el ** 2)) {
      // remove element from arr2
      arr2.splice(arr2.indexOf(el ** 2), 1);
    }
  }

  if (arr2.length === 0) {
    return true;
  } else {
    return false;
  }
}


const same = (arr1, arr2) => {
  // check if length of array is the same
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1)
  }

  return true;
}

const a = same([1,2,1], [4,4,1])
console.log(a)
