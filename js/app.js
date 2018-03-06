let containerFilms = $('#container-films');

function getData() {
  $.ajax({
    dataType: "json",
    url: "https://swapi.co/api/films/"
  }).done(drawData)
    .fail(function(status) {
    console.log("error");
  })
};

function drawData(data) {
  const films = data.results;
  console.log(films);
  let cardMovies = ' ';
  films.forEach(function(element) {
    const movie = element.title;
    const resumen = element.opening_crawl;
  //  const poster = 'https://dummyimage.com/150x150';
    cardMovies += `<div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="images/office.jpg">
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">${movie}<i class="material-icons right">more_vert</i></span>
        <p>${resumen}</p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
        <p><a href="#">This is a link</a></p>
        <p><a href="#">This is a link</a></p>
      </div>
`;
  })
  console.log(cardMovies);
  containerFilms.html(cardMovies)
};

getData();
