let numOrStr = prompt('input number or string');
 if ( isNaN( +numOrStr ) ) {
numOrStr = -1;
} 
switch (numOrStr) {
 case null:
    console.log('ви скасували')
    break;
  case '':
    console.log('Empty String');
    break;
    case -1:
    console.log('number is Ba_NaN');
    break;
  default:
    console.log('OK!');
}
