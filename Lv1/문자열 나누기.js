/**
 * 문자열 나누기
 */
function solution(s) {
  let answer = 0;
  let str = "";
  let thisStrCnt = 0;
  let diffStrCnt = 0;

  for (let i = 0; i < s.length; i++) {
    let thisStr = s[i];

    if (thisStrCnt === 0) {
      str = thisStr;
      thisStrCnt++;
    } else if (str === thisStr) {
      thisStrCnt++;
    } else if (str !== thisStr) {
      diffStrCnt++;
    }

    if (thisStrCnt === diffStrCnt || i === s.length - 1) {
      answer++;
      str = "";
      thisStrCnt = 0;
      diffStrCnt = 0;
    }
  }

  return answer;
}

console.log(solution("abracadabra", 6));
