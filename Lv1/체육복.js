/**
 * 체육복
 */
function solution(n, lost, reserve) {
  let lostIndex = new Set(lost.sort());
  let reserveIndex = new Set(reserve.sort());

  for (const i of lostIndex) {
    if (reserveIndex.has(i)) {
      reserveIndex.delete(i);
      lostIndex.delete(i);
    }
  }

  for (const i of lostIndex) {
    if (reserveIndex.has(i - 1)) {
      reserveIndex.delete(i - 1);
      lostIndex.delete(i);
    } else if (reserveIndex.has(i + 1)) {
      reserveIndex.delete(i + 1);
      lostIndex.delete(i);
    }
  }

  return (n -= lostIndex.size);
}

console.log(solution(5, [2, 3], [3, 4]));
