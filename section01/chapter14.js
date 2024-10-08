// 스코프
// -> 전역 스코프 / 지역 스코프
// -> 전액 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서 접근 가능

let a = 1; // 전역 스코프

function funcA() {
    let b = 2; // 지역스코프
    console.log(a);

    function funcB() {}
}

funcA();
// 오류 console.log(b);

if (ture) {
    let c = 1;
}

for(let i = 0; i < 10; i++) {
    let d = 1;
}

funcB();