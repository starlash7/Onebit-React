// 1. 함수 표현식

function funcA() {
    // console.log("funcA");
}

let varA = funcA;
varA();

let varB = function funcB() {
    // console.log("funcB");
}

varB();

// 2. 화살표 함수
let varC = function() {
    return 1;
};

let varD = (value) => {
    console.log(value);
    return value + 1;
};

console.log(varD);