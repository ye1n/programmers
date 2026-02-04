/**
 * 구명보트
 */
function solution(people, limit) {
  let left = 0;
  let right = people.length - 1;
  let boats = 0;

  people.sort((a, b) => a - b);

  for (right; left <= right; right--) {
    if (people[left] + people[right] <= limit) left++;
    boats++;
  }

  return boats;
}

console.log(solution([70, 80, 50], 100));
