function solution(n, left, right) {
  var answer = [];

  for (let i = left; i < right + 1; i++) {
    row = Math.floor(i / n);
    column = i % n;
    answer.push(Math.max(row + 1, column + 1));
  }

  return answer;
}
