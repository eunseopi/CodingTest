function solution(progresses, speeds) {
    const answer = [];
    const dueDates = progresses.map((progress, idx) => Math.ceil((100 - progress) / speeds[idx]));
    
    let maxDueDate = dueDates[0];
    let count = 1;
    
    for (let i = 1; i < dueDates.length; i++) {
        if (dueDates[i] <= maxDueDate) {
            count++;
        } else {
            answer.push(count);
            count = 1;
            maxDueDate = dueDates[i];
        }
    }
    
    answer.push(count);
    
    return answer;
}
