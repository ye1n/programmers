/**
 * 하샤드 수
 */
function solution(x) {
  return (
    String(x) %
      String(x)
        .split("")
        .reduce((acc, v) => acc + Number(v), 0) ===
    0
  );
}

console.log(solution(10));
