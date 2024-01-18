
let dades;
let pokemons=[];
let municipis = [];
let meteorits = [];
let movies = [];

// POKEMONS
fetch("js/data/pokemon.json")
  .then((response) => response.json())
  .then((data) => {
    pokemons = data.pokemon;
  });

// MUNICIPIS
fetch("js/data/municipis.json")
  .then((response) => response.json())
  .then((data) => {
    municipis = data.elements;
  });

// METEORITS
fetch("js/data/earthMeteorites.json")
  .then((response) => response.json())
  .then((data) => {
    meteorits = data;
  });

// MOVIES
fetch("js/data/movies.json")
  .then((response) => response.json())
  .then((data) => {
    movies = data.movies;

    /* if (pokemonsa && municipis && meteorits && movies) {
      const combined = pokemons.map((pokemons, index) => {
        return {
          pokemon: pokemons.name,
          municipi: municipis[index].municipi_nom,
          earthMeteorite: meteorits[index].name,
          movie: movies[index].title
        };
      });
      console.table(combined);
    }*/
  });


  //////////////////////////////////////////////////////////////////////////////////
  function creaTabla() {
    console.clear();
    let tabla = [];
    for (let i = 0; i < 1000; i++) {
      let dades = {
         pokemons[i],
         municipis[i],
         meteorits[i],
         movies[i]
      };
      tabla.push(dades);
    }
    document.getElementById("tabla").innerHTML = tabla;
    return tabla;
    console.table(tabla);
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
    const searchTerm = prompt("Introdueix el valor a buscar:");
    const resultIndex = pokemons.indexOf(parseInt(searchTerm));
    
    if (resultIndex !== -1) {
        alert("Valor trobat a la posició " + resultIndex);
    } else {
        alert("Valor no trobat en l'array");
    }
}

function calcMitjana() {
	let mitjana = 0;
	getDades().forEach(dada => {
		
		if (dada[3] != undefined) mitjana += parseInt(dada[3]);
	});
	mitjana /= getDades().length;
	mitjana = mitjana.toFixed(2);
	
	let p = document.getElementById('mitjana');
	if (getRadioButton() == 'pokemons' || getRadioButton()=='meteorits') p.innerHTML=mitjana+' kg';
	if (getRadioButton() == 'municipis')  p.innerHTML = mitjana + ' habitants';
	if (getRadioButton() == 'movies') p.innerHTML = mitjana + ' punts';
}
