/**
 * H-Index
 */
function solution(citations) {
  let h = citations.length;

  for (h; h > -1; h--) {
    if (citations.filter((c) => c >= h).length >= h) break;
  }

  return h;
}

console.log(solution([3, 0, 6, 1, 5]));
