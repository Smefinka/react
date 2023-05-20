
let userAge;
let nameCity;
let favoriteSport;
const today = new Date(); 
const year = today.getFullYear();

function giveAnswer() {
   userAge = prompt("Please enter your year of birthday", "");
   nameCity = prompt("Please enter your city", "");
   favoriteSport = prompt("Please enter your favorite sport", "");
   if (!nameCity && !userAge && !favoriteSport) {
document.getElementById("demo").innerHTML = "you didn't give any information about your city, age. "
}else if(!nameCity && !favoriteSport ){

}
else if(!nameCity && favoriteSport != null ){
favoriteSport = favoriteSport.toLowerCase();
}else if(nameCity !=null && !favoriteSport){
  nameCity = nameCity.toLowerCase();
}
else{
    nameCity = nameCity.toLowerCase();
   favoriteSport = favoriteSport.toLowerCase();
}
  
   switch (nameCity) {
  case 'київ':
  case 'киев':
  case 'kyiv':
  case 'вашингтон':
  case 'Washington':
  case 'лондон':
  case 'london':
   youLive();
    break;
  default:
  youLive();

}
 switch (favoriteSport) {
  case 'футбол':
  case 'football':
  youBecome();
   break;
  case 'теннис':
  case 'теніс':
  case 'tennis':
   youBecome();
    break;
  default:
   youBecome();

}
}
function youLive() {
console.log(!nameCity + " " + !userAge);
if (nameCity === "київ" || nameCity === "киев" || nameCity === "kyiv" || nameCity === "kiev") {
if(!userAge){
document.getElementById("demo").innerHTML =
  `Hello, WE DON'T know your AGE<br>You live in capital of <b>Ukraine</b>`
}else{document.getElementById("demo").innerHTML =
 `Hello, your age is <b> ${year - userAge}</b> <br>You live in capital of <b>Ukraine</b>`};
}else if (nameCity === "вашингтон" || nameCity === "washington"){
if(!userAge){
document.getElementById("demo").innerHTML =
  `Hello, WE DON'T know your AGE<br>You live in capital of <b>USA</b>`
}else{document.getElementById("demo").innerHTML =
  `Hello, your age is  <b> ${year - userAge}</b><br>You live in capital of <b>USA</b>`}
}else if (nameCity === "лондон" || nameCity === "london"){
if(!userAge){
document.getElementById("demo").innerHTML = `Hello, WE DON'T know your AGE<br>BUT You live in capital of <b>Great Britain</b>`
}else{document.getElementById("demo").innerHTML =
  `Hello, your age is <b> ${year - userAge}</b> <br>You live in capital of <b>Great Britain</b>`}
}else if (!nameCity && !userAge  && !favoriteSport) {
document.getElementById("demo").innerHTML = "you didn't give any information about your city, age. "
}else if (!nameCity && !userAge) {
document.getElementById("demo").innerHTML = "you didn't give any information about your city, age. "
}else if (!nameCity && userAge !=null ) {
document.getElementById("demo").innerHTML =   `Hello, your age is <b> ${year- userAge}</b>.<br> You didn;t give information about CITY`;
}else if (!userAge && nameCity !=null ) {
document.getElementById("demo").innerHTML =   `Hello, you didn't give info about AGE.<br> You live in ${nameCity}`;
}
else{
document.getElementById("demo").innerHTML =
  `Hello, your age is <b> ${year- userAge}</b>.<br> You live in THE  ${nameCity}`;
}
}
function youBecome() {
if (favoriteSport === "футбол" || favoriteSport === "football"){
document.getElementById("demo").innerHTML +=
 "<br> Круто! Хочеш стати <b>Алекс Морган?</b>";
}else if (favoriteSport === "теннис" || favoriteSport === "теніс" || favoriteSport === "tennis"){
document.getElementById("demo").innerHTML +=
 "<br> Круто! Хочеш стати <b>Серена Уильямс?</b>";
}else if (favoriteSport === "волейбол" || favoriteSport === "volleyball"){
document.getElementById("demo").innerHTML +=
 "<br> Круто! Хочеш стати <b>Francesca Piccinini?</b>";
}else if (favoriteSport != null && favoriteSport !== "теннис" && favoriteSport !== "волейбол" && favoriteSport !== "футбол"){
document.getElementById("demo").innerHTML +=
 "<br> Круто что интересуешься споротом! </b>";
}
else{
document.getElementById("demo").innerHTML +=
 "<br> Also You didn't give any information about favorite sport";
}
}

