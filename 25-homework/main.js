const objectUsers = [
    {
        name: 'ivan',
        age: 23,
        gender: 'male'
    },
    {
        name: 'peter',
        age: 33,
        gender: 'male'
    },
    {
        name: 'katya',
        age: 55,
        gender: 'female'
    }
]

const inputEl = document.querySelector('.create-user');
const ulUsers = document.querySelector('.users');
let allUsers = JSON.parse(window.localStorage.getItem('users'));


if (!allUsers) {
    allUsers = [];
    objectUsers.forEach((el, i) => {
        allUsers.push(el);
        addAllUsers(el.name, i);

    });

    updateLS();
} else {
    for (let i = 0; i < allUsers.length; i++) {
        addAllUsers(allUsers[i].name, i);
    }
}



inputEl.addEventListener('click', (e) => e.target.value = "")
inputEl.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        console.log(e.target.value);
        let newUser = {};
        newUser.name = e.target.value;
        newUser.age = "";
        newUser.gender = "";
        allUsers.push(newUser);
        addAllUsers(newUser.name, allUsers.length - 1);
        updateLS();
        alert('Новый пользователь создан!')
        e.target.value ="add new user again";
    }
});

ulUsers.addEventListener('click', (e) => {
    let parentNode = e.target.parentNode.parentNode;
    let attributeButton = e.target.getAttribute('data-value');
    let indexOfUser = e.target.parentNode.getAttribute('data-index');
    let ul = parentNode.querySelector("[data-index-ul]");
    let objectUser = allUsers[indexOfUser];

    if (attributeButton === 'view') {
        showInfo(objectUser, ul);
    } else if (attributeButton === 'remove') {
        let checkAnswer = confirm("вы уверены, что хотите УДАЛИТЬ?");
        if (checkAnswer) {
            deleteInfo(indexOfUser, parentNode);
        }
    } else if (attributeButton === 'edit') {
        ul.innerHTML = "";
        editInfo(objectUser, ul);
    }

});

function editInfo(objectUser, ul) {

    for (let key in objectUser) {
        let li = document.createElement('li');
        li.innerHTML = `${key}: <input type="text" value="${objectUser[key]}" data-key="${key}"> `;
        ul.append(li);
    }
    let li = document.createElement('li');
    li.innerHTML = `<button href="#" class="button edit" value="save">Save</button>`;
    ul.append(li);
    ul.addEventListener('click', (e) => {
        if (e.target.value === 'save') {
            let childrenInput = ul.getElementsByTagName('input');
            [...childrenInput].forEach((e) => {
                let childKey = e.getAttribute('data-key');
                objectUser[childKey] = e.value;
            })
            updateLS();
            ul.innerHTML = " ";
            alert('данные сохранены!');
        }
    })
}


function showInfo(objectUser, ul) {
    ul.innerHTML = "";
    for (let key in objectUser) {
        let li = document.createElement('li');
        li.textContent = `${key}: ${objectUser[key]}`;
        ul.append(li)
        console.log(objectUser[key]);
    }

}

function deleteInfo(indexOfUser, parentNode) {

    allUsers.splice(indexOfUser, 1);
    updateLS();
    parentNode.remove();
}
function addAllUsers(userLC, index) {
    let li;
    li = document.createElement('li');
    console.log(userLC);
    li.setAttribute('data-index', `${userLC}-${index}`)
    li.innerHTML = `<div data-index="${index}" class="button-container">
          <span class="name-user">  ${userLC} </span>
        <a href="#" class="button edit" data-value="edit">Edit</a>
        <a href="#" class="button view" data-value="view">View</a>
        <a href="#" class="button remove" data-value="remove">Remove</a>
        </div>
        <ul data-index-ul="${index}" style="width: 100%;"></ul>
        `
    //user.name;
    ulUsers.append(li);
}






function updateLS() {
    window.localStorage.setItem('users', JSON.stringify(allUsers));
}

