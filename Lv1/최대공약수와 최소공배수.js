/**
 * 최대공약수와 최소공배수
 */
function solution(n, m) {
  // const gcd = (a, b) => {
  //   let min = Math.min(a, b);
  //   let max = Math.max(a, b);
  //   let cd = 0;

  //   for (let i = 1; i * i <= min; i++) {
  //     if (min % i === 0) {
  //       let pair = min / i;
  //       if (max % pair === 0) {
  //         cd = pair;
  //         break;
  //       } else if (max % i === 0) cd = i;
  //     }
  //   }

  //   return cd;
  // };

  // 유클리드 호재법
  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };

  const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
  };

  return [gcd(n, m), lcm(n, m)];
}

console.log(solution(3, 12));
