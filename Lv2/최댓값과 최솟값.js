/**
 * 최댓값과 최솟값
 */
function solution(s) {
  let strArr = s.split(" ").map((s) => Number(s));
  return `${Math.min(...strArr)} ${Math.max(...strArr)}`;
}

console.log(solution("1 2 3 4"));
