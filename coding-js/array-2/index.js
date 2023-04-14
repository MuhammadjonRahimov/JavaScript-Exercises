// =============================================================================
/*
Array-2 -- findLowestIndex
Return the index of the minimum value in an array. The input array will have at least one element in it.

Examples
findLowestIndex([99, 98, 97, 96, 95]) → 4
findLowestIndex([2, 2, 0]) → 2
findLowestIndex([1, 3, 5]) → 0

Solution
function findLowestIndex(nums){
  const min = Math.min(...nums);
  return nums.indexOf(min);
}
*/
// =============================================================================
/*
Array-2 -- countEvens
Return the number of even ints in the given array. Note: the % "mod" operator computes the remainder, e.g. 5 % 2 is 1.

Examples
countEvens([2, 1, 2, 3, 4]) → 3
countEvens([2, 2, 0]) → 3
countEvens([1, 3, 5]) → 0

Solution
function countEvens(nums){
  return nums.filter(elem => elem % 2 === 0).length;
}
*/
// =============================================================================
/*
Array-2 -- bigDiff
Given an array length 1 or more of ints, return the difference between the largest and smallest values in the array. Note: the built-in Math.min(v1, v2) and Math.max(v1, v2) methods return the smaller or larger of two values.

Examples
bigDiff([10, 3, 5, 6]) → 7
bigDiff([7, 2, 10, 9]) → 8
bigDiff([2, 10, 7, 2]) → 8

Solution
function bigDiff(nums){
  nums = nums.sort((a,b) => a - b);
  return nums.at(-1) - nums.at(0);
}
*/
// =============================================================================
/*
Array-2 -- centeredAverage
Return the "centered" average of an array of ints, which we'll say is the mean average of the values, except ignoring the largest and smallest values in the array. If there are multiple copies of the smallest value, ignore just one copy, and likewise for the largest value. Use int division to produce the final average. You may assume that the array is length 3 or more.

Examples
centeredAverage([1, 2, 3, 4, 100]) → 3
centeredAverage([1, 1, 5, 5, 10, 8, 7]) → 5.2
centeredAverage([-10, -4, -2, -4, -2, 0]) → -3

Solution
function centeredAverage(nums){
  nums = nums.sort((a,b) => a - b));
  nums = nums.slice(1,nums.length-1);
  return nums.reduce((acc, elem) => acc += elem,0) / nums.length;
}
*/
// =============================================================================
/*
Array-2 -- sum13
Return the sum of the numbers in the array, returning 0 for an empty array. Except the number 13 is very unlucky, so it does not count and numbers that come immediately after a 13 also do not count.

Examples
sum13([1, 2, 2, 1]) → 6
sum13([1, 1]) → 2
sum13([1, 2, 2, 1, 13]) → 6

Solution
function sum13(nums){

  function cut13() {
    nums.splice(nums.indexOf(13),2);

    nums.includes(13) && cut13(nums);
  }
  nums.includes(13) && cut13();

  return nums.reduce((acc, elem) => acc += elem, 0);
}
*/
// =============================================================================
/*
Array-2 -- sum67
Return the sum of the numbers in the array, except ignore sections of numbers starting with a 6 and extending to the next 7 (every 6 will be followed by at least one 7). Return 0 for no numbers.

Examples
sum67([1, 2, 2]) → 5
sum67([1, 2, 2, 6, 99, 99, 7]) → 5
sum67([1, 1, 6, 7, 2]) → 4

Solution
function sum67(nums){
*1-solution
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 6 && nums.slice(i).includes(7)) {
      const index7 = nums.slice(i).indexOf(7);
      const dif = index7;

      nums.splice(i,dif+1);
    }
  }
  return nums.reduce((acc, elem) => acc += elem, 0);

  *2-solution

  function cutBetween67() {
    const index6 = nums.indexOf(6);
    const index7 = nums.slice(index6).indexOf(7);

    nums.splice(index6, index7+1);

    if(nums.includes(6) && nums.includes(7)) {
      cutBetween67();
    }
  }
  cutBetween67();
  return nums.reduce((acc, elem) => acc += elem, 0);
}
*/
// =============================================================================
/*
Array-2 -- has22
Given an array of ints, return true if the array contains a 2 next to a 2 somewhere.

Examples
has22([1, 2, 2]) → true
has22([1, 2, 1, 2]) → false
has22([2, 1, 2]) → false

Solution
function has22(nums){
  let state = nums[nums.indexOf(2) + 1] === 2;

  if(nums[nums.lastIndexOf(2) - 1] === 2 ||
    nums[nums.lastIndexOf(2) + 1] === 2) {
        state =  true;
   }

  return state;
}
*/
// =============================================================================
/*
Array-2 -- lucky13
Given an array of ints, return true if the array contains no 1's and no 3's.

Examples
lucky13([0, 2, 4]) → true
lucky13([1, 2, 3]) → false
lucky13([1, 2, 4]) → false

Solution
function lucky13(nums){
  return nums.every(elem => elem !== 1 && elem !== 3);
}
*/
// =============================================================================
/*
Array-2 -- sum28
Given an array of ints, return true if the sum of all the 2's in the array is exactly 8.

Examples
sum28([2, 3, 2, 2, 4, 2]) → true
sum28([2, 3, 2, 2, 4, 2, 2]) → false
sum28([1, 2, 3, 4]) → false

Solution
function sum28(nums){
  return nums.filter(elem => elem === 2).reduce((acc, elem) => acc += elem, 0) === 8;
}
*/
// =============================================================================
/*
Array-2 -- more14
Given an array of ints, return true if the number of 1's is greater than the number of 4's

Examples
more14([1, 4, 1]) → true
more14([1, 4, 1, 4]) → false
more14([1, 1]) → true

Solution
function more14(nums){
  return nums.filter(elem => elem === 1).length >
    nums.filter(elem => elem === 4).length;
}
*/
// =============================================================================
/*
Array-2 -- prependSum
Return a modified version of the input array (nums), where the first two items have been removed and one item – the sum of those two items - is added to the start of the array.

Examples
prependSum([1, 2, 4, 4]) → 3,4,4
prependSum([3, 3, 0]) → 6,0
prependSum([1, 1, 1, 1, 1]) → 2,1,1,1

Solution
function prependSum(nums){
  nums.splice(0,2, nums.at(0) + nums.at(1));
  return nums;
}
*/
// =============================================================================
/*
Array-2 -- fizzArray
Given a number n, create and return a new array of length n, containing the numbers 0, 1, 2, ... n-1. The given n may be 0, in which case just return a length 0 array. You do not need a separate if-statement for the length-0 case; the for-loop should naturally execute 0 times in that case, so it just works. The syntax to make a new array is let myArray = [];

Examples
fizzArray(4) → 0,1,2,3
fizzArray(1) → 0
fizzArray(10) → 0,1,2,3,4,5,6,7,8,9

Solution
function fizzArray(n){
  const arr = [];

  function createArr() {
    arr.unshift(n);
    if(n) {
      createArr(--n);
    }
  }
  createArr();
  return arr.slice(0,arr.length-1);
}
*/
// =============================================================================
/*
Array-2 -- only14
Given an array of ints, return true if every element is a 1 or a 4.

Examples
only14([1, 4, 1, 4]) → true
only14([1, 4, 2, 4]) → false
only14([1, 1]) → true

Solution
function only14(nums){
  return nums.every(elem => elem === 1 || elem === 4);
}
*/
// =============================================================================
/*
Array-2 -- fizzArray2
Given a number n, create and return a new string array of length n, containing the strings "0", "1" "2" .. through n-1. N may be 0, in which case just return a length 0 array. Note: String(xxx) will make the String form of most types.

Examples
fizzArray2(4) → 0,1,2,3
fizzArray2(10) → 0,1,2,3,4,5,6,7,8,9
fizzArray2(2) → 0,1

Solution
function fizzArray2(n){
const arr = [];

  function createArr() {
    arr.unshift(n);
    if(n) {
      createArr(--n);
    }
  }
  createArr();
  return arr.length === 1 ? [] : arr.slice(0,arr.length-1).join(' ').split(" ");
}
*/
// =============================================================================
/*
Array-2 -- no14
Given an array of ints, return true if it contains no 1's or it contains no 4's.

Examples
no14([1, 2, 3]) → true
no14([1, 2, 3, 4]) → false
no14([2, 3, 4]) → true

Solution
function no14(nums){
  return nums.includes(1) && nums.includes(4) ? false : true;
}
*/
// =============================================================================
/*
Array-2 -- isEverywhere
We'll say that a value is "everywhere" in an array if for every pair of adjacent elements in the array, at least one of the pair is that value. Return true if the given value is everywhere in the array.

Examples
isEverywhere([1, 2, 1, 3], 1) → true
isEverywhere([1, 2, 1, 3], 2) → false
isEverywhere([1, 2, 1, 3, 4], 1) → false


Solution
function isEverywhere(nums, val){
  const evens = nums.filter((_,index) => index % 2 === 0);
  const odds = nums.filter((_,index) => index % 2 !== 0);

  return odds.every(elem => elem === val) || evens.every(elem => elem == val);
}
*/
// =============================================================================
/*
Array-2 -- either24
Given an array of ints, return true if the array contains a 2 next to a 2 or a 4 next to a 4, but not both.

Examples
either24([1, 2, 2]) → true
either24([4, 4, 1]) → true
either24([4, 4, 1, 2, 2]) → false



Solution
function either24(nums){
  const state1 = nums[nums.indexOf(2) + 1] === 2 || nums[nums.lastIndexOf(2) - 1] === 2 || nums[nums.lastIndexOf(2) + 1] === 2;
  const state2 = nums[nums.indexOf(4) + 1] === 4 || nums[nums.lastIndexOf(4) - 1] === 4 || nums[nums.lastIndexOf(4) + 1] === 4;

  return state1 === state2 ? false : state1 || state2;
}
*/
// =============================================================================
/*
Array-2 -- matchUp
Given arrays nums1 and nums2 of the same length, for every element in nums1, consider the corresponding element in nums2 (at the same index). Return the count of the number of times that the two elements differ by 2 or less, but are not equal.

Examples
matchUp([1, 2, 3], [2, 3, 10]) → 2
matchUp([1, 2, 3], [2, 3, 5]) → 3
matchUp([1, 2, 3], [2, 3, 3]) → 3

Solution
function matchUp(a, b){
  let counter = 0;
  a.forEach((elem, index) => {
    if(Math.abs(elem - b[index]) <= 2) {
      counter += 1;
    }
  });
  return counter;
}
*/
// =============================================================================
/*
Array-2 -- has77
Given an array of ints, return true if the array contains two 7's next to each other, or there are two 7's separated by one element, such as with {7, 1, 7}.

Examples
has77([1, 7, 7]) → true
has77([1, 7, 1, 7]) → true
has77([1, 7, 1, 1, 7]) → false

Solution
function has77(nums){
  let state = false;

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 7 && (nums[i+1] === 7 || nums[i+2] === 7)) {
      state = true;
    }
  }
  return state;
}
*/
// =============================================================================
/*
Array-2 -- has12
Given an array of ints, return true if there is a 1 in the array with a 2 somewhere later in the array.

Examples
has12([1, 3, 2]) → true
has12([3, 1, 2]) → true
has12([3, 1, 4, 5, 2]) → true

Solution
function has12(nums){
  return nums.includes(1) && nums.slice(nums.indexOf(1)).includes(2);
}
*/
// =============================================================================
/*
Array-2 -- modThree
Given an array of ints, return true if the array contains either 3 even or 3 odd values all next to each other.

Examples
modThree([2, 1, 3, 5]) → true
modThree([2, 1, 2, 5]) → false
modThree([2, 4, 2, 5]) → true

Solution
function modThree(nums){
  const odds = [];
  const evens = [];

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] % 2 === 0 && nums[i+1] % 2 === 0) {
      evens.push(nums[i]);
    } else if(nums[i] % 2 !== 0 && nums[i+1] % 2 !== 0) {
      odds.push(nums[i]);
    }
  }
  return evens.length === 2 || odds.length === 3;
}
*/
// =============================================================================
/*
Array-2 -- findTheMedian
Write a method that returns the median value of an array. The input array will never be empty. If the array is odd in length, the median is the value in the centre of the array. If the array is even, the median should be the average of the two middle values. Hint: You will need to ensure the input array is sorted - there is a sort() array method you can use for this step.

Examples
findTheMedian([4,9,9,2,1,5]) → 5.5
findTheMedian([1, 5, 3, 1 , 5]) → 3
findTheMedian([10, 12, 15]) → 12

Solution
function findTheMedian(nums){
  const middle = nums.length % 2 !== 0 ?
        nums[Math.floor(nums.length / 2)] :
  (nums[Math.floor(nums.length / 2) - 1] + nums[nums.length/2]) / 2;

  return middle;
}
*/
// =============================================================================
/*
Array-2 -- haveThree
Given an array of ints, return true if the value 3 appears in the array exactly 3 times, and no 3's are next to each other.

Examples
haveThree([3, 1, 3, 1, 3]) → true
haveThree([3, 1, 3, 3]) → false
haveThree([3, 4, 3, 3, 4]) → false

Solution
function haveThree(nums){
  let counter = 0;
  nums.forEach((elem, index, arr) => elem === 3 && arr[index+1] !== 3 && counter++);
  return counter === 3;
}
*/
// =============================================================================
/*
Array-2 -- twoTwo
Given an array of ints, return true if every 2 that appears in the array is next to another 2.

Examples
twoTwo([4, 2, 2, 3]) → true
twoTwo([2, 2, 4]) → true
twoTwo([2, 2, 4, 2]) → false

Solution
function twoTwo(nums){
  const lastIndex2 = nums.lastIndexOf(2);

  return !nums.includes(2) ? true : nums[lastIndex2 - 1] === 2 || nums[lastIndex2 + 1] === 2;
}
*/
// =============================================================================
/*
Array-2 -- tripleUp
Return true if the array contains, somewhere, three increasing adjacent numbers like .... 4, 5, 6, ... or 23, 24, 25.

Examples
tripleUp([1, 4, 5, 6, 2]) → true
tripleUp([1, 2, 3]) → true
tripleUp([1, 2, 4]) → false

Solution
function tripleUp(nums){
  return nums.some((elem, index,arr) => arr[index+1] - elem === 1 && arr[index+2] - arr[index+1] === 1;
}
*/
// =============================================================================
/*
Array-2 -- fizzArray3
Given start and end numbers, return a new array containing the sequence of integers from start up to but not including end, so start=5 and end=10 yields {5, 6, 7, 8, 9}. The end number will be greater or equal to the start number. Note that a length-0 array is valid.

Examples
fizzArray3(5, 10) → 5,6,7,8,9
fizzArray3(11, 18) → 11,12,13,14,15,16,17
fizzArray3(1, 3) → 1,2

Solution
function fizzArray3(start, end){

  const newArr = [];
  end -= 1;

  function createArr() {
    if(end < start) {
      return newArr;
    } else {
      newArr.unshift(end);
      createArr(end--);
    }
  }
  createArr();
  return newArr;
}
*/
// =============================================================================
/*
Array-2 -- shiftLeft
Return an array that is "left shifted" by one -- so {6, 2, 5, 3} returns {2, 5, 3, 6}. You may modify and return the given array, or return a new array.

Examples

shiftLeft([6, 2, 5, 3]) → 2,5,3,6
shiftLeft([1, 2]) → 2,1
shiftLeft([1]) → 1

Solution
function shiftLeft(nums){
  return !nums.length ? [] : [...nums.splice(1,nums.length-1), nums.at(0)];
}
*/
// =============================================================================
/*
Array-2 -- pre4
Given a non-empty array of ints, return a new array containing the elements from the original array that come before the first 4 in the original array. The original array will contain at least one 4. Note that it is valid in java to create an array of length 0.

Examples
pre4([1, 2, 4, 1]) → 1,2
pre4([3, 1, 4]) → 3,1
pre4([1, 4, 4]) → 1

Solution
function pre4(nums){
  return nums.slice(0, nums.indexOf(4);
}
*/
// =============================================================================
/*
Array-2 -- post4
Given a non-empty array of ints, return a new array containing the elements from the original array that come after the last 4 in the original array. The original array will contain at least one 4. Note that it is valid in java to create an array of length 0.

Examples
post4([2, 4, 1, 2]) → 1,2
post4([4, 1, 4, 2]) → 2
post4([4, 4, 1, 2, 3]) → 1,2,3

Solution
function post4(nums){
 return nums.slice(nums.lastIndexOf(4)+1);
}
*/
// =============================================================================
/*
Array-2 -- notAlone
We'll say that an element in an array is "alone" if there are values before and after it, and those values are different from it. Return a version of the given array where every instance of the given value which is alone is replaced by whichever value to its left or right is larger.

Examples
notAlone([1, 2, 3], 2) → 1,3,3
notAlone([1, 2, 3, 2, 5, 2], 2) → 1,3,3,5,5,2
notAlone([3, 4], 3) → 3,4

Solution
function notAlone(nums, val){
  return nums.map((elem, index, arr) => {
    if(elem === val) {
      if(arr[index-1] && arr[index+1]) {
        if(elem !== arr[index-1] && elem !== arr[index+1]) {
          return arr[index+1] > arr[index-1] ? arr[index+1] : arr[index-1];
        } else return elem
      } else return elem;
    } else return elem;
  });
}
*/
// =============================================================================
/*
Array-2 -- zeroFront
Return an array that contains the exact same numbers as the given array, but rearranged so that all the zeros are grouped at the start of the array. The order of the non-zero numbers does not matter. So {1, 0, 0, 1} becomes {0 ,0, 1, 1}. You may modify and return the given array or make a new array.

Examples
zeroFront([1, 0, 0, 1]) → 0,0,1,1
zeroFront([0, 1, 1, 0, 1]) → 0,0,1,1,1
zeroFront([1, 0]) → 0,1

Solution
function zeroFront(nums){
  return nums.some(elem => elem < 0) ? nums.sort((a,b) => b - a) : nums.sort((a,b) => a - b);
}
*/
// =============================================================================
/*
Array-2 -- withoutTen
Return a version of the given array where all the 10's have been removed. The remaining elements should shift left towards the start of the array as needed, and the empty spaces a the end of the array should be 0. So {1, 10, 10, 2} yields {1, 2, 0, 0}. You may modify and return the given array or make a new array.

Examples
withoutTen([1, 10, 10, 2]) → 1,2,0,0
withoutTen([10, 2, 10]) → 2,0,0
withoutTen([1, 99, 10]) → 1,99,0

Solution
function withoutTen(nums){
  const only10s = nums.filter(elem => elem === 10);
  return [...nums.filter(elem => elem !== 10), ...only10s.fill(0)];
}
*/
// =============================================================================
/*
Array-2 -- zeroMax
Return a version of the given array where each zero value in the array is replaced by the largest odd value to the right of the zero in the array. If there is no odd value to the right of the zero, leave the zero as a zero.

Examples
zeroMax([0, 5, 0, 3]) → 5,5,3,3
zeroMax([0, 4, 0, 3]) → 3,4,3,3
zeroMax([0, 1, 0]) → 1,1,0

Solution
function zeroMax(nums){
  return nums.map((elem, index, arr) => {
    if(elem === 0) {
      const odds = arr.slice(index+1).filter(elem => elem % 2 !== 0);
      const maxOdd = Math.max(...odds);
      return maxOdd < 0 ? 0 : maxOdd;
    } else return elem;
  });
}
*/
// =============================================================================
/*
Array-2 -- evenOdd
Return an array that contains the exact same numbers as the given array, but rearranged so that all the even numbers come before all the odd numbers. Other than that, the numbers can be in any order. You may modify and return the given array, or make a new array.

Examples
evenOdd([1, 0, 1, 0, 0, 1, 1]) → 0,0,0,1,1,1,1
evenOdd([3, 3, 2]) → 2,3,3
evenOdd([2, 2, 2]) → 2,2,2

Solution
function evenOdd(nums){
  const evens = nums.filter(elem => elem % 2 === 0);
  const odds = nums.filter(elem => elem % 2 !== 0);
  return [...evens, ...odds];
}
*/
// =============================================================================
/*
Array-2 -- fizzBuzz
This is slightly more difficult version of the famous FizzBuzz problem which is sometimes given as a first problem for job interviews. Consider the series of numbers beginning at start and running up to but not including end, so for example start=1 and end=5 gives the series 1, 2, 3, 4. Return a new String[] array containing the string form of these numbers, except for multiples of 3, use "Fizz" instead of the number, for multiples of 5 use "Buzz", and for multiples of both 3 and 5 use "FizzBuzz". In Java, String.valueOf(xxx) will make the String form of an int or other type. This version is a little more complicated than the usual version since you have to allocate and index into an array instead of just printing, and we vary the start/end instead of just always doing 1..100.

Examples
fizzBuzz(1, 6) → 1,2,Fizz,4,Buzz
fizzBuzz(1, 8) → 1,2,Fizz,4,Buzz,Fizz,7
fizzBuzz(1, 11) → 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz

Solution
function fizzBuzz(start, end){
  const newArr = [];
  end -= 1;

  function createArr() {
    if(end === start) {
      newArr.unshift(start);
      return newArr;
    } else {
      if(end % 3 === 0) {
        newArr.unshift('Fizz');
      } else if(end % 5 === 0) {
        newArr.unshift('Buzz');
      } else if(end % 3 === 0 &&  end % 5 === 0) {
        newArr.unshift('FizzBuzz');
      } else newArr.unshift(end);
       end-=1;
      createArr();
    }
  }
  createArr();
  return newArr;
}
*/
// =============================================================================

