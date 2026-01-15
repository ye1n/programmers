/**
 * 모의고사
 * 1번 수포자: 1, 2, 3, 4, 5 ...
 * 2번 수포자: 2, 1, 2, 3, 2, 4, 2, 5 ...
 * 3번 수포자: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 ...
 */
function solution(answers) {
  let answer = [];
  let maxScore = 0;
  let score = [0, 0, 0];

  let firstPattern = [1, 2, 3, 4, 5];
  let secondPattern = [2, 1, 2, 3, 2, 4, 2, 5];
  let thridPattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i];

    if (firstPattern[i % firstPattern.length] === answer) score[0]++;
    if (secondPattern[i % secondPattern.length] === answer) score[1]++;
    if (thridPattern[i % thridPattern.length] === answer) score[2]++;
  }

  maxScore = Math.max(...score);

  for (let i = 0; i < score.length; i++) {
    if (maxScore === score[i]) answer.push(i + 1);
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
