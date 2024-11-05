// 문제: n행 n열 크기의 비어있는 2차원 배열을 만듭니다.
const practiceArray1 = (n, left, right) => {
  let array = new Array(n).fill(0).map(() => new Array(n).fill(0));
  console.log(array);
};

// 문제: i = 1, 2, 3, ..., n에 대해서, 다음 과정을 반복합니다.
// 묹제: 1행 1열부터 i행 i열까지의 영역 내의 모든 빈 칸을 숫자 i로 채웁니다.
const practiceArray2 = (n, left, right) => {
  let array = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      array[i][j] = Math.max(i, j) + 1;
    }
  }

  console.log(array);
};

// 문제: 1행, 2행, ..., n행을 잘라내어 모두 이어붙인 새로운 1차원 배열을 만듭니다.
const practiceArray3 = (n, left, right) => {
  let array2d = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      array2d[i][j] = Math.max(i, j) + 1;
    }
  }

  let array1d = array2d.flat();

  console.log(array1d);
};

// 문제: 새로운 1차원 배열을 arr이라 할 때, arr[left], arr[left+1], ..., arr[right]만 남기고 나머지는 지웁니다.
const practiceArray4 = (n, left, right) => {
  let array2d = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      array2d[i][j] = Math.max(i, j) + 1;
    }
  }

  let array1d = array2d.flat();
  const finalArray = array1d.slice(left, right + 1);

  console.log(finalArray);

  return finalArray;
};

practiceArray4(3, 2, 5);
practiceArray4(4, 7, 14);
