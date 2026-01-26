/**
 * 소수 찾기
 */
function solution(n) {
  let isPrime = Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (!isPrime[i]) continue;

    for (let j = i * i; j <= n; j += i) {
      if (!isPrime[j]) continue;
      isPrime[j] = false;
    }
  }

  return isPrime.filter((v) => v).length;
}

console.log(solution(20));
