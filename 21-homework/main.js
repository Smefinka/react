const formElements = document.getElementById('form').elements;
const form = document.getElementById('form');
const table = document.getElementById('table');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  [...formElements].forEach(getValueInput);
});

function getValueInput(item){
  let valueItem;
  if(item.type === 'radio' || item.type === 'checkbox'){
    if (item.checked){
      valueItem = item.value;
      addTable(item,valueItem);
    } 
  } else if(item.value !== ''){
    valueItem = item.value;
    addTable(item,valueItem);
  } 
}
function addTable(item,valueItem){
  let tr  = document.createElement('tr');
  let th = document.createElement('th');
  th.innerHTML = item.name;
  tr.append(th);
  let td = document.createElement('td');
  td.innerHTML = valueItem;
  tr.append(td);
  table.append(tr);
  hideBlock();
}
function hideBlock(){
  form.classList.add("hidden");
}