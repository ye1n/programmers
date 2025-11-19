function solution(X, Y) {
  const x = X.split(""); // [ '5', '5', '2', '5' ]
  const y = Y.split(""); // [ '1', '2', '5', '5' ]
  const xCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const yCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const resultCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let answer = ""; // 552

  for (let i = 0; i < x.length; i++) {
    xCount[x[i]]++;
  }

  for (let i = 0; i < y.length; i++) {
    yCount[y[i]]++;
  }

  for (let i = 0; i < 10; i++) {
    if (xCount[i] > 0 && yCount[i] > 0) {
      if (xCount[i] >= yCount[i]) {
        resultCount[i] += yCount[i];
      } else {
        resultCount[i] += xCount[i];
      }
    }
  }

  for (let i = 10; i >= 0; i--) {
    if (resultCount[i] > 0) {
      answer += String(i).repeat(resultCount[i]);
    }
  }

  return answer === "" ? "-1" : Number(answer) === 0 ? "0" : answer;
}

console.log(solution("5525", "1255"));
