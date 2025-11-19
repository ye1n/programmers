function solution(k, m, score) {
  var answer = 0;
  const sortedScore = score.sort((a, b) => b - a); // 내림차순 정렬

  for (let i = 0; i < Math.floor(sortedScore.length / m); i++) {
    let min = sortedScore[i * m + m - 1];
    answer += min * m;
  }

  return answer;
}

console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
