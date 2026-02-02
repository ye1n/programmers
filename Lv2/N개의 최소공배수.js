/**
 * N개의 최소공배수
 */
function solution(arr) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);

  return arr.reduce((acc, cur) => lcm(acc, cur));
}

console.log(solution([2, 6, 8, 14]));
