/** product: calculate the product of an array of numbers. */

function product(nums) {
  //base case
  if (nums.length === 0) return 1;
  // normal case

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  //base case - words num have all been looked through
  if (words.length === 0) return 0;

  // normal case
  //   - get the length of the current word and compare it with the next word
  let greaterLength = Math.max(words[0].length, longest(words.slice(1)));

  // need to return the greater of the lengths we are comparing
  return greaterLength;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  //base case - when we've looped through all chars in a str we are done
  if (str.length === 0) return "";

  let charToAdd = (str.length - 1) % 2 === 0 ? str[str.length - 1] : "";

  // return val should simply be the char concat'd with the other return vals (either null or the char)
  return everyOther(str.slice(0, str.length - 1)) + charToAdd;
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  //base case, we have no letters left in the str
  if (str.length === 0) return true;

  //what we need to accomplish. start

  // word is even length letters
  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return isPalindrome(str.slice(1, str.length - 1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  // we need to keep track of the current index in the array that we are working on

  function returnIdxOfVal(arr, val, currentIdx) {
    //base case. we made it through the entire array and didn't find a match
    if (arr.length === 0) {
      return -1;
    }

    if (arr[0] === val) {
      console.log("found the item!", currentIdx);
      return currentIdx;
    } else {
      currentIdx++;
      return returnIdxOfVal(arr.slice(1), val, currentIdx);
    }
  }

  return returnIdxOfVal(arr, val, 0);
}

let animals = ["duck", "cat", "pony"];

findIndex(animals, "cat"); // 1
findIndex(animals, "porcupine"); // -1

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // base case
  if (str.length === 0) return "";

  // normal case, similar to our print every other letter, but reverse the order of concatenation

  return revString(str.slice(1, str.length)) + str[0];
}

revString("porcupine"); // 'enipucrop'

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  const vals = [];

  function printStringVals(obj) {
    for (let key of Object.keys(obj)) {
      if (typeof obj[key] === "object") printStringVals(obj[key]);
      if (typeof obj[key] === "string") vals.push(obj[key]);
    }
  }

  printStringVals(obj);

  return vals;
}

let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz",
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!",
        },
      },
    },
    favoriteString: "nice!",
  },
};

gatherStrings(nestedObj); // ["Lester", "Testowitz", "you made it!", "nice!"];

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  // define our recursive function
  function bsRecursive(arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
    // base case, our markers have crossed, we haven't found the item
    if (leftIdx > rightIdx) return -1;

    let middle = Math.floor((leftIdx + rightIdx) / 2);

    if (arr[middle] === val) return middle;

    if (arr[middle] > val) {
      rightIdx = middle - 1;
    }

    if (arr[middle] < val) {
      leftIdx = middle + 1;
    }
    return bsRecursive(arr, val, leftIdx, rightIdx);
  }

  //after our function finishes, we need to return something
  return bsRecursive(arr, val);
}

binarySearch([1, 2, 3, 4], 1); // 0
binarySearch([1, 2, 3, 4], 3); // 2
binarySearch([1, 2, 3, 4], 5); // -1

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
