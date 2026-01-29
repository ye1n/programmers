/**
 * 같은 숫자는 싫어
 */
function solution(arr) {
  let newArr = [];

  for (const n of arr) {
    if (newArr[newArr.length - 1] !== n) newArr.push(n);
  }

  [...arr].filter((n, i) => newArr[i - 1] != n);

  return newArr;
  // return [...arr].filter((n, i) => n !== arr[i - 1]);
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
