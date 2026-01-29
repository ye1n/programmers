/**
 * 최소직사각형
 */
function solution(sizes) {
  let walletSize = [0, 0];

  for (const size of sizes) {
    let [w, h] = size.sort((a, b) => a - b);
    if (walletSize[0] < w) walletSize[0] = w;
    if (walletSize[1] < h) walletSize[1] = h;
  }

  return walletSize[0] * walletSize[1];
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ]),
);
