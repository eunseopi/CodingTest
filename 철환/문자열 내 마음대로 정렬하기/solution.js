function solution(strings, n) {
  var answer = [];
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i][n] + strings[i];
  }
  answer = strings.sort();
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i].substr(1);
  }
  return answer;
}
