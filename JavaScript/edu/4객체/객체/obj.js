let person={};
console.log('person',person)
person={
    name : "Hong Gildong"
};
console.log('person',person)
person={
    name:{
        firstName : "Gildong",
        lastName : "Hong"
    },
    age:20,
    isAdult:true,
    pritnInfo:function(){
        console.log('printInfo');
    },
    likes:["apple","samsung"],
    printHello:function(){
        return "hello";
    }
}
console.log('person',person)
console.log()
console.log(person.age)
console.log(person["name"]["firstName"])
console.log(person.name.lastName)
console.log(person.likes[0])
console.log(person.printHello)
console.log('person.pritnInfo',person.pritnInfo)
person.pritnInfo()
person.name="Kim";
console.log('person.name',person.name)
delete person.name
console.log('person',person)