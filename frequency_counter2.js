/*
Given two strings, write a function to determine if the second string is an anagram of the
first. An anagram is a word, phrase, or name formed by rearranging the letters of another,
such as cinema, formed from iceman.
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
*/

function validAnagram(str1, str2) {
  if (str1.trim().length !== str2.trim().length) {
    return false;
  }

  let str1Frequency1 = {};
  let str1Frequency2 = {};

  for (let char of str1) {
    // ignore spaces, and symbols
    if (/[a-z0-9]/.test(char)) {
      char = char.toLowerCase()
      str1Frequency1[char] = (str1Frequency1[char] || 0) + 1;
    }
  }
  for (let char of str2) {
    if (/[a-z0-9]/.test(char)) {
      char = char.toLowerCase()
      str1Frequency2[char] = (str1Frequency2[char] || 0) + 1;
    }
  }

  console.log(str1Frequency1)
  console.log(str1Frequency2)

  for(let key in str1Frequency1) {
    if (!str1Frequency2[key]) {
      return false;
    }
    if (str1Frequency1[key] !== str1Frequency2[key]) {
      return false;
    }
  }
  return true;
}

function validAnagram(str1, str2) {
  if (str1.trim().length !== str2.trim().length) {
    return false;
  }

  let lookup = {};

  for (let char of str1) {
    // if char exists, increment, otherwise set to 1
    lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
  }
  console.log(str1Frequency1)

  for (let char of str2) {
    // can't find letter or letter is 0, then it's not an anagram
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char] -= 1;
    }
  }

  return true;
}

const a = validAnagram('texttwisttime12', 'timetwisttext12');
console.log(a)
