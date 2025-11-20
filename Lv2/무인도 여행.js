// X(바다) 또는 1~9(무인도, 식량 수)
// 상하좌우로 붙어있는 땅을 하나의 땅으로 침

// land === 땅
// island === 섬
function solution(maps) {
  let islandCount = 0; // 현재 삼 개수
  let lands = []; // [x값, y값, 식량, 섬번호][]
  var answer = []; // [1, 1, 27] 오름차순 정렬

  // 1. 땅의 좌표값만 저장한 새로운 배열 생성
  for (let i = 0; i < maps.length; i++) {
    let thisMapOneLine = maps[i].split("");
    for (let j = 0; j < thisMapOneLine.length; j++) {
      if (thisMapOneLine[j] === "X") continue; // 바다 제외
      lands.push([i, j, Number(thisMapOneLine[j]), 0]);
    }
  }
  console.log(lands);

  // 2. 땅 중에서 상/하/좌/우로 붙어있는 땅별로 섬번호 부여
  // i 땅을 기준으로 상하좌우에 있는 j의 [3] = i[3]으로 변경.. 만약
  outer: for (let i = 0; i < lands.length; i++) {
    let landI = lands[i];
    if (i === 0) landI[3] = ++islandCount;
    // 섬 별로 돌면서 지금 땅이 해당 섬의 땅과 상하좌우 하나라도 붙어있으면 현재 땅을 그 섬에 포함
    // 섬을 다 돌면서 0번째 섬들만, 1번째 섬들만, 2번째 섬들만 찾음
    for (let j = 0; j < lands.length; j++) {
      let landJ = lands[j];
      // [상]에 붙어있는가: x 좌표에서 -1, y 좌표 동일
      // [하]에 붙어있는가: x 좌표에서 +1, y 좌표 동일
      // [좌]에 붙어있는가: x 좌표 동일, y 좌표에서 -1
      // [우]에 붙어있는가: x 좌표 동일, y 좌표에서 +1
      if (
        (landI[0] === landJ[0] - 1 && landI[1] === landJ[1]) ||
        (landI[0] === landJ[0] + 1 && landI[1] === landJ[1]) ||
        (landI[0] === landJ[0] && landI[1] === landJ[1] - 1) ||
        (landI[0] === landJ[0] && landI[1] === landJ[1] + 1)
      ) {
        landJ[3] = landI[3];
      }
    }
    // 첫 땅이거나, 모든 섬을 다 돌았는데 붙어있는 땅이 없다면 새로운 땅 번호를 받음
    landI[3] = ++islandCount;
  }

  console.log(lands);

  // 3. 나눈 땅별로 숫자의 합계를 더하여 배열을 생성, 오름차순 정렬
  for (let j = 0; j < islandCount; j++) {
    let food = 0;
    lands.forEach((land) => {
      if (land[3] === j + 1) {
        food += land[2];
      }
    });
    answer.push(food);
  }

  return answer.length > 0 ? answer.sort() : [-1];
}

console.log(solution(["111", "X11", "111"]));
