import { Note } from "../model/note";
import { MesPhotosService } from "./mesphotos.service";

export class NoteService {
    listNote: Note[] = [new Note("Ma Note 1"), new Note("Ma Note 2"), new Note("Ma Note 3")];

    ajouterNote() {
        let note = new Note("Nouvelle Note");//Crée une nouvelle note
        note.photo = MesPhotosService.getRandomPhoto();//Assigne une photo aléatoire à la nouvelle note
        this.listNote.push(note);//Ajoute la note au tableau listNote
    }
}