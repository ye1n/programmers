/**
 * 정수 내림차순으로 배치하기
 */
function solution(n) {
  return Number(
    String(n)
      .split("")
      .map((v) => Number(v))
      .sort((a, b) => b - a)
      .join(""),
  );
}

console.log(solution(118372));
