/**
 * 소수 찾기
 */
function solution(n) {
  let answer = 0;

  const isPrime = (n) => {
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) answer++;
  }

  return answer;
}

console.log(solution(10));
