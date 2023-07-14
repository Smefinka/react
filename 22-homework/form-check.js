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
    if (isNameValid && isRadioChecked) {
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
        'check-product-price': sum
    };

    for (const elementId in checkElements) {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = checkElements[elementId];
        }
    }

}
