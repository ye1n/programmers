/**
 * 완주하지 못한 선수
 * participant: 참여 선수
 * completion: 완주한 선수
 *
 * 항상 1명의 선수만 완주하지 못함 단, 동명이인 존재
 */
function solution(participant, completion) {
  let answer = "";

  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    let element = participant[i];

    if (element !== completion[i]) {
      answer = element;
      break;
    }
  }

  return answer;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
