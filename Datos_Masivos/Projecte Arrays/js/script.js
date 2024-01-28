let dades;
let pokemons = [];
let municipis = [];
let meteorits = [];
let movies = [];
let taula = [];
let categoriaActual;
let arrayFiltrado = [];
let seleccion;

// Definir los nuevos arrays
let arrayLabels = ["Grass", "Poison", "Fire", "Flying", "Water", "Bug", "Normal", "Electric", "Ground", "Fighting", "Psychic", "Rock", "Ice", "Ghost", "Dragon"];
let arrayDadesGraf = [14, 33, 12, 19, 32, 12, 24, 9, 14, 8, 14, 11, 5, 3, 3];
let backgroundColor = RandomColores(arrayLabels.length);
let borderColor = getBorderColorArray(backgroundColor);

function getBorderColorArray(backgroundColorArray) {
  return backgroundColorArray.map(color => color.replace(",0.2", ""));
}

// POKEMONS
fetch("js/data/pokemon.json")
  .then((response) => response.json())
  .then((data) => {
    dades = data.pokemon;

    dades.forEach((datos) => {
      let infoPokemon = [];
      infoPokemon[0] = datos.num;
      infoPokemon[1] = datos.name;
      infoPokemon[2] = datos.img;
      infoPokemon[4] = datos.type;
      infoPokemon[3] = datos.weight;
      
      pokemons.push(infoPokemon);
    });

    // Llamada a la función para crear el Polar Chart después de cargar los datos
    createPolarChart();
  });

// MUNICIPIS
fetch("js/data/municipis.json")
  .then((response) => response.json())
  .then((data) => {
    dades = data.elements;

    dades.forEach((datos) => {
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

    dades.forEach((datos) => {
      let infoMeteoritos = [];
      infoMeteoritos[0] = datos.id;
      infoMeteoritos[1] = datos.name;
      infoMeteoritos[2] = datos.recclass;
      infoMeteoritos[3] = datos.mass;
      meteorits.push(infoMeteoritos);
    });
  });

// MOVIES
fetch("js/data/movies.json")
  .then((response) => response.json())
  .then((data) => {
    dades = data.movies;

    dades.forEach((datos) => {
      let infoMovies = [];
      infoMovies[0] = datos.year;
      infoMovies[1] = datos.title;
      infoMovies[2] = datos.url;
      infoMovies[3] = datos.rating;
      movies.push(infoMovies);
    });
  });

function refresh() {
  location.reload();
}

function printList(cumpleCondicion) {
  seleccion = document.getElementById("categorias").value;

  if (cumpleCondicion) {
    arrayFiltrado = cumpleCondicion;
  } else {
    if (seleccion === "pokemons") {
      arrayFiltrado = pokemons;
    } else if (seleccion === "municipis") {
      arrayFiltrado = municipis;
    } else if (seleccion === "meteorits") {
      arrayFiltrado = meteorits;
    } else if (seleccion === "movies") {
      arrayFiltrado = movies;
    } else {
      alert("Por favor, selecciona una categoría.");
      return;
    }
  }

  document.getElementById("tabla").innerHTML = "";
  taula = [];
  let encabezado;
  if (seleccion === "pokemons") {
    encabezado = ["Num", "Nombre", "Imagen", "Peso", "Tipo"];
  } else if (seleccion === "municipis") {
    encabezado = ["INE", "Municipi Nom", "Municipi Escut", "Nombre Habitants"];
  } else if (seleccion === "meteorits") {
    encabezado = ["ID", "Name", "Year", "Mass"];
  } else if (seleccion === "movies") {
    encabezado = ["Year", "Title", "URL", "Rating"];
  }
  let tablaHTML = "<table border='1' >";
  tablaHTML += "<tr>";
  encabezado.forEach((encabezado) => {
    tablaHTML += "<th>" + encabezado + "</th>";
  });
  tablaHTML += "</tr>";
  for (let i = 0; i < arrayFiltrado.length; i++) {
    tablaHTML += "<tr>";
    for (let j = 0; j < arrayFiltrado[i].length; j++) {
      if (
        (j === 2 && seleccion === "pokemons") ||
        (j === 2 && seleccion === "movies") ||
        (j === 2 && seleccion === "municipis")
      ) {
        tablaHTML +=
          "<td><img src='" +
          arrayFiltrado[i][j] +
          "' alt='Image' style='max-width: 100px; max-height: 100px;'></td>";
      } else {
        tablaHTML += "<td>" + arrayFiltrado[i][j] + "</td>";
      }
    }
    tablaHTML += "</tr>";
  }
  tablaHTML += "</table>";

  document.getElementById("tabla").innerHTML = tablaHTML;
}

// ordena ascendente
function orderListASC() {
  arrayFiltrado.sort((a, b) => {
    if (a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    }
    return 0;
  });

  printList();
}

// ordena descendente
function orderListDESC() {
  arrayFiltrado.sort((a, b) => {
    if (a[0] < b[0]) {
      return 1;
    } else if (a[0] > b[0]) {
      return -1;
    }
    return 0;
  });
  printList();
}

function cambiarCategoria(nuevaCategoria) {
  categoriaActual = nuevaCategoria;
  printList(nuevaCategoria);
}

function obtenerArrayCategoria(categoria) {
  let arraySeleccionado;
  if (categoria === "pokemons") arraySeleccionado = pokemons;
  else if (categoria === "municipis") arraySeleccionado = municipis;
  else if (categoria === "meteorits") arraySeleccionado = meteorits;
  else if (categoria === "movies") arraySeleccionado = movies;
  return arraySeleccionado;
}

function buscarConFiltro(datos, filtro) {
  filtro = filtro.toLowerCase();

  return datos.filter((element) => {
    return element.some((value) => {
      return typeof value === "string" && value.toLowerCase().includes(filtro);
    });
  });
}

function searchList() {
  seleccion = document.getElementById("categorias").value;
  let condicionBusqueda = prompt("Buscar:");
  condicionBusqueda = condicionBusqueda.toLowerCase();

  if (
    seleccion !== "pokemons" &&
    seleccion !== "municipis" &&
    seleccion !== "movies" &&
    seleccion !== "meteorits"
  ) {
    console.error("La categoría actual no es válida.");
    return;
  }

  let cumpleCondicion = buscarConFiltro(
    obtenerArrayCategoria(seleccion),
    condicionBusqueda
  );
  printList(cumpleCondicion);
}

function calcMitjana() {
  let tabla = document.getElementById("categorias").value;
  let suma = 0;
  let media = 0;
  let criterio = "";

  switch (tabla) {
    case "pokemons":
      pokemons.forEach((pokemon) => {
        suma += parseInt(pokemon[3]);
      });
      media = (suma / pokemons.length).toFixed(2);
      criterio = "peso";
      break;
    case "movies":
      movies.forEach((movie) => {
        suma += parseInt(movie[3]);
      });
      media = (suma / movies.length).toFixed(2);
      criterio = "rating";
      break;
    case "municipis":
      municipis.forEach((municipi) => {
        suma += parseInt(municipi[3]);
      });
      media = (suma / municipis.length).toFixed(2);
      criterio = "numero de habitantes";
      break;
    case "meteorits":
      meteorits.forEach((meteoro) => {
        suma += parseInt(meteoro[3]);
      });
      media = (suma / meteorits.length).toFixed(2);
      criterio = "masa";
      break;
  }

  alert(`${tabla} la media de ${criterio} es: ${media}`);
}

function createPolarChart() {
  let ctxPolar = document.getElementById("myChart").getContext("2d");

  let myPolarChart = new Chart(ctxPolar, {
    type: "polarArea",
    data: {
      labels: arrayLabels,
      datasets: [
        {
          label: "Catidad por tipo",
          data: arrayDadesGraf,
          backgroundColor: backgroundColor,
          borderWidth: 2,
          borderColor: borderColor,
        },
      ],
    },
  });
}

// colores aleatorios
function RandomColores(count) {
  let colors = [];

  for (let i = 0; i < count; i++) {
    colors.push(obtenerColor());
  }

  return colors;
}

// colores en formato rgba
function obtenerColor() {
  let o = Math.round,
    r = Math.random,
    s = 255;
  return "rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ",0.7)";
}