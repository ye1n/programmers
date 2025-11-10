function solution(X, Y) {
  // 같은 숫자를 찾으면 제거하며 공통 숫자를 찾음
  // 숫자를 내림차순 정렬하여 가장 큰 숫자로 만듬
  const x = X.split(""); // x = [ '5', '5', '2', '5' ]
  const y = Y.split(""); // y = [ '1', '2', '5', '5' ]
  const count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 0 ~ 9 까지 개수
  let numArr = []; // numArr = [5]
  let answer = "-1"; // answer = 552

  for (let i = 0; i < x.length; i++) {
    if (y.includes(x[i])) {
      numArr.push(x[i]);
      // count[x[i]] + 1
      let yIndex = y.indexOf(x[i]);
      y.splice(yIndex, 1);
    }
  }

  if (numArr.length) {
    let arr = numArr.sort((a, b) => b - a).join("");
    answer = arr > 0 ? arr : "0";
  }

  return answer;
}

console.log(solution("5525", "1255"));
