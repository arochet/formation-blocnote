import { Component } from '@angular/core';
import { MesPhotosService } from '../service/mesphotos.service';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public noteService: NoteService, public mesPhotosService: MesPhotosService) {}

  //Fonction appelé lors de l'initialisation
  ngOnInit() {
    //Pour chaque note de listNote (dans NoteService)
    for(let note of this.noteService.listNote) {
      //On modifie la photo en appelant mesPhotosService
      //GetRandomPhoto retourne un chemin d'accès comme "assets/img/photo" de manière aléatoire
      note.photo = this.mesPhotosService.getRandomPhoto();
    }
  }

  buttonAjoutNote() {
    //Appelé quand on clique sur l'ion-fab

    //Appel noteService pour ajouter une note
  }
}
