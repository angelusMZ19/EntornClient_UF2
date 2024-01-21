
let dades;
let pokemons=[];
let municipis = [];
let meteorits = [];
let movies = [];
let taula = [];

// POKEMONS
fetch("js/data/pokemon.json")
  .then((response) => response.json())
  .then((data) => {
    dades = data.pokemon;

    dades.forEach(datos => {
      let infoPokemon = [];
       
      infoPokemon[0] = datos.num;      
      infoPokemon[1] = datos.name;
      infoPokemon[2] = datos.img;
      infoPokemon[3] = datos.weight;
  
      pokemons.push(infoPokemon);
    });
  });

// MUNICIPIS
fetch("js/data/municipis.json")
  .then((response) => response.json())
  .then((data) => {
    dades = data.elements;

    dades.forEach(datos => {
      let infoMunicipios = [];
      
      infoMunicipios[0] = datos.ine;
      infoMunicipios[1] = datos.municipi_nom;
      infoMunicipios[2] = datos.municipi_escut;
      infoMunicipios[3] = datos.nombre_habitants;
  
      municipis.push(infoMunicipios);
    });
  });

// METEORITS
fetch("js/data/earthMeteorites.json")
  .then((response) => response.json())
  .then((data) => {
    dades = data;

    dades.forEach(datos => {
      let infoMeteoritos = [];
      
      infoMeteoritos[0] = datos.id; 
      infoMeteoritos[1] = datos.name;
      infoMeteoritos[2] = datos.year;
      infoMeteoritos[3] = datos.mass;
  
      meteorits.push(infoMeteoritos);
    });
  });

// MOVIES
fetch("js/data/movies.json")
  .then((response) => response.json())
  .then((data) => {
    dades = data.movies;

    dades.forEach(datos => {
      let infoMovies = [];
      
      infoMovies[0] = datos.year;
      infoMovies[1] = datos.title;
      infoMovies[2] = datos.url; 
      infoMovies[3] = datos.rating;
  
      movies.push(infoMovies);
    });
    
  });


  /*________________________________________________________________________*/


function creaTabla(categoria) {
  document.getElementById("tabla").innerHTML = "";
  
  taula = []; //limpia la tabla
  
  let seleccion;
  if (categoria === "pokemons") seleccion = pokemons;
  else if (categoria === "municipis") seleccion = municipis;
  else if (categoria === "meteorits") seleccion = meteorits;
  else if (categoria === "movies") seleccion = movies;

  for (let i = 0; i < 1000; i++) {
    let dades = seleccion[i] || [];
    taula.push(dades);
  }

  let tablaHTML = "<table border='1' >";
  tablaHTML += "<tr><th>Num</th><th>Name</th><th>Image</th><th>caractersitic</th></tr>";

  for (let i = 0; i < taula.length; i++) {
    tablaHTML += "<tr>";
    for (let j = 0; j < taula[i].length; j++) {
      if (j === 2) {
        tablaHTML += "<td><img src='" + taula[i][j] + "' alt='Image' style='max-width: 100px; max-height: 100px;'></td>";
      } else {
        tablaHTML += "<td>" + taula[i][j] + "</td>";
      }
    }
    tablaHTML += "</tr>";
  }
  tablaHTML += "</table>";
  document.getElementById("tabla").innerHTML = tablaHTML;
}
  
  

function refresca() {
  location.reload();
}

function orderListAsc() {
  pokemons.sort();
  municipis.sort();
  meteorits.sort();
  movies.sort();
  creaTabla();
}

function orderListDesc() {
  pokemons.reverse();
  municipis.reverse();
  meteorits.reverse();
  movies.reverse();
  creaTabla();
}

function searchList() {
  const searchTerm = prompt("Introduce el valor a buscar:");
  const resultIndex = pokemons.indexOf(parseInt(searchTerm));

  if (resultIndex !== -1) {
    alert("Valor encontrado en la posición " + resultIndex);
  } else {
    alert("Valor no encontrado en el array");
  }
}

function calcMitjana(categoria) {
  let mitjana = 0;
  let datos = taula;

  datos.forEach((element) => {
    if (element[3] !== undefined) mitjana += parseInt(element[3]);
  });

  mitjana /= datos.length;
  mitjana = mitjana.toFixed(2);

  let p = document.getElementById('mitjana');
  if (categoria === 'pokemons' || categoria === 'meteorits') {
    p.innerHTML = mitjana + ' kg';
  }
  if (categoria === 'municipis') {
    p.innerHTML = mitjana + ' habitants';
  }
  if (categoria === 'movies') {
    p.innerHTML = mitjana + ' punts';
  }
}
