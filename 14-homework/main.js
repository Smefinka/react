function closures() {
    let sum = 0;
    return function (num) {
        return sum += num;
    }
}

let sum = closures();
console.log(sum(2));
console.log(sum(1));
console.log(sum(4));

//2 zadanie
let arrayAllTypes = [1, 'a', 'hi', undefined, 3, true, false, 0, 4, 17];
let numbers = arrayAllTypes.filter((el) => {
    if (!Number.isInteger(el)) return false
    if (el === 0) return true
    return true
});

function middle(numbers) {
    let middleSum = 0;
    let numLength = numbers.length;
    numbers.map((el) => middleSum += +el);
    return Math.round(middleSum / numLength);
}
console.log('middle')
console.log(middle(numbers));

//3 zadanie
const dateUser = Array(3);
for (let i = 0; i < dateUser.length; i++) {
  let answer;
  if (i < 2) {
    answer = prompt('What is number?');
    dateUser[i] = +answer;
  } else {
    answer = prompt('What is symbol?');
    dateUser[i] = answer;
  }
}
console.log(dateUser)

function doMath(dateUser) {
  switch (dateUser[2]) {
    case '+':
      console.log(dateUser[0] + dateUser[1]);
      break;
    case '*':
      console.log(dateUser[0] * dateUser[1]);
      break;
    case '/':
      console.log(dateUser[0] / dateUser[1]);
      break;
    case '%':
      console.log(dateUser[0] % dateUser[1]);
      break;
    case '^':
      console.log(degree(dateUser[0], dateUser[1]));
      break;
  }
}
doMath(dateUser);

function degree(num, pow) {
  if (pow === 1) return num;
  return num * degree(num, pow - 1)
} 

//4 zadanie
let arrayUser;
for (let i = 0; i < 2; i++) {
  let answer;
  if (i < 1) {
    answer = +prompt('What is length first array?');
    arrayUser = Array(answer)
  } else{
   answer = +prompt('What is length second array?');
   for(let j=0;j<arrayUser.length;j++){
   arrayUser[j]=Array(answer);
   addData(arrayUser[j]);
   }
  }
}
console.log(arrayUser);

function addData(arrayUserJ){
 let answer;
for(let i=0;i<arrayUserJ.length;i++){
answer = prompt('What is data?');
arrayUserJ[i]=answer;
}
} 
// 5 zadanie
let stringUser = prompt('enter string').split('');
let elements = prompt('enter elemets for delete').split('');
function deleteElements(string,elements){
for(let i=0; i< string.length; i++){
for(let j=0; j<elements.length; j++){
if(string[i] === elements[j]) delete string[i];
}
}
console.log(string.join(''));
}
deleteElements(stringUser,elements);