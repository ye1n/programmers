/**
 * 옹알이
 */
function solution(babbling) {
  let answer = 0;
  let canSayWord = ["aya", "ye", "woo", "ma"];

  for (const word of babbling) {
    let temp = "";
    let before = "";

    for (const char of word) {
      temp += char;

      if (temp !== before && canSayWord.includes(temp)) {
        before = temp;
        temp = "";
      }
    }

    if (!temp.length) answer++;
  }

  return answer;
}

console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));
