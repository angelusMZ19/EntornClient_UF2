
function operacionesConColores() {

    //cabe aclar que el => es usado para resumr la function en js 
    let colores = ['verd', 'vermell', 'groc', 'blau', 'negre', 'blanc'];
    let todosMenoresQueMarron = colores.every(color => color < 'marró');
    document.write("<b>1</b>. Todos los colores son menores que 'marró':  "+ "<b>"+ todosMenoresQueMarron + "</b>"+ "<br>");

    let coloresMenoresQueMarron = colores.filter(color => color < 'marró');
    document.write("<b>2</b>. Colores menores que 'marró':  "+ "<b>"+coloresMenoresQueMarron + "</b>"+"<br>");

    let ultimosDosColores = colores.slice(-2);
    document.write("<b>3</b>. Últimos dos colores:  "+ "<b>"+ultimosDosColores + "</b>"+"<br>");


    colores.push('turquesa');
    document.write("<b>4</b>. Array después de añadir 'turquesa':  "+ "<b>"+colores + "</b>"+ "<br>");

    let indiceVerd = colores.indexOf('verd');
    if (indiceVerd !== -1) {
        colores.splice(indiceVerd, 1);
    }
    document.write("<b>5</b>. Array después de eliminar 'verd' :  "+ "<b>"+ colores + "</b>"+"<br>");


    //at()
    let color = colores.at(-1);
    document.write("<b>6</b>.Uso de el metodo at():  "+ "<b>"+color+ "</b>"+ "<br>");
}
function metodosArray(){
    //cabe aclarar que el => es usado para resumir la function en js 
    //array en uso
    let nombres = ["Neus", "Oreo", "Rulo", "Vero", "Joana", "Oscar", "Adria", "Gemma"];
    document.write("El array a usar contiene : [ "+nombres+ " ]<br>");
   
    //at()
    let nom = nombres.at(-1);
    document.write("<b>1 </b>.Uso de el metodo at():  "+ "<b>"+ nom + "</b>"+ "<br>");
    
    //concat()
    let extra = ["Emil", "Tobias", "Linus"];
    let agg= nombres.concat(extra);
    document.write("<b>2</b>.Uso de el metodo concat():  "+ "<b>"+ agg + "</b>"+ "<br>");
    
    //constructor()
    const person = {
        firstName: "Angelo",
        lastName: "Montenegro",
        age: 20,
        eyeColor: "brown"
      };
      
    let text = person.constructor; // Accede al nombre de la función constructora
    document.write("<b>3 </b>.Uso de el metodo constructor():  " + "<b>"+ text + "</b>"+ "<br>");

    //copyWithin()
    nombres.copyWithin(2, 0, 2);
    document.write("<b>4 </b>.Uso de el metodo copyWithin():  "+ "<b>"+ nombres + "</b>"+ "<br>");

    //entries
    let iterator = nombres.entries();
    document.write("<b>5 </b>.Uso de el metodo entries(): ");
    for (let entry of iterator) {
        document.write("<b>"+" "+entry + "</b>");
    }
    document.write("<br>");

    //every()
    let result = nombres.every(nombres=>nombres.length>3);
    document.write("<b>6 </b>.Uso de el metodo every():  "+ "<b>"+ result + "</b>"+ "<br>");
  
    // filter()
    let filtro= nombres.filter(nombre => nombre.length > 3);
    document.write("<b>7</b>.Uso de el metodo filter():  "+ "<b>"+ filtro + "</b>"+ "<br>");
    

    // find()
    let encuentra = nombres.find(nombre => nombre.startsWith("O"));
    document.write("<b>8</b>.Uso de el metodo find():  "+ "<b>"+ encuentra + "</b>"+ "<br>");

    // findIndex()
    let encuentraPor = nombres.findIndex(nombre => nombre.startsWith("O"));
    document.write("<b>9</b>.Uso de el metodo findIndex():  "+ "<b>"+ encuentraPor + "</b>"+ "<br>");

    // flat()
    let char = [['↓', '→'], ['↑', '←'], ['☺', '☻']];
    let flat = char.flat();
    document.write("<b>10</b>.Uso de el metodo flat():  "+ "<b>"+ flat  + "</b>"+ "<br>");

    // flatMap()
    let nombre = ["Neus", "Oreo", "Rulo", "Vero", "Joana", "Oscar", "Adria", "Gemma"];
    let mapeo = nombre.flatMap(nombre => nombre.split(""));
    document.write("<b>11</b>.Uso de el metodo flatMap():  "+ "<b>"+ mapeo  + "</b>"+ "<br>");

    // forEach()
    document.write("<b>12</b>.Uso de el metodo foreach():  ");
    nombres.forEach(nombre => document.write("<b>"+ nombre  + "</b>"+ "<br>"));
   

    // includes()
    let incluye = nombres.includes("Oscar");
    document.write("<b>13</b>.Uso de el metodo includes():  "+ "<b>"+ incluye  + "</b>"+ "<br>");

    // indexOf()
    let busca = nombres.indexOf("Joana");
    document.write("<b>14</b>.Uso de el metodo indexOf():  "+ "<b>"+ busca  + "</b>"+ "<br>");

    // isArray()
    let esArray = Array.isArray(nombres);
    document.write("<b>15</b>.Uso de el metodo isArray():  "+ "<b>"+ esArray  + "</b>"+ "<br>");

    // join()
    let une = nombres.join("♫");
    document.write("<b>16</b>.Uso de el metodo join():  "+ "<b>"+ une + "</b>"+ "<br>");

    // keys()
    let keys = nombres.keys();
    document.write("<b>17</b>.Uso de el metodo keys(): "+ "<br>" );
    for (let key of keys) {
        document.write("<b>"+ key  + "</b>"+ "<br>");
    }
    document.write("<br>");
    

    // lastIndexOf()
    let posicion = nombres.lastIndexOf("Oreo");
    document.write("<b>18</b>.Uso de el metodo lastIndexOf():  "+ "<b>"+ posicion  + "</b>"+ "<br>");
 

    // length
    let longitud = nombres.length;
    document.write("<b>19</b>.Uso de el metodo length():  "+ "<b>"+ longitud  + "</b>"+ "<br>");
    

    // map()
    let mapp = nombres.map(nombre => nombre.length);
    document.write("<b>20</b>.Uso de el metodo map():  "+ "<b>"+ mapp  + "</b>"+ "<br>");

    // pop()
    let remover = nombres.pop();
    document.write("<b>21</b>.Uso de el metodo pop():  "+ "<b>"+ remover  + "</b>"+ "<br>");

    // push()
    let nuevoLong = nombres.push("Laura", "Pablo");
    document.write("<b>22</b>.Uso de el metodo push():  "+ "<b>"+ nuevoLong  + "</b>"+ "<br>");

    // reduce()
    let totalLong = nombres.reduce((sumaLong, nombre) => sumaLong + nombre.length, 0);
    document.write("<b>23</b>.Uso de el metodo reduce():  "+ "<b>"+ totalLong  + "</b>"+ "<br>");

    // reduceRight()
    let nomb = ["Neus", "Oreo", "Rulo", "Vero", "Joana", "Oscar", "Adria", "Gemma"];
    let concat = nomb.reduceRight((sumaLong, nomb) => sumaLong + " " + nomb, "");
    document.write("<b>24</b>.Uso de el metodo reduceRigth():  "+ "<b>"+ concat  + "</b>"+ "<br>");
    
    // reverse()
    let name = ["Neus", "Oreo", "Rulo", "Vero", "Joana", "Oscar", "Adria", "Gemma"];
    let reversa = name.reverse();
    document.write("<b>25</b>.Uso de el metodo reverse():  "+ "<b>"+ reversa  + "</b>"+ "<br>");
    

    // shift()
    let separa = nombres.shift();
    document.write("<b>26</b>.Uso de el metodo shift():  "+ "<b>"+ separa + "</b>"+ "<br>");

    // slice()
    let x = nombre.slice(2, 6);
    document.write("<b>27</b>.Uso de el metodo slice():  "+ "<b>"+ x  + "</b>"+ "<br>");

    //fill()
    nombres.fill("☺", 2, 6);
    document.write("<b>28</b>.Uso de el metodo fill():  "+ "<b>"+ nombres + "</b>"+ "<br>");

    //array restructurado
    let nomen = ["Neus", "Oreo", "Rulo", "Vero", "Joana", "Oscar", "Adria", "Gemma"];

    // some()
    let encuentraAlguno = nomen.some(elemento => elemento == "Oscar");
    document.write("<b>29</b>.Uso de el metodo some:  "+ "<b>"+ encuentraAlguno  + "</b>"+ "<br>");

    // sort()
    let orden = nomen.sort();
    document.write("<b>30</b>.Uso de el metodo sort():  "+ "<b>"+ orden + "</b>"+ "<br>");

    // splice()
    nomen.splice(2, 1, "♪"); 
    document.write("<b>31</b>.Uso de el metodo splice():  "+ "<b>"+ nomen + "</b>"+ "<br>"); 

    // toString()
    let cadena = nomen.toString();
    document.write("<b>32</b>.Uso de el metodo fill():  "+ "<b>"+ cadena + "</b>"+ "<br>");

    // unshift()
    let newLong= nomen.unshift("ANGELO");
    document.write("<b>33</b>.Uso de el metodo unshift():  "+ "<b>"+ newLong + "</b>"+ "<br>");
    document.write("<b>"+ nomen + "</b>"+ "<br>");

    // valueOf()
    let valor = nomen.valueOf();
    document.write("<b>34</b>.Uso de el metodo valueOf():  "+ "<b>"+ valor + "</b>"+ "<br>");

}
