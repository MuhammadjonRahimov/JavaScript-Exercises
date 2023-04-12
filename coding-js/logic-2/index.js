// =============================================================================
/*
Logic-2 -- loneSum
Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.

Examples
loneSum(1, 2, 3) → 6
loneSum(3, 2, 3) → 2
loneSum(3, 3, 3) → 0


Solution
function loneSum(a, b, c){
    const arr = Array.from(arguments).sort((a,b) => a - b);
    const unique = Array.from(new Set(arr));
    const filtered = arr.filter(elem => elem === arr[0]);

    if(unique.length === arguments.length) {
        return unique.reduce((acc, elem) => acc += elem, 0);
    } else if (unique.length === 1) {
        return 0;
    } else if(filtered.length === 1) {
        return filtered[0];
    } else {
        return arr.filter(elem => !filtered.includes(elem))[0];
    }
}
*/
// =============================================================================
/*
Logic-2 -- luckySum
Given 3 int values, a b c, return their sum. However, if one of the values is 13 then it does not count towards the sum and values to its right do not count. So for example, if b is 13, then both b and c do not count.

Examples
luckySum(1, 2, 3) → 6
luckySum(1, 2, 13) → 3
luckySum(1, 13, 3) → 1

Solution
function luckySum(a, b, c){
  let arr = Array.from(arguments);

  function remove13(arr) {
    if(arr.includes(13)) {
      if(arr[arr.indexOf(13)+1] === 13) {
        arr.splice(arr.indexOf(13),3);
      } else {
        arr.splice(arr.indexOf(13),2)
      }
    }
    if(arr.includes(13)) {
      remove13(arr);
    } else return arr;
  }
  return remove13(arr) ? arr.reduce((acc, elem) => acc += elem, 0) : 0;
}
*/
// =============================================================================
/*
Logic-2 -- noTeenSum
Given 3 int values, a b c, return their sum. However, if any of the values is a teen -- in the range 13..19 inclusive -- then that value counts as 0, except 15 and 16 do not count as a teens. Write a separate helper "public int fixTeen(int n) {"that takes in an int value and returns that value fixed for the teen rule. In this way, you avoid repeating the teen code 3 times (i.e. "decomposition"). Define the helper below and at the same indent level as the main noTeenSum().

Examples
noTeenSum(1, 2, 3) → 6
noTeenSum(2, 13, 1) → 3
noTeenSum(2, 1, 14) → 3

Solution
function noTeenSum(a, b, c){
  const arr = Array.from(arguments);
  let newArr = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] >= 13 && arr[i] <= 19) {
      if(arr[i] === 15 || arr[i] === 16) {
        newArr.push(arr[i])
      } else continue;
    } else newArr.push(arr[i]);
  }
  return newArr.reduce((acc, elem) => acc += elem, 0);
}
*/
// =============================================================================
/*
Logic-2 -- roundSum
For this problem, we'll round an int value up to the next multiple of 10 if its rightmost digit is 5 or more, so 15 rounds up to 20. Alternately, round down to the previous multiple of 10 if its rightmost digit is less than 5, so 12 rounds down to 10. Given 3 ints, a b c, return the sum of their rounded values. To avoid code repetition, write a separate helper "public int round10(int num) {" and call it 3 times. Write the helper entirely below and at the same indent level as roundSum().

Examples
roundSum(16, 17, 18) → 60
roundSum(12, 13, 14) → 30
roundSum(6, 4, 4) → 10

Solution
function roundSum(a, b, c){
    function stringifyEach(par) {
    return [par].join(' ');
    }
    const aToStr = stringifyEach(a);
    const bToStr = stringifyEach(b);
    const cToStr = stringifyEach(c);

    function sumSingPar(par) {
        let sum = 0;
        if(par.length === 1) {
            sum += par.at(-1) >= 5 ? 10 : 0;
        } else {
            sum += par.at(-1) >= 5 ? par - par.at(-1) + 10 : par - par.at(-1);
        }
        return sum;
    }
    return sumSingPar(aToStr) + sumSingPar(bToStr) + sumSingPar(cToStr);
}
*/
// =============================================================================
/*
Logic-2 -- closeFar
Given three ints, a b c, return true if one of b or c is "close" (differing from a by at most 1), while the other is "far", differing from both other values by 2 or more. Note: Math.abs(num) computes the absolute value of a number.

Examples
closeFar(1, 2, 10) → true
closeFar(1, 2, 3) → false
closeFar(4, 1, 3) → true

Solution
function closeFar(a, b, c){
  if(Math.abs(b - a) <= 1) {
    return Math.abs(c - b) >= 2 && Math.abs(c - a) >= 2;
  } else if (Math.abs(c - a) <= 1) {
    return Math.abs(b - c)  >= 2 && Math.abs(b - a) >= 2;
  }
}
*/
// =============================================================================
/*
Logic-2 -- blackjack
Given 2 int values greater than 0, return whichever value is nearest to 21 without going over. Return 0 if they both go over.

Examples
blackjack(19, 21) → 21
blackjack(21, 19) → 21
blackjack(19, 22) → 19

Solution
function blackjack(a, b){
  if( a > 21 && b > 21) {
    return 0;
  } else if(a > 21 && b < 21) {
    return b;
  } else if(b > 21 && a < 21) {
    return a
  } else {
    return Math.abs(a - 21) > Math.abs(b - 21) ? b : a;
  }
}
*/
// =============================================================================
/*
Logic-2 -- evenlySpaced
Given three ints, a b c, one of them is small, one is medium and one is large. Return true if the three values are evenly spaced, so the difference between small and medium is the same as the difference between medium and large.

Examples
evenlySpaced(2, 4, 6) → true
evenlySpaced(4, 6, 2) → true
evenlySpaced(4, 6, 3) → false

Solution
function evenlySpaced(a, b, c){
  const arr = Array.from(arguments).sort((a,b) => a - b);
  let state;
  for(let i = 1; i < arr.length-1; i++) {
    if(arr[i] - arr[i-1]  === arr[i+1] - arr[i]) {
        state = true;
      } else {
        state = false;
       break;
    }
  }
  return state;
}
*/
// =============================================================================
/*
Logic-2 -- makeChocolate
We want make a package of goal kilos of chocolate. We have small bars (1 kilo each) and big bars (5 kilos each). Return the number of small bars to use, assuming we always use big bars before small bars. Return -1 if it can't be done.

Examples
makeChocolate(4, 1, 9) → 4
makeChocolate(4, 1, 10) → -1
makeChocolate(4, 1, 7) → 2

Solution
function makeChocolate(small, big, goal){
  const newBig = big * 5;

  if(goal === 5 || goal === newBig && big >= 1) {
    return 0;
  } else if(goal > newBig && goal <= newBig + small) {
    return goal - newBig;
  } else if (goal > 5 && goal < newBig && goal < 10) {
    const remainder = goal - 5;
    const remainderFromSmall = small - quote;
    return small === quote ? small : small - quoteFromSmall;
  } else if (small >= goal) {
    return goal;
  } else if(newBig + small < goal) {
    return -1;
  }
}
*/
// =============================================================================