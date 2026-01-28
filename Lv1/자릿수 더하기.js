/**
 * 자릿수 더하기
 */
function solution(n) {
  return String(n)
    .split("")
    .reduce((acc, v) => acc + Number(v), 0);
}

console.log(solution(123));
