const navBar = document.getElementById('nav-bar');
const containerAlbum = document.getElementById('col-album');
const nameCategory = document.getElementById('name-category');
const page = document.getElementById('page');
let ulPages = document.getElementById('pagination');
const people = ["name", 'eye_color', 'films'];
const planets = ["name", 'population', 'films'];
const vehicles = ["name", 'model', 'films'];
const images = {
  'Planets': "images/planets.png",
  'People': "images/people.jpeg",
  'Vehicles': "images/vehicles.jpeg"
}
let url,
  data;
let filmsTitles = [];
let films = {};
let originUrl;

navBar.addEventListener('click', (e) => {
  e.preventDefault();
  originUrl = '';
  page.innerHTML = "";
  nameCategory.innerHTML = e.target.innerHTML;
  containerAlbum.innerHTML = `${e.target.innerHTML} Loading...`;
  checkUrlFetch(e);
});
function checkUrlFetch(e) {
  ulPages.innerHTML = '';
  url = e.target.getAttribute('href');
  if (url) {
    const category = nameCategory.innerHTML;
    console.log('?');
    filmsTitles = [];
    films = {};
    if (category === 'People') {
      getInfo(url, people, category);
    } else if (category === 'Planets') {
      getInfo(url, planets, category);
    } else if (category === 'Vehicles') {
      getInfo(url, vehicles, category);
    }
  }
}

async function getInfo(url, keysArray, category) {
  let pagination = {};
  try {
    const response = await fetch(url);
    data = await response.json();
    pagination['count'] = data.count;
    pagination['next'] = data.next;
    pagination['previous'] = data.previous;
    data = data.results;
    showData(data, keysArray, category);
    if (!originUrl) {
      makePagination(pagination, url);
    } else {
      makePagination(pagination, originUrl);
    }
  } catch (error) {
    console.log(error);
  }
}






function showData(data, keysArray, category) {
  containerAlbum.innerHTML = '';
  console.log(keysArray[1])
  let count = 0;
  data.forEach((element) => {
    containerAlbum.innerHTML += `
     <div class="col-md-6">
    <div class="card mb-4 box-shadow">
      <img class="card-img-top" src="${images[category]}"  data-holder-rendered="true">
      <div class="card-body">
        <p class="card-text card-name" >${keysArray[0]}: ${element[keysArray[0]]}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="col-sm-2">
            
            <button data-number="${count}" type="button" class="btn btn-sm btn-outline-secondary" data-name="${element[keysArray[0]]}" id="${category}">More</button>
          </div>
         <div class="col-sm-10">
          <ul class="list-group hide" data-element="${element[keysArray[0]]}">
         </div>
          
        </ul>

        </div>
      </div>
    </div>
  </div>`
    count++;

  });

  //containerAlbum.addEventListener('click', (e)=> showMore(e,keysArray))
  //сделать вывод инфо через collapse 
}

containerAlbum.addEventListener('click', (e) => showMore(e))

function showMore(e) {
  let keysArray;
  let number = e.target.getAttribute('data-number');
  console.log(e.target);
  if (e.target.type === "button") {
    let nameMore = e.target.getAttribute('data-name');
    let categoryName = e.target.getAttribute('id');
    let ul = containerAlbum.querySelector(`[data-element="${nameMore}"]`);
    ul.innerHTML = '';
    if (categoryName === "Planets") {
      keysArray = planets;
    } else if (categoryName === "People") {
      keysArray = people;
    } else if (categoryName === "Vehicles") {
      keysArray = vehicles;
    }
    keysArray.forEach((element) => {

      let li = document.createElement('li');

      if (element === 'films') {
        li.innerHTML = 'loading films...';
        li.setAttribute('data-name', nameMore);
      } else {
        li.innerHTML = `<b>${element}</b>: ${data[number][element]}`;
      }
      ul.append(li);
    })
    if (!films[nameMore]) {
      console.log('hi')
      getFilms(number, nameMore, ul);
    } else {
      let li = ul.querySelector(`[data-name]`);
      li.innerHTML = "Films---: ";
      films[nameMore].forEach((e) => {
        li.innerHTML += e + ", ";
      })
    }

    ul.classList.toggle("hide");
  }
}



function getFilms(number, nameMore, ul) {
  let dataFilms = data[number].films;
  let dete;
  filmsTitles = [];
  dataFilms.forEach(async (e) => {
    try {
      const response = await fetch(e);
      dete = await response.json();
      console.log(dete.title);
      filmsTitles.push(dete.title);
      films[nameMore] = filmsTitles;
      addFilms(filmsTitles, ul);

    } catch (error) {
      console.log(error);
    }
  })

}
function addFilms(filmsTitles, ul) {
  let li = ul.querySelector(`[data-name]`)
  li.innerHTML = "Films: ";
  filmsTitles.forEach(e => {
    li.innerHTML += e + ", ";
  })
}

function makePagination(pagination, url) {
  originUrl = url;
  let countPage = 1;
  for (let i = 10; i <= pagination['count']; i += 10) {
    let li = document.createElement('li');
    li.setAttribute('class', 'page-item');
    li.innerHTML = `<a class="page-link" href="${url}?page=${countPage}" data-page=Page-${countPage}>${countPage}</a>`
    ulPages.append(li);
    countPage++;
  }
  if (pagination['previous']) {
    let li = document.createElement('li');
    li.innerHTML = `<li class="page-item"><a class="page-link" href="${pagination['previous']}">Previous</a></li>`;
    ulPages.prepend(li);
  }
  if (pagination['next']) {
    let li = document.createElement('li');
    li.innerHTML = `<li class="page-item"><a class="page-link" href="${pagination['next']}">Next</a></li>`;
    ulPages.append(li);
  }
}

ulPages.addEventListener('click', (e) => {
  e.preventDefault();
  containerAlbum.innerHTML = `${nameCategory.innerHTML} Loading...`;
  
  page.innerHTML = e.target.getAttribute('data-page')
  checkUrlFetch(e);
})