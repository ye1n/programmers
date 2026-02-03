/**
 * 카펫
 */
function solution(brown, yellow) {
  let carpets = brown + yellow;
  let h;
  let w;

  for (h = 3; h <= carpets / h; h++) {
    w = carpets / h;
    if (carpets % h === 0 && yellow === (w - 2) * (h - 2)) break;
  }

  return [w, h];
}

console.log(solution(10, 2));
