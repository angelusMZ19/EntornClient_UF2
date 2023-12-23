			
// POKEMONS

let dades;


// POKEMONS
fetch("js/data/pokemon.json")
.then((response) => response.json())
.then((data) => {
	dades = data.pokemon;		
	
	console.log(dades)
	//console.log(dades[0].name)

});



// MUNICIPIS
fetch("js/data/municipis.json")
.then((response) => response.json())
.then((data) => {
	dades = data.elements;		
	
	console.log(dades)
	//console.log(dades[0].municipi_nom)
});



// METEORITS
fetch("js/data/earthMeteorites.json")
.then((response) => response.json())
.then((data) => {
	dades = data;		
	
	console.log(dades)
	//console.log(dades[0].name)
});


// MOVIES
fetch("js/data/movies.json")
.then((response) => response.json())
.then((data) => {
	dades = data.movies;		
	
	console.log(dades)
	//console.log(dades[0].title)
});



















/*var arrayDeArrays = [];
var fila = 0
jsonparsed.forEach(function(objeto){
arrayDeArrays[fila] = [];
arrayDeArrays[fila].push(pokemon.nom);
arrayDeArrays[fila].push(municipis.municipi);
arrayDeArrays[fila].push(objeto.peliculas);
arrayDeArrays[fila].push(objeto.earthmeteorit);
fila +=1;
   }
); */
