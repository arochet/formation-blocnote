import { Component } from '@angular/core';
import { MesPhotosService } from '../service/mesphotos.service';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public noteService: NoteService) {}

  //Fonction appelé lors de l'initialisation
  ngOnInit() {
    this.noteService.loadNote();//Charge les notes dans listNote
  }

  buttonAjoutNote() {
    //Appelé quand on clique sur l'ion-fab
    this.noteService.ajouterNote();
  }
}