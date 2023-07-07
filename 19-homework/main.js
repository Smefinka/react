let li = document.getElementsByTagName('li');
let buyButton = document.getElementsByClassName('buy-button');
[...li].forEach((item) => item.addEventListener("click", () => showBlocks(item)));
[...buyButton].forEach((item) => item.addEventListener("click", () => putInCart(item)));

function deleteDisplayNone(id) {
  let divContent = document.querySelector(id);
  divContent.style.display = '';
}

function addDisplayNone(klass, klassCategory) {
  alert('YOU BUY!')
  let divContentProduct = document.querySelectorAll(klass);
  for (let i = 0; i < divContentProduct.length; i++) {
    divContentProduct[i].style.display = 'none';
  }
  let divContentCategory = document.querySelectorAll(klassCategory);
  for (let i = 0; i < divContentCategory.length; i++) {
    divContentCategory[i].style.display = 'none';
  }
}

function putInCart(item) {
  console.log('put');
  addDisplayNone('.product-card', '.product-list')

}

function showBlocks(item) {


  // category 
  let categoryName = item.innerText;
  switch (categoryName) {
    case 'Телевізор':
      deleteDisplayNone('#tv');
      break;
    case 'Телефон':
      deleteDisplayNone('#phone');
      break;
    default:
      console.log(`Sorry, we are out of ${categoryName}.`);
  }
  //product list
  let productName = item.innerText;
  switch (productName) {
    case 'Товар 1 телевизор':
      deleteDisplayNone('#product-card-tv-1')
      break;
    case 'Товар 2 телевизор':
      deleteDisplayNone('#product-card-tv-2')
      break;
    case 'Товар 1 телефон':
      deleteDisplayNone('#product-card-phone-1')
      break;
    case 'Товар 2 телефон':
      deleteDisplayNone('#product-card-phone-1')
      break;
    default:
      console.log(`Sorry, we are out of ${productName}.`);
  }
}


