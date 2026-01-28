/**
 * 기사단원의 무기
 */
function solution(number, limit, power) {
  let weight = 0;

  for (let i = 1; i <= number; i++) {
    let cnt = new Set();

    for (let j = 1; j * j <= i; j++) {
      if (i % j === 0) {
        cnt.add(j);
        cnt.add(i / j);
      }
    }

    weight += cnt.size > limit ? power : cnt.size;
  }

  return weight;
}

console.log(solution(10, 3, 2));
