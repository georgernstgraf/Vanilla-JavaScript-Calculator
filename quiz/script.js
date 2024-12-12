class Feuer {
    temperatur;
    helligkeit;
    farbe;
    gewicht;
    groesse;
    istAn;
    constructor(
        neuTemperatur,
        neuHelligkeit,
        neuFarbe,
        neuGewicht,
        neuGroesse,
        neuistAn
    ) {
        this.temperatur = neuTemperatur;
        this.helligkeit = neuHelligkeit;
        this.farbe = neuFarbe;
        this.gewicht = neuGewicht;
        this.groesse = neuGroesse;
        this.istAn = neuistAn;
    }
    toString() {
        return `Dieses Feuer hat ${this.temperatur} Grad und leuchtet ${this.farbe}`;
    }
}

const silvesterFeuer = new Feuer(1200, 300000, 'hellgelb', 300, 2.5, true);
const kaminFeuer = new Feuer(800, 50000, 'orange', 4, 0.3, true);

console.log(silvesterFeuer.toString());
console.log(kaminFeuer.toString());
