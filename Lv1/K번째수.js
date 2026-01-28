/**
 * K번째수
 */
function solution(array, commands) {
  let answer = [];

  for (const command of commands) {
    let start = command[0] - 1;
    let end = command[1];
    let index = command[2] - 1;

    answer.push(array.slice(start, end).sort((a, b) => a - b)[index]);
  }

  return answer;
}

console.log(solution([10, 2], [[1, 2, 1]]));
