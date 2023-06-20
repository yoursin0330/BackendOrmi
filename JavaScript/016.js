// value의 값으로 문자열 외에 다른 값을 넣었을 경우
let test = {
  one: sum,
  two: console.log,
  three: window.innerWidth,
  four: [10, 20, 30],
  five: "10",
  six: 100,
};
console.log(test);
test.two("호준!!");

let obj = {
  id: "licat",
  pw: "1234",
  name: "chunsik",
  email: "likealion@chun.sik",
  active: false,
};
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
