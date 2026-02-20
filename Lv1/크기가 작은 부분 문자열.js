/**
 * 크기가 작은 부분 문자열
 */
function solution(t, p) {
  let size = p.length;
  let answer = 0;

  for (let i = 0; i <= t.length - size; i++) {
    if (t.slice(i, i + size) <= p) answer++;
  }

  return answer;
}

console.log(solution("3141592", "271"));
