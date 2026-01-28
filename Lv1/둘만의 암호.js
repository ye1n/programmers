/**
 * 둘만의 암호
 */
function solution(s, skip, index) {
  let sIdx = s.split("").map((str) => str.charCodeAt(0) - 97);
  let skipIdx = skip.split("").map((str) => str.charCodeAt(0) - 97);

  for (let i = 0; i < sIdx.length; i++) {
    let cnt = index;
    for (let j = 0; j < cnt; j++) {
      sIdx[i] = (sIdx[i] + 1) % 26;
      if (skipIdx.includes(sIdx[i])) cnt++;
    }
  }

  return sIdx.map((i) => String.fromCharCode(97 + i)).join("");
}

console.log(solution("aukks", "wbqd", 5));
