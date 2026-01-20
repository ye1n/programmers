/**
 * 둘만의 암호
 */
function solution(s, skip, index) {
  let answer = "";
  let sIdx = [];
  let skipIdx = [];

  const chkSkip = (idx) => {
    for (const s of skipIdx) {
      if (idx === s) return true;
    }
    return false;
  };

  const changeCharToIdx = (str, arr) => {
    for (const s of str) {
      arr.push(s.charCodeAt(0) - 97);
    }
  };

  const changeIdxToChar = (idx) => {
    let str = [];
    for (const s of idx) {
      str.push(String.fromCharCode(97 + s));
    }
    return str;
  };

  changeCharToIdx(s, sIdx);
  changeCharToIdx(skip, skipIdx);

  for (let i = 0; i < sIdx.length; i++) {
    let cnt = index;
    for (let j = 0; j < cnt; j++) {
      sIdx[i] = (sIdx[i] + 1) % 26;
      if (chkSkip(sIdx[i])) cnt++;
    }
  }

  answer = changeIdxToChar(sIdx).join("");

  return answer;
}

console.log(solution("aukks", "wbqd", 5));
