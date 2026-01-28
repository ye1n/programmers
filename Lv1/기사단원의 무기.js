/**
 * 기사단원의 무기
 */
function solution(number, limit, power) {
  let weight = 0;

  for (let i = 1; i <= number; i++) {
    let cnt = 0;

    for (let j = 1; j * j <= i; j++) {
      if (i % j === 0) {
        cnt++;

        if (j !== i / j) cnt++;
      }
    }

    weight += cnt > limit ? power : cnt;
  }

  return weight;
}

console.log(solution(10, 3, 2));
