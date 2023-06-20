const arr1 = [];
const arr2 = [1, 2, 3];
const arr3 = new Array(4, 5, 6);


const arr = [[10, 20], 2, 3, 4, 5];
arr[0]
arr[0][0]
arr.length
arr.pop()
arr.pop(2) // 들어가는 값과 상관없이 마지막 값을 꺼냅니다. (index나 value와 무관)
arr.push(100)

const arr4 = [1, 2, 3, 4, 5];
arr4.shift()
arr4.unshift(100)
arr4.unshift(1000, 2000, 3000)


const arr5 = [1, 2, 3, 4, 5]
// splice() 메소드는 배열의 요소를 추가, 제거 또는 교체
// array.splice(start, deleteCount, changeitem)
arr5.splice(1, 0, 100)
arr5

arr5.splice(1, 1, 1000)
arr5

arr5.splice(1, 1, 10000, 20000)
arr5


const arr6 = [10, 20, 30, 40, 50, 60]
arr6.slice(2, 5) // arr[2:5]


// 사전식 정렬입니다.(문자열 정렬처럼 봅니다.)
// https://paullabworkspace.notion.site/javascript-sort-compare-function-1b35e365e3db4c889464150ee15ec7d5
// https://paullabworkspace.notion.site/5-Type2-a13e2d6da1b0423daf311896681c620f
const arr7 = [1, 11, 2, 3, 7, 8, 22, 5]
arr7.sort()

// 오름차순
arr7.sort((a, b) => a - b)

// 내림차순
arr7.sort((a, b) => b - a)


// forEach 자주사용합니다.
// forEach는 반복만 합니다!
// 새로운 arr를 만들고 싶다면 map을 사용해주세요.
const arr8 = [1, 11, 2, 3, 7, 8, 22, 5]
arr8.forEach((item, index, arr) => {
    console.log(item)
    console.log(index)
    console.log(arr)
})

const arr9 = [1, 11, 2, 3, 7, 8, 22, 5]
arr9.forEach((v, i) => {
    console.log(v) // value
    console.log(i) // index
})

/* 
<body>
    <div id="0"></div>
    <div id="1"></div>
    <div id="2"></div>
    <div id="3"></div>
    <div id="4"></div>
    <div id="5"></div>
    <div id="6"></div>
    <div id="7"></div>
</body> 
*/
const arr10 = [1, 11, 2, 3, 7, 8, 22, 5]
arr10.forEach((v, i) => {
    const tag = document.getElementById(i)
    tag.innerHTML = v
})


const arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = arr11.filter(el => el % 2 === 0);

console.log(newArr);


// https://school.programmers.co.kr/learn/courses/30/lessons/120583?language=javascript

function solution(array, n) {
    var answer = 0;
    return answer;
}

[1, 2, 3, 4, 5, 1, 1].filter(v => v == 1)
[1, 2, 3, 4, 5, 1, 1].filter(v => v == 1).length



[10, 20, 30, 40].reduce((a, c) => {
    console.log(a, c)
    return a + c
})

[10, 20, 30, 40].reduce((a, c) => a + c, 0)
[].reduce((a, c) => a + c, 0)
[].reduce((a, c) => a + c) // 견고하지 못한 코드입니다.

// 우리가 생각하는 것처럼 in이 작동하지 않습니다.
// 여기서 in 앞에 나오는 값은 key(index)입니다.
10 in [10, 20, 30, 40]
'one' in { 'one': 1, 'two': 2 }


[10, 20, 30, 40].includes(10)


const arr12 = ['hello', 'world', 'hojun']
arr1.join('!') // hello!world!hojun

// map은 아래 형태보다, 데이터를 뽑아내는 형태로 많이 사용합니다.
[1, 2, 3, 4].map(x => x ** 2)

////

[[10, 20], [20, 30], [30, 40]].map(v => v)
[[10, 20], [20, 30], [30, 40]].map(v => v[0])
// 성이 3글자라는 전재를 하고
// 3글자씩만 뽑아내겠습니다.
['leehojun', 'sinhojun', 'kimhojun'].map(v => v[0])
['leehojun', 'sinhojun', 'kimhojun'].map(v => v.slice(0, 3))
['leehojun', 'sinhojun', 'kimhojun'].map((v, i) => [v.slice(0, 3), i])

////

[{
    name: 'hojun',
    age: 10
}, {
    name: 'gildong',
    age: 20
}].map(v => v.age)

// 동일 코드
[{
    name: 'hojun',
    age: 10
}, {
    name: 'gildong',
    age: 20
}].map(v => v['age'])

////

[{
    name: 'hojun',
    age: 10
}, {
    name: 'gildong',
    age: 20
}].map((v, i, obj) => {
    console.log(v, i, obj)
    return v
})

////

[{
    name: 'hojun',
    age: 10
}, {
    name: 'gildong',
    age: 20
}].map(v => v['age'])


// python : map(function, iterable)
// javascript : iterable.map(function)


let data = [{
    name: 'lee hojun',
    age: 10
}, {
    name: 'kim junho',
    age: 20
}, {
    name: 'sin sunghun',
    age: 30
}]
// 1부터 100까지 더하는 예제
// for(초깃값;조건;증감값)
// 1번 풀이
let s = 0
for (let i = 0; i < 101; ++i) {
    s += i
}
s

// 2번 풀이
let s = 0
let i = 1
while (i < 101) {
    s += i
    ++i
}
s

new Array(10)
new Array(10).fill(1)
new Array(10).fill(1)
new Array(10).fill(1).map((_, i) => i)
new Array(10).fill(1).map((_, i) => i + 1)

// 저는 javascript도 python처럼 쓰기위해서
// range구현하고, zip도 구현하고, map 구현해놓고 사용합니다.
// 위처럼 개발하시는 것을 권하지는 않습니다.
// 개인 개발 속도는 빨라지지만 협업할 때 문제가 생깁니다.
// 회사 컨벤션으로 맞춰놓으면 개발속도 높아집니다.

// 3번 풀이
let range = new Array(100).fill(1).map((_, i) => i + 1)
let s = 0
for (const i of range) {
    // console.log(i)
    s += i
}
s

// 4번 풀이
new Array(100).fill(1).map((_, i) => i + 1).reduce((a, c) => a + c, 0)


// 5번 풀이
let range = new Array(100).fill(1)
let s = 0
for (const index in range) {
    // index가 문자열이라서 변환해준겁니다.
    // s += parseInt(index) + 1
    s += +index + 1
}
s


// 1부터 100까지 짝수만 더하는 예제
// 100번 반복
let s = 0
for (let i = 0; i < 101; ++i) {
    if (i % 2 === 0) {
        s += i
    }
}
s

// 위보다는 효율적인 코드
// 50번 반복
let s = 0
for (let i = 0; i < 101; i += 2) {
    s += i
}
s

let s = 0
let i = 0
while (i < 101) {
    if (i % 2 === 0) {
        s += i
    }
    ++i
}
s

// [10, 5, 4, 7, 9, 3, 2, 5, 4, 7, 4, 2, 1]에서 5보다 작은 수만(미만인 수) 다 더해주세요.
// 다양하게 풀어보세요. for, while, filter, map, reduce...
let data = [10, 5, 4, 7, 9, 3, 2, 5, 4, 7, 4, 2, 1]
let s = 0
for (const i of data) {
    if (i < 5) {
        s += i
    }
}
s

let data = [10, 5, 4, 7, 9, 3, 2, 5, 4, 7, 4, 2, 1]
let s = 0
let i = 0
while (i < data.length) {
    if (data[i] < 5) {
        s += data[i]
    }
    i++
}
s

data.filter(v => v < 5)
data.filter(v => v < 5).reduce((a, c) => a + c, 0)

data.map(v => v < 5)
data.map(v => v < 5 ? v : 0)
data.map(v => v < 5 ? v : 0).reduce((a, c) => a + c, 0)

data.map(v => {
    if (v < 5){
        return v
    }
    return 0
})

// 이렇게 풀이하는 것은 매우 어려운 방법입니다.
data.reduce((a, c) => c < 5 ? a + c: a, 0)

// forEach
let s = 0
data.forEach(v => v < 5 && (s += v))

// [10, '5', 4, '7', 9, '3', 2, '5', 4, '7', '4', '2', '1']에서 모든 숫자를 다 더해주세요.
// 다양하게 풀어보세요. for, while, filter, map, reduce...

const data=[10, '5', 4, '7', 9, '3', 2, '5', 4, '7', '4', '2', '1']
let s=0
data.forEach(v => s+=(typeof(v)=='number'? v :0))
console.log(s)

while( i <data.length){
    if(typeof(data[i])==='number'){
        s+=data[i]
    }
    i++
}
data.filter(v=>typeof(v)==='number')

let answer=""
for(x of "nice to meet you"){
    if(!["a","e","i","o","u"].includes(x)) answer+=x
}
console.log(answer)

Array.from('hello world')

let money=10000
let age=8
let sum=0
while(age<=35){
    sum+=money
    age++
    if(money<300_000){
        money*=2
    }
}
console.log(sum)
let money=10000
let sum=0
for(let age=8;age<=35;age++){
    sum+=money
    if(moneymoney<300_000) money*=2
    else continue;
}
console.log(sum)

function solution(my_string){
    my_string.split("").filter(v=>!isNaN(v)). 
    //!isNan() ->숫자가 아닌 것만
}

// isNaN을 사용하면 숫자는 false가 나옵니다.
// 문자는 true가 나옵니다.

function solution(my_string) {
    my_string
        .split("")
        .filter(v => !isNaN(v))
        .map(v => v * 1)
        .sort((a, b) => a - b);
}
