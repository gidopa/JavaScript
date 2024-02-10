let num = 10;
let copyNum = num;
num = 20;
console.log('num',num)
console.log('copyNum',copyNum)
const person ={
    name:"Hong gildong"
}
const copyPerson = person;
person.name = "Hong";
console.log('person.name',person.name)
console.log('copyPerson.name',copyPerson.name) // 얕은 복사 