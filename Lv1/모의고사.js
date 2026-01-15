/**
 * 모의고사
 * 1번 수포자: 1, 2, 3, 4, 5 ...
 * 2번 수포자: 2, 1, 2, 3, 2, 4, 2, 5 ...
 * 3번 수포자: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 ...
 */
function solution(answers) {
  let answer = [];
  let patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let score = Array(patterns.length).fill(0);

  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < patterns.length; j++) {
      if (patterns[j][i % patterns[j].length] === answers[i]) score[j]++;
    }
  }

  let maxScore = Math.max(...score);

  for (let i = 0; i < score.length; i++) {
    if (maxScore === score[i]) answer.push(i + 1);
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
