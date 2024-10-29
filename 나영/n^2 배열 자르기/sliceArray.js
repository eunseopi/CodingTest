/*

n x n 배열은 어떻게 만들까? 
=> 자바스크립트는 2차원 배열을 만드는 게 1차원 배열에 1차원 배열을 추가하는 것이다.
=> 그래서 자바스크립트는 타언어에 비해 굉장히 동적인 배열 구성 가능
=> 참고로 자바스크립트의 배열은 다양한 데이터 타입을 혼합해 담을 수 있음
=> 그럼 일단 n x n 의 빈 배열은 Array(n)객체 생성을 n번 반복하는 것으로 만들 수 있지 않을까?
=> 먼저 n개의 빈 값을 가진 배열을 만들고 그 값에 또 n개의 빈값을 가진 배열을 채워넣자

[1, 2, 3]
[2, 2, 3]
[3, 3, 3]
의 규칙 찾기...
(0,0) = 1 (0,1) = 2 (0,2) = 3
(1,0) = 2 (1,1) = 2 (1,2) = 3
(2,0) = 3 (2,1) = 3 (2,2) = 3

둘 중 큰 값에 +1된 값으로 채워지는 규칙
=> n+1된 값으로 채우기

새로 배운 메소드들: fill(), flat()

*/
// n행 n열 크기의 비어있는 2차원 배열을 만듭니다.
const sliceArray1 = (n, left, right) => {
  let array = new Array(n).fill(0).map(() => new Array(n).fill(0));
  console.log(array);
};

//i = 1, 2, 3, ..., n에 대해서, 다음 과정을 반복합니다.
//1행 1열부터 i행 i열까지의 영역 내의 모든 빈 칸을 숫자 i로 채웁니다.
const sliceArray2 = (n, left, right) => {
  let array = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      array[i][j] = Math.max(i, j) + 1;
    }
  }

  console.log(array);
};

//1행, 2행, ..., n행을 잘라내어 모두 이어붙인 새로운 1차원 배열을 만듭니다.
const sliceArray3 = (n, left, right) => {
  let array2d = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      array2d[i][j] = Math.max(i, j) + 1;
    }
  }

  let array1d = array2d.flat();

  console.log(array1d);
};

//새로운 1차원 배열을 arr이라 할 때, arr[left], arr[left+1], ..., arr[right]만 남기고 나머지는 지웁니다.
const sliceArray4 = (n, left, right) => {
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

sliceArray4(3, 2, 5);
sliceArray4(4, 7, 14);
