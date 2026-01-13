/**
 * 달리기 경주
 * @param {*} players
 * @param {*} callings
 * @returns
 */
function solution(players, callings) {
  const answer = [...players];
  const rank = new Map(); // 등수 저장

  // Map(5) { 'mumu' => 0, 'soe' => 1, 'poe' => 2, 'kai' => 3, 'mine' => 4 }
  // [ 'mumu', 'soe', 'poe', 'kai', 'mine' ]
  for (let i = 0; i < answer.length; i++) {
    const x = answer[i];
    rank.set(x, i);
  }

  // ["kai", "kai", "mine", "mine"]
  for (const x of callings) {
    // x = 'kai'
    let nextRank = rank.get(x); // 3
    let prevRank = nextRank - 1; // 2

    // Map(5) { 'mumu' => 0, 'soe' => 1, 'poe' => 3, 'kai' => 2, 'mine' => 4 }
    rank.set(answer[prevRank], nextRank);
    rank.set(answer[nextRank], prevRank);

    // [ 'mumu', 'soe', 'kai', 'poe', 'mine' ]
    [answer[prevRank], answer[nextRank]] = [answer[nextRank], answer[prevRank]];
  }

  return answer;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
);
