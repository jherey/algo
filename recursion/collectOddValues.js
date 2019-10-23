function collectOddValues(arrOfNums) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1))
  }

  helper(arrOfNums)

  return result;
}

function collectOddValues(arrOfNums) {
  let result = [];
  if (arrOfNums.length === 0) {
    return result;
  }

  if (arrOfNums[0] % 2 !== 0) {
    result.push(arrOfNums[0]);
  }

  result = result.concat(collectOddValues(arrOfNums.slice(1)))
  return result;
}

const a = collectOddValues([1,2,3,4,5,6,7,8,9])
console.log(a)
