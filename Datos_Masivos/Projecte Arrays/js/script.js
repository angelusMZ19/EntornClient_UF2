
let dades;
let pokemons=[];
let municipis = [];
let meteorits = [];
let movies = [];

// POKEMONS
fetch("js/data/pokemon.json")
  .then((response) => response.json())
  .then((data) => {
    dades = data.pokemon;

    dades.forEach(datos => {
      let infoPokemon = [];
      
      infoPokemon[0] = datos.img; 
      infoPokemon[1] = datos.name;
      infoPokemon[2] = datos.num; 
      infoPokemon[3] = datos.weight
  
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
      
      infoMunicipios[0] = datos.img;
      infoMunicipios[1] = datos.name; 
      infoMunicipios[2] = datos.num; 
      infoMunicipios[3] = datos.weight
  
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
      
      infoMeteoritos[0] = datos.img;
      infoMeteoritos[1] = datos.name; 
      infoMeteoritos[2] = datos.num; 
      infoMeteoritos[3] = datos.weight
  
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
      
      infoMovies[0] = datos.img;
      infoMovies[1] = datos.name; 
      infoMovies[2] = datos.num; 
      infoMovies[3] = datos.weight
  
      movies.push(infoMovies);
    });
    
  });
/* if (pokemons && municipis && meteorits && movies) {
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

  //////////////////////////////////////////////////////////////////////////////////
  /*function creaTabla() {
    console.clear();
    let tabla = [];
    for (let i = 0; i < 1000; i++) {
      let dades = [
        pokemons[i],
        municipis[i],
        meteorits[i],
        movies[i]
      ];
      tabla.push(dades);
    }
    //console.table(tabla);
    document.getElementById("tabla").innerHTML = tabla; 
    return tabla;
  }*/
  function creaTabla() {
	console.clear()
	for (let i = 0; i < 1000; i++) {
		let dades = [];
		dades[0] = pokemons[i],
		dades[1] = municipis[i],
		dades[2] = meteorits[i],
		dades[3] = movies[i]

		taula[i] = dades;
	};
	console.table(taula);
	printList(getDades()); // Printea la tabla en pantalla
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
	getDades().forEach(datos => {
		
		if (datos[3] != undefined) mitjana += parseInt(datos[3]);
	});
	mitjana /= getDades().length;
	mitjana = mitjana.toFixed(2);
	
	let p = document.getElementById('mitjana');
	if (getRadioButton() == 'pokemons' || getRadioButton()=='meteorits') p.innerHTML=mitjana+' kg';
	if (getRadioButton() == 'municipis')  p.innerHTML = mitjana + ' habitants';
	if (getRadioButton() == 'movies') p.innerHTML = mitjana + ' punts';
}
