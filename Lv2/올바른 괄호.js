function solution(s) {
  var answer = true;
  var sArr = s.split("");
  var sSize = 0;

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === "(") {
      sSize++;
    } else if (sArr[i] === ")") {
      sSize--;
    }

    if (sSize < 0) {
      answer = false;
      break;
    }
  }

  if (sSize !== 0) {
    answer = false;
  }

  return answer;
}
