/**
 * 최대공약수와 최소공배수
 */
function solution(n, m) {
  const getGcd = (n, m) => {
    let min = Math.min(n, m);
    let max = Math.max(n, m);
    let gcd = 0;

    for (let i = 1; i * i <= min; i++) {
      if (min % i === 0) {
        let pair = min / i;
        if (max % pair === 0) {
          gcd = pair;
          break;
        } else if (max % i === 0) gcd = i;
      }
    }

    return gcd;
  };

  const getLcm = () => {};

  return [getGcd(n, m), getLcm()];
}

console.log(solution(3, 12));
