import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Note } from "../model/note";
import { MesPhotosService } from "./mesphotos.service";

@Injectable()
export class NoteService {
    listNote: Note[] = [];

    constructor(public afDB: AngularFireDatabase) {

    }

    ajouterNote() {
        let note = new Note("Nouvelle Note");//Crée une nouvelle note
        note.photo = MesPhotosService.getRandomPhoto();//Assigne une photo aléatoire à la nouvelle note

        this.afDB.list("/Notes").push({
            titre: note.titre,
            photo: note.photo
        });
    }

    loadNote() {
        //A chaque changement dans la table "Note", on appele la fonction snapshotChanges
        this.afDB.list("/Notes").snapshotChanges().subscribe(resultListNote => {
            this.listNote = [];//On réinitialise la liste de Note

            //On ajoute dans listNote tout le contenue de la table Note
            //resultListNote est un tableau contenant la liste des notes dans la table Note. 
            //La fonction forEach permet de faire une boucle sur ce tableau
            // for(let uneNote of resultListNote) 
            resultListNote.forEach((uneNote) => {
                //On récupère le titre et la photo depuis firebase
                const leTitre = uneNote.payload.exportVal().titre;
                const laPhoto = uneNote.payload.exportVal().photo;

                //On crée une nouvelle note avec le titre et la photo
                let maNouvelleNote = new Note(leTitre);
                maNouvelleNote.photo = laPhoto;

                //On ajoute à listeNote la nouvelle note
                this.listNote.push(maNouvelleNote);
            });
        });
    }
}