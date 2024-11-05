function solution(clothes) {
    var answer = 1;
    const closet = new Map();
    clothes.forEach((cloth) => {
        if (closet.has(cloth[1])){
            closet.get(cloth[1]).add(cloth[0])
        }else {
            closet.set(cloth[1], new Set([cloth[0]]))
        }
    })
    
    closet.forEach((c) => {
        answer *= c.size + 1
    })
    return answer -1 ;
}
