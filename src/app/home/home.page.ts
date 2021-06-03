import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listPhoto: string[] = ["Titre 1", "Titre 2", "Titre 3"];

  constructor() {}

}
