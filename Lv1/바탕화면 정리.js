// 시작점(x최소값, y최소값) -> 끝점(x최대값+1, y최대값+1)

function solution(wallpaper) {
  var answer = []; // [0, 1, 3, 4]
  let minX = null;
  let minY = null;
  let maxX = null;
  let maxY = null;

  for (let i = 0; i < wallpaper.length; i++) {
    // x
    let oneLine = wallpaper[i];
    for (let j = 0; j < oneLine.length; j++) {
      // y
      if (oneLine[j] === "#") {
        if (minX > i || minX === null) minX = i;
        if (minY > j || minY === null) minY = j;
        if (maxX < i) maxX = i;
        if (maxY < j) maxY = j;
      }
    }
  }

  answer = [minX, minY, maxX + 1, maxY + 1];
  return answer;
}

console.log(solution([".#...", "..#..", "...#."]));
