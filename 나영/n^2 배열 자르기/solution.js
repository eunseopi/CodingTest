function solution(n, left, right) {
  let array2d = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      array2d[i][j] = Math.max(i, j) + 1;
    }
  }

  let array1d = array2d.flat();
  const finalArray = array1d.slice(left, right + 1);

  return finalArray;
}
