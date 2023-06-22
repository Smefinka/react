const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);

// Результат: [1, 2, 3, 4, 6, 7]

function removeElement(array,num){
array.forEach((el,i) => el===num? array.splice(i,1):"we don't have this index") ;
}
document.getElementById('result1').innerHTML=array;


// 12 zadanie
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i
document.getElementById('result1').innerHTML+='<br> KEY: '+key;
function generateKey(length, characters){
const arrayCharacters = Array.from(characters);
const key=[];
for(let i=0; i < length;i++){
const randomNumber = Math.floor(Math.random()*arrayCharacters.length);
key[i] = arrayCharacters[randomNumber];
}
return key.join('');
}
