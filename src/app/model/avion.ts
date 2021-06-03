export class Engin {
    vitesse = 0;
    nombrePlace = 20;

    constructor() {
        this.vitesse = 20;
    }

    presentation() {
        console.log("bonjour je suis un engin ");
    }
}



export class Avion extends Engin{
    
    constructor() {
        super();
    }

    decoller() {
        this.vitesse = 200;
    }

    static comparerVitesse(avion1, avion2) {
        return avion1.vitesse > avion2.vitesse;
    }
}

export class Helicoptere extends Engin {
    constructor() {
        super();
    }
}

mirage2000 = new Avion();
airbusA380 = new Avion();

mirage2000.decoller();
airbusA380.nombrePlace = 200;

unHelico = new Helicoptere();
unHelico.presentation();

Avion.comparerVitesse(mirage200, airbusA380);