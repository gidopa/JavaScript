const pw= "124";
console.log('pw.length',pw.length)
const email = "tset!naver.com"
console.log('email.includes("@")',email.includes("@"))
console.log('email.indexOf("@")',email.indexOf("@"))

const arr = [10,20,30,40];
arr.push(50);
console.log('arr',arr)

arr.pop();
console.log('arr',arr)
arr.unshift(0)
console.log('arr',arr)
arr.shift();
console.log('arr',arr)
arr.forEach(function(v){
    console.log(v);
});
console.log()
const arr1 = [10,120,30,50,20];
arr1.sort((a, b) => a - b);
console.log('arr1',arr1)