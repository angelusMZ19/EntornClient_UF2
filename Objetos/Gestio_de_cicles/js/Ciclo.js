let llistatCicles = [];

class Cicle{//paso1
    constructor(nom, categoria, numAlumnes, abreviatura) {//paso2
        this.nom = nom;
        this.categoria = categoria;
        this.numAlumnes = numAlumnes;
        this.abreviatura = abreviatura;
        this.numEdicions = 0;//paso 3
        this.lastEditDate = null;
        this.moduls = [];
    }
    setNumEdicions(){
        this.numEdicions++;
        this.lastEditDate=new Date();
    }

    addModul(modul) {
        this.moduls.push(modul);
        this.moduls.sort((a, b) => a.num - b.num);
    }

    calculateHours() {
        let totalHours = 0;
        for (const modul of this.moduls) {
            totalHours += parseInt(modul.hores);
        }
        return totalHours;
    }

    




}

//esto va en el script.js
function toString(){


}















































/*
addModul(modul){
    this.moduls.push(modul);
    this.moduls.sort((a, b) => a.num - b.num);
}

calculateHours(){
    let totalHours = 0;
    for (const modul of this.moduls) {
        totalHours += parseInt(modul.hores);
    }
    return totalHours;
} */