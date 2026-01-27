/**
 * 폰켓몬
 */
function solution(nums) {
  let canPick = nums.length / 2;
  let kinds = new Set(nums).size;

  return canPick <= kinds ? canPick : kinds;
}

console.log(solution([3, 1, 2, 3]));
