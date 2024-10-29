function solution(strings, n) {
    return strings.sort((a,b) => {
        // n번째 문자를 기준으로 비교
        if (a[n] > b[n]) return 1;
        if (a[n] < b[n]) return -1;

        // n번째 문자가 같으면 사전순으로 비교
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    })
}