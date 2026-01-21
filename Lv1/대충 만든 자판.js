/**
 * 대충 만든 자판
 */
function solution(keymap, targets) {
  let answer = [];
  let keys = new Map();

  for (const key of keymap) {
    for (let j = 0; j < key.length; j++) {
      let char = key[j];
      if (!keys.has(char) || keys.get(char) > j) {
        keys.set(char, j);
      }
    }
  }

  for (const target of targets) {
    let cnt = 0;
    for (const char of target) {
      if (!keys.has(char)) {
        cnt = -1;
        break;
      }
      cnt += keys.get(char) + 1;
    }
    answer.push(cnt);
  }

  return answer;
}

console.log(solution(["ABACD", "BCEFD"], ["AFU"]));
