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

  m: for (let i = 0; i < w; i++) {
    const parkY = park[i].split("");
    for (let j = 0; j < parkY.length; j++) {
      const parkX = parkY[j];
      if (parkX === "S") {
        answer = [i, j];
        break m;
      }
    }
  }

  mm: for (let i = 0; i < routes.length; i++) {
    const route = routes[i].split(" ");

    let y = answer[0];
    let x = answer[1];
    let way = route[0];
    let street = Number(route[1]);

    for (let j = 0; j < street; j++) {
      if (way === "E") x += 1;
      else if (way === "W") x -= 1;
      else if (way === "S") y += 1;
      else if (way === "N") y -= 1;

      if (y < 0 || y >= h || x < 0 || x >= w || park[y].split("")[x] === "X") {
        continue mm;
      }
    }

    answer = [y, x];
  }

  return answer;
}

console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]));
