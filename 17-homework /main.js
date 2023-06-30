function generateList(array){
let ul = document.createElement('ul');
document.body.append(ul);
 array.forEach(el => {
    let li = document.createElement('li');
    if(Array.isArray(el)){
        let insideUl = document.createElement('ul');
        li.append(insideUl);
        for(let i=0; i<el.length;i++){
            let insideLi = document.createElement('li');
            insideLi.innerHTML = el[i];
            insideUl.append(insideLi);
        }
     }else{
        li.innerHTML = el;
     }
     ul.append(li);
 });
}

generateList([1,2, [1.1,1.2,1.3],3]);
