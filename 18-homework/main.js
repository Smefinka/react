//Є текстове поле на сторінці....
const paragraf = document.querySelector('#name');
paragraf.addEventListener("mouseover", displayData);
function displayData(event) {
  let div = document.createElement('div');
  div.textContent = 'buuuuuuu';
  div.style.display = "inline";
  paragraf.insertAdjacentElement("afterend", div);
  //listener is inside another one
  paragraf.addEventListener("mouseout", () => div.remove());
}

//На сторінці є дві кнопки. При натисканні ...
let answer = "";
let buttonUrl = document.querySelector('[data-url]');
document.querySelector('[data-prompt]').addEventListener("click", () => {
  answer = prompt('what is URL?');
  if (!answer.includes('http')) {
    answer = 'https://'.concat(answer);
  }
  buttonUrl.textContent += answer;
})

buttonUrl.addEventListener("click", () => {
  window.location.assign(answer);
})
//Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)
let count = 1;
let tbody = document.querySelector('#table');
for (let i = 1; i < 11; i++) {
  let tr = document.createElement('tr');
  for (let j = count; j < 101; j++) {
    let td = document.createElement('td');
    td.textContent = j;
    tr.append(td);
    if (j / 10 === i) {
      count = j + 1;
      td.textContent = j;
      tr.append(td);
      break;
    }
  }
  tbody.append(tr);
}
//У папці images є зображення 1.jp
let randomNumber = Math.floor(Math.random() * 9) + 1;
let imgAttribute = document.querySelector("[data-img='1']").setAttribute('src', `${randomNumber}.jpg`);