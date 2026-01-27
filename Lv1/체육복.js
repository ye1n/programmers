/**
 * 체육복
 */
function solution(n, lost, reserve) {
  let answer = n;
  let lostIndex = new Set(lost.sort());
  let reserveIndex = new Set(reserve.sort());

  for (const index of lostIndex) {
    if (reserveIndex.has(index)) {
      reserveIndex.delete(index);
      lostIndex.delete(index);
    } else if (reserveIndex.has(index - 1)) {
      reserveIndex.delete(index - 1);
      lostIndex.delete(index);
    } else if (reserveIndex.has(index + 1)) {
      reserveIndex.delete(index + 1);
      lostIndex.delete(index);
    }
  }

  answer -= lostIndex.size;

  return answer;
}

console.log(solution(5, [2, 3], [3, 4])); // 4
