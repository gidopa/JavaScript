/**
 * Operators - 연산자
 */

/**
 * 산술 연산자
 *  1) 덧셈
 *  2) 뺼셈
 *  3) 곱셈
 *  4) 나눗셈
 *  5) 나머지
 */

console.log(10+10);
console.log(10-5);
console.log(5*50);
console.log(50/5);
console.log(10%3);

/**
 * 증감연산자
 */

let number = 1;
number ++;
console.log(number)
number --;
console.log(number)
console.log()

let res = 1;
console.log(res)
res = number ++;
console.log(res,number);
res = number--;
console.log(res,number)
res = ++number ;
console.log(res,number);
res = --number;
console.log(res,number)
console.log()
let sample = '99'
console.log(+sample)
console.log(-sample)
console.log(typeof +sample)
console.log(typeof sample)
sample = true;
console.log(+sample)
console.log(typeof +sample)
console.log()
sample = '안유진';
console.log(sample);
console.log(typeof +sample)
/**
 * 비교 연산자
 * 1) 값의 비교
 * 
 * 2) 값과 타입의 비교
 */
console.log(5==5);
console.log(5 == '5')
console.log(0 == '')
console.log(true == '1')
console.log()

//2)
console.log(5===5);
console.log(5 === '5')
console.log(0 === '')
console.log(true === '1')
console.log()
console.log(5!=5);
console.log(5 != '5')
console.log(0 != '')
console.log(true != '1')
console.log()
console.log(5!==5);
console.log(5 !== '5')
console.log(0 !== '')
console.log(true !== '1')
console.log()
/**
 * 비교연산자
 */
console.log(100>1)
console.log(100<=1)

/**
 * 삼항 조건 연산자
 */
console.log(10>0 ? '10이 0보다 크다' : '10이 0보다 작다')

/**
 * 논리연산자
 * && ||
 */
console.log(true && false)
// 지수 연산자 **
console.log(2 ** 2)
let name;
console.log(name);
// ?? -> l-value가 null이거나 undeifned 일때 ?? 우측의 값을 반환해라 
name = name ?? '코드팩토리';
console.log(name);
name = name ?? '아이브';
console.log(name) // 이미 코드팩토리 값이 저장이 되었음
let name2;
name2 ??= `코드팩토리`;
console.log(name2)


