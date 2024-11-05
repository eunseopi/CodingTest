function solution(arrayA, arrayB) {
  var answer = 0;
  const gcdA = arrayGCD(arrayA);
  const gcdB = arrayGCD(arrayB);
  if (gcdA > gcdB && arrayB.every((item) => item % gcdA !== 0)) return gcdA;
  else if (gcdA < gcdB && arrayA.every((item) => item % gcdB !== 0))
    return gcdB;
  else return 0;
}

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const arrayGCD = (array) => {
  const result = array.reduce((acc, cur) => gcd(acc, cur));
  return result;
};
