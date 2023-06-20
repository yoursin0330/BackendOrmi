const a = "hello";
const b = "world";

const data = {
  a,
  b,
  c: "!!",
  d: [10, 20, 30],
};

//CRUD
const human = {
  name: "hojun",
  age: 28,
};
human.height = 250;
human["height"] = 250;
human;

const human2 = {
  ...human, //전개구문
  age: 10,
};

human.keys(); //이 메소드가 없음!
Object.keys(human); //이렇게 써야 key 알 수 있다

switch (new Date().getDay()) {
  case 1:
    document.write("월요일입니다.");
    break;
  case 2:
    document.write("화요일입니다.");
    break;
  case 3:
    document.write("수요일입니다.");
    break;
  case 4:
    document.write("목요일입니다.");
    break;
  case 5:
    document.write("금요일입니다.");
    break;
  default:
    document.write("금금요일입니다. 주말이 뭐죠?");
    break;
}

switch (new Date().getDay()) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    document.write("평일입니다.");
    break;
  default:
    document.write("주말입니다.");
    break;
}

for (let i = 0; i < 10; i++) {}

for (const key in [10, 20, 30]) {
}

for (const i of [10, 20, 30]) {
}

while (condition) {}
