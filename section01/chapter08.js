// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined 가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

// var1 : undefined
// var2 : 10
let var4 = var1 ?? var2;
console.log(var4);
// -> var4 : 10
let var5 = var1 ?? var2;
let var6 = var2 ?? var3;
// var6 : 10

let userName = "조정원";
let userNickName = "jjeong1"

let displayName = userName ?? userNickName;
console.log(displayName)

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자
let var7 = 1;
var7 = "hello"
// javascript는 고정적으로 타입을 정해두지 않아도 number 넣었다가 string값 넣어도 실행이 됨
var7 = true;
let t1 = typeof var7;
console.log(t1)

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일때의 값을 다르게 반환
let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 => "짝" 홀수 => "홀"
let res = var8 % 2 === 0 ? "짝" : "홀"
console.log(res)