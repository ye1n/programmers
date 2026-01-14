/**
 * 햄버거 만들기
 *
 * ingredient
 * 1: 빵
 * 2: 야채
 * 3: 고기
 * 완성: [1, 2, 3, 1]
 */
function solution(ingredient) {
  let answer = 0;
  let toppingStack = [];

  for (const element of ingredient) {
    let topping4 = element;
    toppingStack.push(topping4);

    let length = toppingStack.length;
    let topping1 = toppingStack[length - 4];
    let topping2 = toppingStack[length - 3];
    let topping3 = toppingStack[length - 2];

    let isHamburger =
      topping1 === 1 && topping2 === 2 && topping3 === 3 && topping4 === 1;

    if (isHamburger) {
      // 햄버거 발견
      // 배열에서 제거
      answer++;
      toppingStack.pop();
      toppingStack.pop();
      toppingStack.pop();
      toppingStack.pop();
    }
  }

  return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
