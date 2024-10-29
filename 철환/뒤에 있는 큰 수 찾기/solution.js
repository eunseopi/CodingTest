function solution(numbers) {
  const answer = Array(numbers.length).fill(-1);
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] > numbers[i]) {
        answer[i] = numbers[j];
        break;
      }
    }
  }

  return answer;
}
