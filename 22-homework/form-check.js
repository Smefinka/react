const form = document.getElementById('signup');
const nameElement = form.elements['name'];
const poshtaElement = form.elements['poshta'];

const radioElements = form.elements['oplata'];
const radioErrorPlace = document.querySelector('.radio-error');


const NAME_ERROR = 'Please enter a name';
const POSHTA_ERROR = 'Please enter a poshta';
const RADIO_ERROR = 'Please check your oplatu';
const SELECT_ERROR = 'Please check your city';
function showError(el, message) {
    const errorPlaceholder = el.parentNode.querySelector('small');
    errorPlaceholder.textContent = message;
    el.classList.add('error');
    el.classList.remove('success');
}

function showSuccess(el) {
    const errorPlaceholder = el.parentNode.querySelector('small');
    errorPlaceholder.textContent = '';
    el.classList.add('success');
    el.classList.remove('error');
}

function showMessage(el, errorMessage) {
    const errorPlaceholder = el.parentNode.querySelector('small');
    errorPlaceholder.textContent = errorMessage ? errorMessage : '';
    if (errorMessage) {
        el.classList.add('error');
        el.classList.remove('success');
    } else {
        el.classList.add('success');
        el.classList.remove('error');
    }
}

function validateName(el, message) {
    const name = el.value.trim();

    if (name !== '') {
        // show success
        showMessage(el);
        return true;
    } else {
        // show error
        showMessage(el, message);
        return false;
    }
}

function validateSelect(select) {
    if (select.value) {
        showMessage(select);
        return true;
    }
    showMessage(select, SELECT_ERROR);
    return false;
}



function validateRadio(elements, message) {

    let selectedValue;

    for (const radio of elements) {
        console.log(radio.checked, radio.value);
        if (radio.checked) {
            selectedValue = radio.value;
            break;
        }
    }

    if (selectedValue) {
        // show success
        showSuccess(radioErrorPlace);
        return true;
    } else {
        // show error
        showError(radioErrorPlace, RADIO_ERROR);
        return false;
    }
}

// 2. Add eventListener to the Form submit
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // 3. Validation for input elements
    // validate the name element
    const isNameValid = validateName(nameElement, NAME_ERROR);

    const isRadioChecked = validateRadio(radioElements, RADIO_ERROR);
    const isSelectChecked = validateSelect(poshtaElement, SELECT_ERROR);
    // const isSelectChecked = validateSelect(radioElements, RADIO_ERROR);
    if (isNameValid && isRadioChecked && isSelectChecked) {
        document.querySelector('#signup').classList.add('hidden');
        document.querySelector('#check').classList.remove('hidden');
        console.log('submit');
        let countProduct = form.elements['countProduct'];
        let poshtaElement1 = poshtaElement.value;
        showCheck(countProduct, poshtaElement1);
    }

});

let cityName = {
    "kyiv": ['kyiv22', 'kyiv33'],
    'lviv': ['Lv22', 'Lv33']
}
let poshta = document.getElementById('poshta');

document.getElementById('city').addEventListener('change', () => showPoshtaOtdelenia());


function showPoshtaOtdelenia() {
    let miasto = city.value;
    poshta.innerHTML = '';
    for (const key in cityName) {
        if (key === miasto) {
            const adressPost = cityName[miasto];
            for (let i = 0; i < adressPost.length; i++) {
                console.log(i)
                let option = `<option value="${adressPost[i]}" type="select">${adressPost[i]}</option>`;
                console.log(option)
                poshta.innerHTML += option;
            }
        }
    }
}
function currentDate() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    return currentDate;
}

function showCheck(countProduct, poshtaElement1) {
    const nameProduct = document.getElementById('product-name').textContent;
    const priceProduct = document.getElementById('product-price').textContent;
    let sum = priceProduct;
    if (countProduct.value > 1) {
        sum = (priceProduct.replace(/[^0-9]/g, '') * countProduct.value) + "$";

    }
    const checkElements = {
        'check-product-name': nameProduct,
        'check-product-count': countProduct.value,
        'check-product-poshta': poshtaElement1,
        'check-product-price': sum,
        'date': currentDate()
    };


    for (const elementId in checkElements) {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = checkElements[elementId];
        }
    }
    addLocalStorage(checkElements);


}

const cart = document.getElementById('cart');
const objectProducts = {};
const sumOrder = document.getElementById('order-sum');
cart.addEventListener('click', showCart);
sumOrder.addEventListener('click',showMoreInfo, true);

function showCart() {
    let li;
    document.getElementById('category').classList.add('hidden');
    document.getElementById('check').classList.add('hidden');
    sumOrder.innerHTML = '';
    let infoProduct = [];
    for (let i = 0; i < localStorage.length; i++) {
        let date,
            price;
        let keyLocalStorage = localStorage.key(i);
        infoProduct.push(JSON.parse(localStorage.getItem(keyLocalStorage)));
        objectProducts[i] = Object.fromEntries(infoProduct[i]);
        li = document.createElement('li');
        for (let key in objectProducts[i]) {
            if (key.includes('date')) date = objectProducts[i][key];
            if (key.includes('price')) price = objectProducts[i][key];
            if (key.includes('name')) li.setAttribute('data-name', objectProducts[i][key])
            li.innerHTML = ` <div class="order-summary" id="">
            <p>Дата: ${date}</p>
            <p>Цена: <span data-price="check-product-price">${price}</span></p>
            <button class="delete-button">Delete</button>
          </div>`
            li.innerHTML +=` <div class="order-details hidden" id="order-details">
            <p>Детали заказа:</p>
            <ul>
              <li>Название товара: ${objectProducts[i]['check-product-name']}</li>
              <li>Сумма чека:${objectProducts[i]['check-product-price']} </li>
              <li>Количество товара:${objectProducts[i]['check-product-count']} </li>
              <li>Почта:${objectProducts[i]['check-product-poshta']} </li>
            </ul>
          </div>
          `

        }
        sumOrder.append(li);
       
    }
    
}


function addLocalStorage(checkElements) {
    let checkElementsArray = Object.entries(checkElements);
    localStorage.setItem(checkElements['check-product-name'], JSON.stringify(checkElementsArray));

}
function showMoreInfo(e){
    let li = e.target.parentNode.parentNode;
    let childLi = li.querySelector('.order-details');
    let deleteLiButton = li.querySelector('.delete-button');
    childLi.classList.toggle("hidden");
    deleteLiButton.addEventListener('click', ()=>deleteLi(e,li))
}

function deleteLi(e,li){
   let liAtribute = li.getAttribute('data-name');
   console.log(liAtribute)
   localStorage.removeItem(liAtribute);
   li.remove();

}

