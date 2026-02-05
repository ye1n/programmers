/**
 * 의상
 */
function solution(clothes) {
  let cnt = clothes.length;
  let kinds = new Map();

  for (const item of clothes) {
    kinds.set(item[1], (kinds.get(item[1]) || 0) + 1);
  }

  kinds = [...kinds.values()];

  for (let i = 1; i < kinds.length; i++) {
    for (let j = 0; j < kinds.length; j++) {
      let m = kinds[j];
      for (let k = j + 1; k < i + 1; k++) {
        m *= kinds[k];
        console.log(i, j, k);
      }
      cnt += m;
    }
  }

  return cnt;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ]),
);

// 코니가 가진 의상으로 가능한 조합의 수를 계산
// 단, 하루에 최소 한 개 이상의 의상을 입고 같은 종류에서는 최대 1개만 가능
