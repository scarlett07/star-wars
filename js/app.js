let containerFilms = $('#container-films');
const pelis = "https://swapi.co/api/films/";

$(document).ready(function(){
   // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
   $('.modal').modal();
    $(document).on("click", ".modal-trigger", showModal);
   getData(pelis, drawData );
 });

function getData(url, doIt) {
  $.ajax({
      dataType: "json",
      url: url
    }).done(doIt)
    .fail(function(status) {
      console.log("error");
    })
};

function drawData(data) {
  const films = data.results;
  console.log(films);
  let cardMovies = ' ';
  let characters = ' ';
  const poster = './assets/images/star-wars.jpg';
  films.forEach(function(element) {
    const movie = element.title;
    const resumen = element.opening_crawl;
    const personajes = element.characters;
    personajes.forEach(personaje => {
      characters += `<p><a class="modal-trigger" href="#modal1">${personaje}</a></p>`
    })
    cardMovies += `<div class ="row">
    <div class="card col s12 m8 l4 ">
    <div class="card-image waves-effect waves-block waves-light">
    <img class="activator" src=${poster}>
    </div>
    <div class="card-content">
    <span class="card-title activator grey-text text-darken-4">${movie}<i class="material-icons right">more_vert</i></span>
    <p>${resumen}</p>
    </div>
    <div class="card-reveal">
    <span class="card-title grey-text text-darken-4">${movie} <span>Characters</span><i class="material-icons right">close</i></span>
    ${characters}
    </div>
    </div>`;
    containerFilms.html(cardMovies)
  })

};

// Modales


 const showModal= event => {
   const characterURL = event.target.text
   getData(characterURL, resetModal)
 }

 const resetModal =(data)=>{
   let name = document.getElementById('name');
   let gender = document.getElementById('gender');
   let birth_year = document.getElementById('birth_year');
   let height = document.getElementById('height');
   let mass = document.getElementById('mass');
   let skin_color = document.getElementById('skin_color');
   let eye_color = document.getElementById('eye_color');
   let hair_color = document.getElementById('hair_color');

   name.innerText= data.name;
   gender.innerText= data.gender;
   birth_year.innerText= data.birth_year;
   height.innerText= data.height;
   mass.innerText= data.mass;
   skin_color.innerText= data.skin_color;
   eye_color.innerText= data.eye_color;
   hair_color.innerText= data.hair_color;

   console.log(name);
 }
