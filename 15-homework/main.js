function cache(obj, arr) {
  obj[arr] = JSON.parse(arr);
  return obj[arr];
}

function checkCache() {
  let thelephoneNumbers = {};
  return function(cache, ...arr) {
    if (arr.length > 10) {
      let index = arr.length - 10;
      arr = arr.slice(index);
    }
    let key = JSON.stringify(arr);
    if (key in thelephoneNumbers) {
      console.log('from cache')
      return console.log(JSON.parse(key));
    } else {
      let fromCallBack = cache(thelephoneNumbers, key);
      console.log('fromcallback')
      return console.log(fromCallBack);
    }
  }
}
let check = checkCache();
check(cache, 78, 95, 11, 22);
check(cache, 78, 95, 11, 22);
check(cache, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
check(cache, 78, 95, 11, 22);
check(cache, 78, 94, 11, 22);
check(cache, 78, 95, 11, 22);
check(cache, 78, 94, 11, 22);
check(cache, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
