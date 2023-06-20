function 함수2(a, b, ...c) {
  console.log(c);
  return Math.max(...c);
}

함수2("hello", "world", 10, 20, 30, 40);

function 함수2([a, b], ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

함수2([1, 2], 10, 20, 30, 40);

// 매개변수의 초기화
// 매개변수 초기화를 할 수 있으나 순서를 바꿔 아규먼트를 삽입하는 것은 가능하지 않습니다.
function 함수3(a = 10, b = 20, c = 30) {
  return a + b + c;
}

console.log(함수3((c = 1000), (a = 2000)));
