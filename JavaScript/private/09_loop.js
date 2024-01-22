/**
 * 1)for 
 * 2)While
 */
for(let i=0;i<5;i++){
    console.log(i);
}
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        console.log(i,j);
    }
}

let square = '';
let side = 6;

for(let i=0;i<6;i++){
    for(let j =0;j<6;j++){
        square += '*';
    }
    square += '\n';
}
console.log(square)
/**
 * for...in
 */
const yujin = {
    name : '안유진',
    year: 2003,
    group:'IVE'
} // object 에서 for in loop를 쓰면 key 값을 가져오고 
for(let key in yujin){
    console.log(key)
}
const iveMembersArray =['안유진','가을','레이','장원영','리즈','이서'];
for(let key in iveMembersArray){
    console.log('key',key)
    console.log(`${key}:${iveMembersArray[key]}`);
}// Array 에서 for in loop를 쓰면 index 값을 가져온다

for(let value of iveMembersArray){
    console.log(value);
}// for of loop을 쓰면 value가 튀어나옴

let number = 0;
while(number<10){
    number++;
    console.log('number',number)
}

//break -> 반복문에서 나옴
//continue 한번 뛰어 넘고 다음 iter