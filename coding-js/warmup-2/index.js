// =============================================================================
/*
Warmup-2 -- stringTimes
Given a string and a non-negative int n, return a larger string that is n copies of the original string.

Examples
stringTimes('Hi', 2) → HiHi
stringTimes('Hi', 3) → HiHiHi
stringTimes('Hi', 1) → Hi

Solution
function stringTimes(str, n){
    return str.repeat(n);
}
*/
// =============================================================================
/*
Warmup-2 -- frontTimes
Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the front.

Examples
frontTimes('Chocolate', 2) → ChoCho
frontTimes('Chocolate', 3) → ChoChoCho
frontTimes('Abc', 3) → AbcAbcAbc

Solution
function frontTimes(str, n){
    return str.substr(0,3).repeat(n);
}
*/
// =============================================================================
/*
Warmup-2 -- countXX
Count the number of 'xx' in the given string. We'll say that overlapping is allowed, so 'xxx' contains 2 'xx'.

Examples
countXX('abcxx') → 1
countXX('xxx') → 2
countXX('xxxx') → 3

Solution
function countXX(str){
    let counter = 0;
    for(let i = 0; i < str.length; i++) {
    if(str[i] === 'x' && str[i+1] === 'x') counter++;
    }
    return counter;
}
*/
// =============================================================================
/*
Warmup-2 -- doubleX
Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".

Examples
doubleX('axxbb') → true
doubleX('axaxax') → false
doubleX('xxxxx') → true

Solution
function doubleX(str){
    return str[str.search('x') + 1] === 'x';
}
*/
// =============================================================================
/*
Warmup-2 -- stringBits
Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".

Examples
stringBits('Hello') → Hlo
stringBits('Hi') → H
stringBits('Heeololeo') → Hello

Solution
function stringBits(str){
    *1-solution
    return str.split('').filter((_,index) => index % 2 === 0).join('');

    *2-solution
    let newStr = '';
    for(let i = 0; i < str.length; i++) {
    if(i % 2 === 0) newStr += str[i];
    }
    return newStr;
}
*/
// =============================================================================
/*
Warmup-2 -- stringSplosion
Given a non-empty string like "Code" return a string like "CCoCodCode".

Solution
function stringSplosion(str){
    let newStr = '';
    for(let i = 0; i <= str.length; i++) {
    newStr += str.slice(0,i);
    }
    return newStr;
}
*/
// =============================================================================
/*
Warmup-2 -- last2
Given a string, return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring).

Examples
last2('hixxhi') → 1
last2('xaxxaxaxx') → 1
last2('axxaaxx') → 1

Solution
function last2(str){
    let counter = 0;
    for(let i = 0; i < str.length-2; i++) {
    if(str.slice(i,i+2) === str.slice(str.length-2)) counter++;
    }
    return counter;
}
*/
// =============================================================================
/*
Warmup-2 -- arrayCount9
Given an array of ints, return the number of 9's in the array.

Examples
arrayCount9([1,2,9]) → 1
arrayCount9([1,9,9]) → 2
arrayCount9([1,9,9,3,9]) → 3

Solution
function arrayCount9(nums){
    return nums.filter(elem => elem === 9).length;
}
*/
// =============================================================================
/*
Warmup-2 -- arrayFront9
Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.

Examples
arrayFront9([1,2,9,3,4]) → true
arrayFront9([1,2,3,4,9]) → false
arrayFront9([1,2,3,4,5]) → false

Solution
function arrayFront9(nums){
    return nums.slice(0,4).includes(9);
}
*/
// =============================================================================
/*
Warmup-2 -- array123
Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.

Solution
function array123(nums) {
    nums = nums.join('').replace('123', '+');
    return nums.includes('+');
}
*/
// =============================================================================
/*
Warmup-2 -- stringMatch
Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3, since the "xx" "xx", "aa", and "az" substrings appear in the same place in both strings.

Examples
stringMatch('xxcaazz', 'xxbaaz') → 3
stringMatch('abc', 'abc') → 2
stringMatch('abc', 'axc') → 0

Solution
function stringMatch(a, b){
    let newStr = '';
    for(let i = 0; i < a.length-1; i++) {
        if(a.substr(i,2) === b.substr(i,2)) {
            newStr += a.substr(i,2);
        }
    }
    return newStr.length / 2;
}
*/
// =============================================================================
/*
Warmup-2 -- stringX
Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed.

Examples
stringX('xxHxix') → xHix
stringX('abxxxcd') → abcd
stringX('xabxxxcdx') → xabcdx

Solution
function stringX(str){
  return (str.startsWith('x') && str.endsWith('x')) ?
    'x' + str.replaceAll('x', '') + 'x' : str.replaceAll('x', '');
}
*/
// =============================================================================
/*
Warmup-2 -- altPairs
Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".

Examples
altPairs('kitten') → kien
altPairs('Chocolate') → Chole
altPairs('CodingHorror') → Congrr

Solution
function altPairs(str){
    let newStr = '';
    for(let i = 0; i < str.length; i+=4) {
    newStr += str.substr(i,2);
    }
    return newStr;
}
*/
// =============================================================================
/*
Warmup-2 -- stringYak
Suppose the string "yak" is unlucky. Given a string, return a version where all the "yak" are removed, but the "a" can be any char. The "yak" strings will not overlap.

Examples
stringYak('yakpak') → pak
stringYak('pakyak') → pak
stringYak('yak123ya') → 123ya

Solution
function stringYak(str){
    *1-solution
    return str.replaceAll('yak', '');

    *2-solution
    let newStr = '';
    for(let i = 0; i < str.length; i++) {
    if(str[i] === 'y' && str[i+2] === 'k') i+=2;
    else newStr += str[i];
    }
    return newStr;
}
*/
// =============================================================================
/*
Warmup-2 -- array667
Given an array of ints, return the number of times that two 6's are next to each other in the array. Also count instances where the second "6" is actually a 7.

Examples
array667([6,6,2]) → 1
array667([6,6,2,6]) → 1
array667([6,7,2,6]) → 1

Solution
function array667(nums){
    let counter = 0;
    for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 6 &&
        (nums[i+1] === 6 || nums[i+1] === 7)) counter++;
    }
    return counter;
}
*/
// =============================================================================
/*
Warmup-2 -- noTriples
Given an array of ints, we'll say that a triple is a value appearing 3 times in a row in the array. Return true if the array does not contain any triples.

Examples
noTriples([1,1,2,2,1]) → true
noTriples([1,1,2,2,2,1]) → false
noTriples([1,1,2,2,2,1]) → false

Solution
function noTriples(nums){
    let state = false;
    for(let i = 0; i < nums.length; i++) {
    if(nums[i] === nums[i+1] && nums[i+1] === nums[i+2]) state = true;
    }
    return !state;
}
*/
// =============================================================================
/*
Warmup-2 -- has271
Given an array of ints, return true if it contains a 2, 7, 1 pattern -- a value, followed by the value plus 5, followed by the value minus 1. Additionally the 271 counts even if the "1" differs by 2 or less from the correct value.

Examples
has271([1,2,7,1]) → true
has271([1,2,8,1]) → false
has271([2,7,1]) → true


Solution
function has271(nums){
    return nums.join('').includes(271);
}
*/
// =============================================================================