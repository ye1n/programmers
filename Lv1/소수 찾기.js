/**
 * 소수 찾기
 */
function solution(n) {
  let isPrime = Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  const isPrimeChk = (num) => {
    for (let i = 2; i * i <= num; i++) {
      if (isPrime[num] && num % i === 0) {
        isPrime[num] = false;
        break;
      }
    }
  };

  for (let i = 2; i <= n; i++) {
    isPrimeChk(i);
  }

  return isPrime.filter((v) => v).length;
}

console.log(solution(10));
