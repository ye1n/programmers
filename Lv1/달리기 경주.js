/**
 * 달리기 경주
 */
function solution(players, callings) {
  const answer = [...players];
  const rank = new Map();

  for (let i = 0; i < answer.length; i++) {
    const x = answer[i];
    rank.set(x, i);
  }

  for (const x of callings) {
    let nextRank = rank.get(x);
    let prevRank = nextRank - 1;

    rank.set(answer[prevRank], nextRank);
    rank.set(answer[nextRank], prevRank);

    [answer[prevRank], answer[nextRank]] = [answer[nextRank], answer[prevRank]];
  }

  return answer;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"],
  ),
);
