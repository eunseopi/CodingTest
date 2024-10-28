function solution(strings, n) {
    // n번째 자리수가 같으면 사전 순 정렬
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}
