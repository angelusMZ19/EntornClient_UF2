
export class Cicle{
    constructor(nom, categoria, numAlumnes, abreviatura) {
        this.nom = nom;
        this.categoria = categoria;
        this.numAlumnes = numAlumnes;
        this.abreviatura = abreviatura;
        this.numEdicions = 0;
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

  
    
    toString() {
        let str = this.abreviatura.toUpperCase() + '. ' + this.nom + '\nCategoria: ' + this.categoria + '\nNúmero d\'alumnes: ' + this.numAlumnes + '\nNúmero d\'edicions: ' + this.numEdicions + '\nÚltima edició: ' + this.ultimaEdicio + '\nMòduls:\n';
    
        this.moduls.sort((a, b) => a.num - b.num).forEach(modul => {
            str += 'Nom: ' + modul.nom + ', Número: ' + modul.num + ', Hores: ' + modul.hores + '\n';
        });
    
        return str;
    }
    

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