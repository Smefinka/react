

let new1 = moment("31102011", "DDMMYYYY").format("L");  
console.log(new1.toString());

let dateInput = document.getElementById('dateInput');
let submitBtn = document.getElementById('submitBtn');
let divUserDate = document.getElementById('userDate');
let small = divUserDate.getElementsByTagName('small');
let divMomentoDate = document.getElementById('momentoDate');

const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[0-1])\/\d{4}$/;

const userInput = "31/12/1992";

function suckes(message){
    small[0].classList.remove('fail');
    small[0].classList.add('sukces');
    small[0].textContent = message;
}
function fail(message){
    small[0].classList.add('fail');

    small[0].innerHTML = message;
}
dateInput.addEventListener('click', (e)=> {
   e.target.value= '';
   small[0].textContent = ""
   small[0].classList.remove('sukces');
});

submitBtn.addEventListener('click', ()=> {
    let userInput = dateInput.value;
    console.log(userInput);
    if (dateRegex.test(userInput)) {
        suckes("Дата введена в корректном формате.");
       let dateUse = moment(userInput).format("LLL");
       divMomentoDate.innerHTML = dateUse.toString();
      } else {
        fail('Некорректный формат даты. Пример корректности 03/23/1992 ')
      }
 })