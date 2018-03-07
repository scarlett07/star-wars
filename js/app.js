let containerFilms = $('#container-films');
const pelis = "https://swapi.co/api/films/";

function getData(url) {
  $.ajax({
      dataType: "json",
      url: url
    }).done(drawData)
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
      characters += `<p><a href="#">${personaje}</a></p>`
    })
    cardMovies += `<div class ="row">
    <div class="card col s12 m8 l6 ">
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
//console.log(cardMovies);

getData(pelis);
