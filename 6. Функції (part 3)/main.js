const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);


// Результат: [1, 2, 3, 4, 6, 7]

function removeElement(array,num){
array.forEach((el,i) => el===num? array.splice(i,1):"we don't have this index") ;
}
document.getElementById('result1').innerHTML=array;
console.log(array);