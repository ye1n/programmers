/**
 * 공원 산책
 *
 * park: ["", ...]
 * S : 시작 지점
 * O : 이동 가능한 통로
 * X : 장애물
 * routes: ["방향 거리", ...]
 *
 * answer: [세로 방향 좌표, 가로 방향 좌표]
 */
function solution(park, routes) {
  let answer = [];
  let w = park[0].length;
  let h = park.length;
  let dir = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };

  const findStart = () => {
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        if (park[i][j] === "S") return [i, j];
      }
    }
  };

  answer = findStart();

  const moveRoute = (answer, route) => {
    let [y, x] = answer;
    let [way, street] = route.split(" ");

    for (let j = 0; j < Number(street); j++) {
      let [dirY, dirX] = dir[way];
      // [y, x] = [y + dirY, x + dirX];
      y += dirY;
      x += dirX;

      if (y < 0 || y >= h || x < 0 || x >= w || park[y][x] === "X") {
        return;
      }
    }

    return [y, x];
  };

  for (const route of routes) {
    let newRoute = moveRoute(answer, route);
    if (newRoute) answer = newRoute;
  }

  return answer;
}

console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]));
