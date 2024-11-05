function solution(strings, n) {
  const answer = strings.sort((a, b) => {
    if (a.charAt(n) === b.charAt(n)) {
      return a.localeCompare(b);
    }
    return a.charAt(n) > b.charAt(n) ? 1 : -1;
  });
  return answer;
}
