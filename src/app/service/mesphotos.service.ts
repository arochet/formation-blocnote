export class MesPhotosService {
    static listChemin: string[] = [
        "assets/img/vacance1.jpeg",
        "assets/img/vacance2.jpeg",
        "assets/img/vacance3.jpeg"
    ];

    static getPhoto(index: number): string {
        //On verifie que l'index passé en paramètre soit correct (positif et inférieur à listChemin)
        if(index > -1 && index < this.listChemin.length)
        {
            return this.listChemin[index];
        } else {
            console.error("Attention ! index n'est pas bon : " + index);
            return null;
        }
    }

    static getRandomPhoto(): string {
        //Nombre aléatoire entre 0 et longeur du tableau listChemin -> le nombre d'image qu'il y a dans listChemin
        const nombreAleatoire = Math.floor(Math.random() * this.listChemin.length);
        return this.getPhoto(nombreAleatoire);
    }
}