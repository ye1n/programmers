/**
 * 같은 숫자는 싫어
 */
function solution(arr) {
  return arr.filter((n, i) => n !== arr[i - 1]);
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
