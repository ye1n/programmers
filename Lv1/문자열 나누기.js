/**
 * 문자열 나누기
 */
function solution(s) {
  let answer = 0;
  let str = "";
  let ctn = 0;

  for (let i = 0; i < s.length; i++) {
    let thisStr = s[i];

    if (ctn === 0) {
      str = thisStr;
      ctn++;
    } else {
      ctn += str === thisStr ? 1 : -1;
    }

    if (ctn === 0 || i === s.length - 1) {
      answer++;
      str = "";
      ctn = 0;
    }
  }

  return answer;
}

console.log(solution("abracadabra", 6));
