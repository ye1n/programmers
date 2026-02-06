/**
 * H-Index
 */
function solution(citations) {
  citations.sort((a, b) => b - a);
  let h = citations.length;

  for (h; h > 0; h--) {
    if (citations[h - 1] >= h) break;
  }

  return h;
}

console.log(solution([3, 0, 6, 1, 5]));
