// =============================================================================
/*
Array-1 -- firstLast6
Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.

Examples
firstLast6([1, 2, 6]) → true
firstLast6([6, 1, 2, 3]) → true
firstLast6([13, 6, 1, 2, 3]) → false

Solution
function firstLast6(nums){
  return nums[0] === 6 || nums.at(-1) === 6;
}
*/
// =============================================================================
/*
Array-1 -- sameFirstLast
Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal.

Examples
sameFirstLast([1, 2, 3]) → false
sameFirstLast([1, 2, 3, 1]) → true
sameFirstLast([1, 2, 1]) → true

Solution
function sameFirstLast(nums){
  return nums.at(0) === nums.at(-1) && nums.length >= 1;
}
*/
// =============================================================================
/*
Array-1 -- commonEnd
Given 2 arrays of ints, a and b, return true if they have the same first element or they have the same last element. Both arrays will be length 1 or more.

Examples
commonEnd([1, 2, 3], [7, 3]) → true
commonEnd([1, 2, 3], [7, 3, 2]) → false
commonEnd([1, 2, 3], [1, 3]) → true

Solution
function commonEnd(a, b){
  return a.at(0) === b.at(0) || a.at(-1) === b.at(-1);
}
*/
// =============================================================================
/*
Array-1 -- sum3
Given an array of ints length 3, return the sum of all the elements.

Examples
sum3([1, 2, 3]) → 6
sum3([5, 11, 2]) → 18
sum3([7, 0, 0]) → 7

Solution
function sum3(nums){
  return nums.reduce((acc, elem) => acc += elem, 0);
}
*/
// =============================================================================
/*
Array-1 -- rotateLeft3
Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.

Examples
rotateLeft3([1, 2, 3]) → 2,3,1
rotateLeft3([5, 11, 9]) → 11,9,5
rotateLeft3([7, 0, 0]) → 0,0,7

Solution
function rotateLeft3(nums){
  return [...nums.slice(1,nums.length), nums.at(0)];
}
*/
// =============================================================================
/*
Array-1 -- reverse3
Given an array of ints length 3, return a new array with the elements in reverse order, so {1, 2, 3} becomes {3, 2, 1}.

Examples
reverse3([1, 2, 3]) → 3,2,1
reverse3([5, 11, 9]) → 9,11,5
reverse3([7, 0, 0]) → 0,0,7

Solution
function reverse3(nums){
  return nums.reverse();
}
*/
// =============================================================================
/*
Array-1 -- maxEnd3
Given an array of ints length 3, figure out which is larger, the first or last element in the array, and set all the other elements to be that value. Return the changed array.

Examples
maxEnd3([1, 2, 3]) → 3,3,3
maxEnd3([11, 5, 9]) → 11,11,11
maxEnd3([2, 11, 3]) → 3,3,3

Solution
function maxEnd3(nums){
  const larger = nums.at(0) > nums.at(-1) ? nums.at(0) : nums.at(-1);
  return Array.from({length:nums.length}).fill(larger);
}
*/
// =============================================================================
/*
Array-1 -- sum2
Given an array of ints, return the sum of the first 2 elements in the array. If the array length is less than 2, just sum up the elements that exist, returning 0 if the array is length 0.

Examples
sum2([1, 2, 3]) → 3
sum2([1, 1]) → 2
sum2([1, 1, 1, 1]) → 2

Solution
function sum2(nums){
  return nums.slice(0,2).reduce((acc, elem) => acc += elem,0);
}
*/
// =============================================================================
/*
Array-1 -- middleWay
Given 2 int arrays, a and b, each length 3, return a new array length 2 containing their middle elements.

Examples
middleWay([1, 2, 3], [4, 5, 6]) → 2,5
middleWay([7, 7, 7], [3, 8, 0]) → 7,8
middleWay([5, 2, 9], [1, 4, 5]) → 2,4

Solution
function middleWay(a, b){
  return [a.splice(a.length/2, 1), b.splice(b.length/2, 1)].flat(1);
}
*/
// =============================================================================
/*
Array-1 -- makeEnds
Given an array of ints, return a new array length 2 containing the first and last elements from the original array. The original array will be length 1 or more.

Examples
makeEnds([1, 2, 3]) → 1,3
makeEnds([1, 2, 3, 4]) → 1,4
makeEnds([7, 4, 6, 2]) → 7,2

Solution
function makeEnds(nums){
  return [nums[0], nums[nums.length-1]];
}
*/
// =============================================================================
/*
Array-1 -- has23
Given an int array length 2, return true if it contains a 2 or a 3.

Examples
has23([2, 5]) → true
has23([4, 3]) → true
has23([4, 5]) → false

Solution
function has23(nums){
  return nums.includes(2) || nums.includes(3);
}
*/
// =============================================================================
/*
Array-1 -- no23
Given an int array length 2, return true if it does not contain a 2 or 3.

Examples
no23([4, 5]) → true
no23([4, 2]) → false
no23([3, 5]) → false

Solution
function no23(nums){
  return nums.includes(2) || nums.includes(3) ? false : true;
}
*/
// =============================================================================
/*
Array-1 -- makeLast
Given an int array, return a new array with double the length where its last element is the same as the original array, and all the other elements are 0. The original array will be length 1 or more.

Examples
makeLast([4, 5, 6]) → 0,0,0,0,0,6
makeLast([1, 2]) → 0,0,0,2
makeLast([3]) → 0,3

Solution
function makeLast(nums){
  const newArr = [...nums, ...nums].fill(0).slice(0,-1);
  return [...newArr, nums.at(-1)];
}
*/
// =============================================================================
/*
Array-1 -- double23
Given an int array, return true if the array contains 2 twice, or 3 twice. The array will be length 0, 1, or 2.

Examples
double23([2, 2]) → true
double23([3, 3]) → true
double23([2, 3]) → false

Solution
function double23(nums){
  return nums.length <= 1 ? false : new Set(nums).size === 1;
}
*/
// =============================================================================
/*
Array-1 -- fix23
Given an int array length 3, if there is a 2 in the array immediately followed by a 3, set the 3 element to 0. Return the changed array.

Examples
fix23([1, 2, 3]) → 1,2,0
fix23([2, 3, 5]) → 2,0,5
fix23([1, 2, 1]) → 1,2,1

Solution
function fix23(nums){
  if(nums.includes(2) && nums.slice(nums.indexOf(2)).includes(3)) {
    nums[nums.indexOf(3)] = 0;
  } return nums;
}
*/
// =============================================================================
/*
Array-1 -- start1
Start with 2 int arrays, a and b, of any length. Return how many of the arrays have 1 as their first element.

Examples
start1([1, 2, 3], [1, 3]) → 2
start1([7, 2, 3], [1]) → 1
start1([1, 2], []) → 1

Solution
function start1(a, b){
  return a.filter(elem => elem === 1).length + b.filter(elem => elem === 1).length;
}
*/
// =============================================================================
/*
Array-1 -- biggerTwo
Start with 2 int arrays, a and b, each length 2. Consider the sum of the values in each array. Return the array which has the largest sum. In event of a tie, return a.

Examples
biggerTwo([1, 2], [3, 4]) → 3,4
biggerTwo([3, 4], [1, 2]) → 3,4
biggerTwo([1, 1], [1, 2]) → 1,2

Solution
function biggerTwo(a, b){
  const aSum = eval(a.join('+'));
  const bSum = eval(b.join('+'));
  return aSum === bSum ? a : aSum > bSum ? a : b;
}
*/
// =============================================================================
/*
Array-1 -- makeMiddle
Given an array of ints of even length, return a new array length 2 containing the middle two elements from the original array. The original array will be length 2 or more.

Examples
makeMiddle([1, 2, 3, 4]) → 2,3
makeMiddle([7, 1, 2, 3, 4, 9]) → 2,3
makeMiddle([1, 2]) → 1,2

Solution
function makeMiddle(nums){
  return nums.splice(nums.length / 2 - 1, 2);
}
*/
// =============================================================================
/*
Array-1 -- plusTwo
Given 2 int arrays, each length 2, return a new array length 4 containing all their elements.

Examples
plusTwo([1, 2], [3, 4]) → 1,2,3,4
plusTwo([4, 4], [2, 2]) → 4,4,2,2
plusTwo([9, 2], [3, 4]) → 9,2,3,4

Solution
function plusTwo(a, b){
  return a.concat(b);
}
*/
// =============================================================================
/*
Array-1 -- swapEnds
Given an array of ints, swap the first and last elements in the array. Return the modified array. The array length will be at least 1.

Examples
swapEnds([1, 2, 3, 4]) → 4,2,3,1
swapEnds([1, 2, 3]) → 3,2,1
swapEnds([8, 6, 7, 9, 5]) → 5,6,7,9,8

Solution
function swapEnds(nums){
 return nums.length === 1 ? nums : [nums.at(-1), ...nums.slice(1,nums.length-1), nums.at(0)];
}
*/
// =============================================================================
/*
Array-1 -- midThree
Given an array of ints of odd length, return a new array length 3 containing the elements from the middle of the array. The array length will be at least 3.

Examples
midThree([1, 2, 3, 4, 5]) → 2,3,4
midThree([8, 6, 7, 5, 3, 0, 9]) → 7,5,3
midThree([1, 2, 3]) → 1,2,3

Solution
function midThree(nums){
  return nums.slice(Math.ceil(nums.length / 2 - 1) - 1, Math.ceil(nums.length/2+1);
}
*/
// =============================================================================
/*
Array-1 -- maxTriple
Given an array of ints of odd length, look at the first, last, and middle values in the array and return the largest. The array length will be a least 1.

Examples
maxTriple([1, 2, 3]) → 3
maxTriple([1, 5, 3]) → 5
maxTriple([5, 2, 3]) → 5

Solution
function maxTriple(nums){
  return Math.max(nums.at(0), nums.at(-1), nums[Math.floor(nums.length / 2)]);
}
*/
// =============================================================================
/*
Array-1 -- frontPiece
Given an int array of any length, return a new array of its first 2 elements. If the array is smaller than length 2, use whatever elements are present.

Examples
frontPiece([1, 2, 3]) → 1,2
frontPiece([1, 2]) → 1,2
frontPiece([1]) → 1

Solution
function frontPiece(nums){
  return nums.splice(0,2);
}
*/
// =============================================================================
/*
Array-1 -- unlucky1
We'll say that a 1 immediately followed by a 3 in an array is an "unlucky" 1. Return true if the given array contains an unlucky 1 in the first 2 or last 2 positions in the array.

Examples
unlucky1([1, 3, 4, 5]) → true
unlucky1([2, 1, 3, 4, 5]) → true
unlucky1([1, 1, 1]) → false

Solution
function unlucky1(nums){
  const lastIndex = nums.lastIndexOf(1);
  return nums[lastIndex+1] === 3;
}
*/
// =============================================================================
/*
Array-1 -- make2
Given 2 int arrays, a and b, return a new array length 2 containing, as much as will fit, the elements from a followed by the elements from b. The arrays may be any length, including 0, but there will be 2 or more elements available between the 2 arrays.

Examples
make2([4, 5], [1, 2, 3]) → 4,5
make2([4], [1, 2, 3]) → 4,1
make2([], [1, 2]) → 1,2

Solution
function make2(a, b){
  return a.length >= 2 ? a.slice(0,2) : a.length === 1 ? a.concat(b.slice(0,1)) : b.slice(0,2);
}
*/
// =============================================================================
/*
Array-1 -- front11
Given 2 int arrays, a and b, of any length, return a new array with the first element of each array. If either array is length 0, ignore that array.

Examples
front11([1, 2, 3], [7, 9, 8]) → 1,7
front11([1], [2]) → 1,2
front11([1, 7], []) → 1

Solution
function front11(a, b){
  return [a.at(0), b.at(0)].filter(elem => elem);
}
*/
// =============================================================================