let number = 5;
if(number % 2 === 0){
    console.log(`number 변수는 짝수`);
}else {
    console.log('number 변수는 홀수');
}

if(number % 2 ===0){
    console.log(`2의 배수`);
}else if(number % 3 ===0){
    console.log(`의 배수`);
}else if (number % 5 ===0){
    console.log(`5의 배수`)
}

const englishDay = 'monday';
let koreanDay;

switch(englishDay){
    case 'monday':
        koreanDay = '월요일';
        break;
    case 'Tuesday':
        koreanDay = '화요일';
        break;
    case 'Wendseday':
        koreanDay = '수요일'
        break;
    case 'Thursday':
        koreanDay = `목요일`
        break;
    default:
        koreanDay = `주말`;
        break;
}   
console.log(koreanDay)