/**
 * 추억 점수
 */
function solution(name, yearning, photo) {
  let scores = new Map();
  let photoScore = [];

  for (let i = 0; i < name.length; i++) {
    scores.set(name[i], yearning[i]);
  }

  for (const onePhoto of photo) {
    let onePhotoScore = 0;

    for (const onePerson of onePhoto) {
      onePhotoScore += scores.get(onePerson) ?? 0;
    }

    photoScore.push(onePhotoScore);
  }

  return photoScore;
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ],
  ),
);
