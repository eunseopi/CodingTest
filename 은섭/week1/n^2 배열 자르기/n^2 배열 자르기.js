function solution(n, left, right) {
    let result = [];

    for(let i = left; i <= right; i++){
        // i를 2차원 좌표(row, col)로 변환
        const row = Math.floor(i / n);
        const col = i % n;
        // left 가 2일때, row = 0
        // col = 2 % 3 = 2
        // (i,j) = (0,2)
        // left 가 3일때, row = 1
        // col = 3 % 3 = 0
        // (i,j) = (1,0)

        // 값
        result.push(Math.max(row,col) + 1);
        // Math.max(0,2) + 1 = 3
        // Math.max(1,0) + 1 = 2
        // 여기서 (0,2) 의 값이 배열을 그려보면 2인데
        // => 배열의 첫 인덱스가 1부터 시작하니까 +1을 시작해준 것이지 (0,2)의 값에 1을 더하는 것이 아니다.
    }

    return result;
}