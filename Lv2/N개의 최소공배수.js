/**
 * N개의 최소공배수
 */
function solution(arr) {
  let newArr = arr.sort((a, b) => a - b);
  let max = newArr.pop();
  let num;

  for (let i = 1; ; i++) {
    num = max * i;
    let find = true;

    for (let j = 0; j < newArr.length; j++) {
      if (num % newArr[j] !== 0) {
        find = false;
        break;
      }
    }

    if (find) break;
  }

  return num;
}

console.log(solution([2, 6, 8, 14]));
