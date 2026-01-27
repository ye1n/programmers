/**
 * 덧칠하기
 */
function solution(n, m, section) {
  let answer = 0;
  let currentIndex = 0;

  for (const nextWall of section) {
    if (currentIndex <= nextWall) {
      currentIndex = nextWall + m;
      answer++;
    }
  }

  return answer;
}

console.log(solution(8, 4, [2, 3, 6]));
