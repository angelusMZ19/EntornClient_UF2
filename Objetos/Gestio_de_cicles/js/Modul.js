export class Modul {
    constructor(modulNom, modulNum, modulHores) {
        this.modulNom = modulNom;
        this.modulNum = modulNum;
        this.modulHores = modulHores;
    }
    toString() {
        let str = 'MP' + this.modulNum + '. ' + this.modulNom + ' (' + this.modulHores + ')';
        return str;
    }
    
}