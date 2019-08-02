const magic = () => new Date();
console.log(magic())

const myFun = function() {
  console.log("My fun");
}

myFun();

const myFun2 = (a) => {
  console.log('My Fun2', a);
}

myFun2(333);

const add2 = (a,b) => a+b;
console.log(add2(5,6));
console.log(add2("Valdis",6));

function add2old(a,b) {
  return a+b;
}

const myarr = [1,2,3,5];

function printItem(item) {
  console.log(item);
}

let sum = 0
myarr.forEach((item) => {sum+=item});
console.log(sum);

console.log("++++");
myarr.forEach(printItem);