/**
 * 6개의 primitive 타입과 하나의 object 타입
 * 
 * 1) Number
 * 2) String (문자열)
 * 3) Boolean 
 * 4) undefined (정의되지 않음)
 * 5) null
 * 6) Symbol (심볼)
 * 
 * 7) Object 객체
 *      Function, Array, Object
 */
// number
const age = 32;
const tempature = -10;
const pi = 3.14

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log()

const infinity = Infinity;
const nInfinity = -Infinity;
console.log(typeof Infinity)
console.log(typeof nInfinity)
console.log()

// String 
const codeFactory = "코드팩토리";
console.log(typeof codeFactory)
const ive = "'아이브' 안유진";
console.log(ive)
const ive1 = '\'아이브 \'안유진';
console.log(ive1)

/**
 *  Template Literal
 *  ` -> 백틱 안에 들어간 문자열 그대로 똑같이 출력해줌 
 *  Escape Character 사용 할 필요가 없다
 *  Escaping Character
 *  1) newLine -> \n
 *  2) tab -> \t
 *  3) 백슬래시 -> \\
 */
const iveYujun = '아이브\t유진';
console.log(iveYujun);

const iveWonYoung = `아이브
장원영`;
console.log(iveWonYoung);

const groupnName = '아이브';
console.log(groupnName + ' 안유진');
// 백틱안에 ${} 넣으면 변수로 인식함 
console.log(`${groupnName} 안유진`)

/*
 *  Boolean 
 * 
*/
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

/**
*Undefined 
    사용자가 직접 값을 초기화하지 않았을때 지정되는 값
    직접 undefined로 값을 초기화하는건 지양해야함
*/
let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 *  null 타입
 *  undefined와 마찬가지로 값이 없다는 뜻이나
 *  JS에서는 개발자가 명시적으로 없는 값으로 초기화할때
 *  
 */
let init = null;
console.log(init);
console.log(typeof init);

/**
 * Symbol 타입
 * 유일무이한 값을 생성할때 사용
 * 다른 primitive 값과 다르게 Symnol 함수를 호출해서 사용
 */

const test1 = '1'
const test2 = '1'
const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(test1 == test2)

console.log(symbol1 == symbol2)

/**
* Object 탕비
* 
* Map(딕셔너리)
* 키:밸류 쌍
*/
const dict = {
    red : '빨간색',
    oranged : '주황색',
    yellow : '노란색'
};

console.log(dict)
console.log(dict['red'])

/**
    Array
    값을 리스트로 나열 할 수 있는 타입
 */
const iveMembersArray = [
    '안유진','가을','레이','장원영','리즈','이서'
]
console.log(iveMembersArray)
console.log(iveMembersArray[0])
console.log(iveMembersArray[5])
iveMembersArray[0] = '코드팩토리'
console.log(iveMembersArray)

/**
 * static typing -> 변수 선언할때 어떤 타입의 변수를 선언할지 명시
 * dynamic typing -> 변수 타입을 명시적으로 선언하지 않고
 *                   값에 의해 타입을 추론한다
 * js-> dynamin typing 
 */