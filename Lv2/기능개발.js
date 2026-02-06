/**
 * 기능개발
 */
function solution(progresses, speeds) {
  let requiredDates = progresses.map((p, i) =>
    Math.floor((100 - p) / speeds[i]),
  );
  let days = [];
  let max = 0;
  let cnt = 1;

  for (let i = 0; i < requiredDates.length; i++) {
    if (max === 0) max = requiredDates[i];
    else if (max > requiredDates[i]) cnt++;
    else if (max <= requiredDates[i]) {
      days.push(cnt);
      cnt = 1;
      max = requiredDates[i];

      if (i === requiredDates.length - 1) days.push(cnt);
    }
  }

  return days;
}

console.log(solution([93, 30, 55], [1, 30, 5]));

// 각 기능별 현재 작업 진도와 작업 속도를 받아 한 번의 배포마다 몇 개의 기능이 배포되는지 배열로 반환
// 단, 이전 기능의 배포가 완료되기 전에 다음 작업의 배포를 먼저할 수 없고 이전 작업이 완료될 때 한 번에 함께 배포된다

// 각 작업이 며칠씩 걸리는 작업인지 계산해서 순서대로 max 값 아래의 작업들을 한번에 배포, 반복
// 각 작업이 걸리는 시간 n = (100 - progresses[i]) / speeds[i] 7 / 2 = 3.4

// day를 돌면서 max를 저장하는데 저장한 max보다 큰값을 찾으면 새로운 max를 저장
