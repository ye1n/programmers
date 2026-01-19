/**
 * 2016년
 * 2016년 1월 1일 금요일
 *
 * 기본 월별 날짜
 * 1월 - 31일
 * 2월 - 28일 (윤년은 29일)
 * 3월 - 31일
 * 4월 - 30일
 * 5월 - 31일
 * 6월 - 30일
 * 7월 - 31일
 * 8월 - 31일
 * 9월 - 30일
 * 10월 - 31일
 * 11월 - 30일
 * 12월 - 31일
 *
 * 윤년의 조건
 * - 4로 나눠 떨어지면서 100으로 나눠 떨어지지 않는 해
 * - 400으로 나눠 떨어지는 해
 * - 2012, 2016, 2020, 2024, 2028 ...
 */
function solution(a, b) {
  let year = 2016;
  let month = a;
  let day = b;
  let daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let answer = "";

  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  const countDays = (month) => {
    if ([1, 3, 5, 7, 8, 10, 12].filter((m) => m === month).length) return 31;
    else if ([4, 6, 9, 11].filter((m) => m === month).length) return 30;
    else if (month === 2 && isLeapYear(year)) return 29;
    else return 28;
  };

  const findDayOfWeek = (month) => {
    let dayOfWeek = 5;
    for (let i = 1; i <= 12; i++) {
      for (let j = 1; j <= countDays(i); j++) {
        if (i === month && j === day) return daysOfWeek[dayOfWeek];
        dayOfWeek = (dayOfWeek + 1) % 7;
      }
    }
  };

  answer = findDayOfWeek(month);

  return answer;
}

console.log(solution(5, 24));
