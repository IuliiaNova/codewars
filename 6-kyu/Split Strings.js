/*
Description:
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
Examples:
solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
*/

function solution(str) {
    let arr = [];
    for (let i = 0; i < str.split("").length; i += 2) {
      arr.push(str.slice(i, i + 2));
    }
  
    return arr.map(v => (v.length === 1 ? v + "_" : v));
  }

  function solution(str){
    var i = 0;
    var result = new Array();
    if (str.length % 2 !== 0) {
      str = str + '_';
    }
    while (i < str.length) {
        result.push(str[i] + str[i+1]);
        i += 2;
      }
    return result;
  }

  const solution = str => ((str+"_").match(/../g)||[]);


  function solution(str) {
    str.length % 2 && (str += "_");
    return str.match(/.{1,2}/g) || [];
}