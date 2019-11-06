// indexOf is a typical example of a Linear Search
// Write a custom indexOf function

// const val = arr.indexOf(num);
function findIndex(arr, num) {
  let val = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      val = i;
      break;
    }
  }
  return val;
}

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// const a = findIndex([1,2,3,4,5], 7)
// console.log(a)

const a = linearSearch([22,33,12,1], 120)
console.log(a)
