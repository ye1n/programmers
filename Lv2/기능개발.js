/**
 * 기능개발
 */
function solution(progresses, speeds) {
  let dates = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
  let days = [];
  let cnt = 0;
  let max = dates[0];

  for (const date of dates) {
    if (max >= date) {
      cnt++;
    } else if (max < date) {
      days.push(cnt);
      cnt = 1;
      max = date;
    }
  }

  days.push(cnt);

  return days;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
