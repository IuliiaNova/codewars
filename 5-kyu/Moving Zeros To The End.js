/*
Description:
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

const moveZeros = arr =>
  arr.reduceRight(
    (acc, val) => (val === 0 ? [...acc, val] : [val, ...acc]),
    []
  );

let moveZero = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}

let moveZer = function (arr) {
  var filtedList = arr.filter(function (num){return num !== 0;});
  var zeroList = arr.filter(function (num){return num === 0;});
  return filtedList.concat(zeroList);
}

let moveZe = function (arr) {
  return [
    ...(arr.filter(n => n !== 0)),
    ...(arr.filter(n => n === 0))
  ];
}

let moveZ = function (arr) {
  return arr
    .filter((val) => val !== 0)
    .concat(arr.filter((val) => val === 0));
}

let movZero = function (arr) {
  for(var i = arr.length - 1; i >= 0; i--) {
    if(arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }
  return arr;
}