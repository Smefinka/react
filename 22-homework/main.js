
const obj = {
 categories: [
    {
    category: 'phone',
    description: 'buy phones today ',
    listProducts: [
      {
        name: '3 LG phone',
        price: '50$',
        img: 'image/img-1.png'
      },
      {
        name: '11 Samsung phone',
        price: '120$',
        img: 'image/img-1.png'
      },
      {
        name: '18 Samsung phone',
        price: '110$',
        img: 'image/img-1.png'
      }
    ]
  },
  {
    category: 'tv',
    description: 'buy TV today ',
    listProducts: [
      {
        name: 'Телевизор LG',
        price: '200$',
        img: 'image/img-2.png'
      },
      {
        name: 'Телевизор Samsung',
        price: '300$',
        img: 'image/img-2.png'
      }
    ]
  },

]
}
const categories = document.getElementById('categories');
const listProducts = document.getElementById('product-lists');
let countCategories = obj['categories'].length;
obj['categories'].forEach(addLiCategories);

function addLiCategories (item) {
   let li = document.createElement('li');
   li.dataset.category = item.category;
   li.innerHTML = item.category;
   categories.append(li);
}

let categoriesName = categories.children,
    productsName,
    objCategory,
    objNameProduct;

[...categoriesName].forEach((item) => item.addEventListener('click',()=>putProducts(item)));
function putProducts (item){
  document.querySelector('#signup').classList.add('hidden');
  document.querySelector('#check').classList.add('hidden');
 while(listProducts.children.length >0) {
    let child = listProducts.lastElementChild; 
    listProducts.removeChild(child);
  } 
  for(let i = 0; i<countCategories; i++){
    if (item.getAttribute("data-category") === obj['categories'][i]['category']){
      obj['categories'][i]['listProducts'].forEach(addLiProducts);
      document.querySelector('.product-list').style.display = "";
      objCategory = obj['categories'][i]['listProducts'];
     
    }
  }
  let productsName = listProducts.children;
  console.log(productsName);
[...productsName].forEach((item) => item.addEventListener('click',()=>showProduct(item)));
}

function addLiProducts (item) {
  let li = document.createElement('li');
  li.dataset.product = item.name;
  li.innerHTML = item['name'];
  listProducts.append(li);
}
function showProduct(item){
 for(let i = 0; i< objCategory.length;i++){
if (objCategory[i].name === item.getAttribute("data-product")) {
  document.getElementById('product-name').innerHTML = objCategory[i].name;
  document.getElementById('product-price').innerHTML = objCategory[i].price;
  document.getElementById('product-card').style.display = '';

  document.getElementById('buy-button').addEventListener ('click',showBuy);
  //objNameProduct = objCategory[i].name;
}
 }
  
}

function showBuy(){
  document.getElementById('product-card').style.display = 'none';
  document.querySelector('.product-list').style.display = "none";
  alert('you buy');
  document.querySelector('#signup').classList.remove('hidden');
}


