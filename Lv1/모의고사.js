/**
 * 모의고사
 * 1번 수포자: 1, 2, 3, 4, 5 ...
 * 2번 수포자: 2, 1, 2, 3, 2, 4, 2, 5 ...
 * 3번 수포자: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 ...
 */
function solution(answers) {
  let answer = [];
  let score = new Map([
    [1, 0],
    [2, 0],
    [3, 0],
  ]);
  let maxScore = 0;

  let firstPattern = [1, 2, 3, 4, 5];
  let firstAnswer = new Map();

  let secondPattern = [2, 1, 2, 3, 2, 4, 2, 5];
  let secondAnswer = new Map();

  let thridPattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let thridAnswer = new Map();

  const getAnswer = (answer, pattern) => {
    for (let i = 0; i < answers.length; i++) {
      answer.set(i, pattern[i % pattern.length]);
    }
  };

  getAnswer(firstAnswer, firstPattern);
  getAnswer(secondAnswer, secondPattern);
  getAnswer(thridAnswer, thridPattern);

  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i];
    if (firstAnswer.get(i) === answer) score.set(1, score.get(1) + 1);
    if (secondAnswer.get(i) === answer) score.set(2, score.get(2) + 1);
    if (thridAnswer.get(i) === answer) score.set(3, score.get(3) + 1);
  }

  // 최대값 산정
  for (const [key, value] of score) {
    if (maxScore < value) maxScore = value;
  }

  // 최대값 점수인 수포자 배열 추가
  for (const [key, value] of score) {
    if (maxScore === value) answer.push(key);
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
